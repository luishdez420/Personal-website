import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Message must be at least 20 characters.").max(4000, "Message is too long.")
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: parsed.error.issues[0]?.message ?? "Please check the form fields."
      },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message: "Contact delivery is not configured yet. Please email Luis directly from the contact links."
      },
      { status: 503 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "luis-portfolio",
      receivedAt: new Date().toISOString(),
      ...parsed.data
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message: "The message could not be delivered. Please email Luis directly."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Message sent. Luis will follow up soon."
  });
}
