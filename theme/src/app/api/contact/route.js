import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactEmail, sendWelcomeEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Save contact form to database
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await contact.save();

    // Send email notifications
    const [adminEmailResult, welcomeEmailResult] = await Promise.allSettled([
      sendContactEmail({ name, email, message }),
      sendWelcomeEmail({ name, email })
    ]);

    // Log any email errors but don't fail the request
    if (adminEmailResult.status === 'rejected') {
      console.error('Failed to send admin email:', adminEmailResult.reason);
    }
    if (welcomeEmailResult.status === 'rejected') {
      console.error('Failed to send welcome email:', welcomeEmailResult.reason);
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contact._id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A contact with this email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
