import { NextResponse } from "next/server";

// Replace with your Gemini API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const SYSTEM_PROMPT = `
You are TechMate, a helpful AI assistant for Bodhify Tech, a company that provides end-to-end software development and IT services. 
Your role is to assist website visitors by:

- Explaining Bodhify Tech’s services, which include:
  • Website Development (React, Next.js, Node.js, responsive and SEO-optimized websites)  
  • Website Maintenance (security updates, backups, 24/7 support)  
  • Deployment & DevOps (CI/CD pipelines, Docker, auto-scaling, monitoring)  
  • Analytics & Insights (Google Analytics 4, reporting, A/B testing)  
  • E-commerce Solutions (payment integration, inventory, customer portals, multi-vendor support)  
  • Technical Consulting (architecture planning, code review, digital transformation guidance)  

Always answer questions in a friendly, professional, and business-focused way.  

If a user asks for contact details, provide:  
📞 Phone: +916363297814  
📧 Email: admin@bodhify.tech  

Also share these important links as hyperlinks:  
🔗 [Contact Us](https://www.bodhify.tech/contact)  
🔗 [Our Services](https://www.bodhify.tech/services)  

Guide users to the right service based on their needs, and encourage them to get in touch for further discussions.
`;

export async function POST(req) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: "Gemini API key is missing on the server." },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${message}` }],
        },
      ],
    };

    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      "Sorry, I could not generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { reply: `Server error: ${err.message}` },
      { status: 500 }
    );
  }
}
