"use server";
import { Resend } from 'resend';
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({ name, email, message }) {
  try {
    // Gmail SMTP relay setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // or 587 if not using SSL
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // app password, not your real Gmail password
      },
    });

    const mailOptions = {
      from: `"Bodhify.tech" <${process.env.EMAIL_USER}>`,
      to: ["anishbarke9741@gmail.com", "shrinidhim9168@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d;">
            <p>This email was sent from the Bodhify.tech contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, data: info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}


export async function sendWelcomeEmail({ name, email }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bodhify.tech <welcome@bodhify.tech>',
      to: [email],
      subject: 'Welcome to Bodhify.tech!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; text-align: center;">Welcome to Bodhify.tech!</h2>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #007bff; margin-top: 0;">Thank you for reaching out, ${name}!</h3>
            <p style="color: #495057; font-size: 16px; line-height: 1.6;">
              We've received your message and will get back to you within 24 hours. 
              In the meantime, feel free to explore our services and learn more about what we can do for your business.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">What's Next?</h3>
            <ul style="color: #333; line-height: 1.8;">
              <li>Our team will review your message</li>
              <li>We'll prepare a personalized response</li>
              <li>You'll receive a detailed reply within 24 hours</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://bodhify.tech" 
               style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d;">
            <p>Best regards,<br>The Bodhify.tech Team</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
}
