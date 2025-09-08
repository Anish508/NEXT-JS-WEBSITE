import { NextResponse } from 'next/server';

// Replace with your Gemini API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const SYSTEM_PROMPT = `You are Gemini, a helpful AI assistant for a tech business website. The company provides software development and maintenance services. Answer user questions about these services, guide them to contact, and be friendly and professional.`;

export async function POST(req) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: 'Gemini API key is missing on the server.' },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${message}` }],
        },
      ],
    };

    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { reply: `Gemini API error: ${errorText}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response.';

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { reply: `Server error: ${err.message}` },
      { status: 500 }
    );
  }
}
