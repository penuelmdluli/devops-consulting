import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  )
}

async function getResend() {
  const { Resend } = await import("resend")
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, budget, message } = body

    const supabase = getSupabase()

    // Save to Supabase
    await supabase.from("consulting_leads").insert(body)

    // Send notification to business owner
    if (process.env.RESEND_API_KEY) {
      const resend = await getResend()
      const OWNER_EMAIL = process.env.OWNER_EMAIL || "sabelo@example.com"
      const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"

      await resend.emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: `New Lead: ${name} from ${company}`,
        html: `
          <h2>New Consulting Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })

      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "Thanks for reaching out — Sabelo Mdluli DevOps",
        html: `
          <h2>Hi ${name},</h2>
          <p>Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to book a consultation call directly on my calendar.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Sabelo Mdluli</strong><br/>DevOps Engineer &middot; Africa</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Failed to process" }, { status: 500 })
  }
}
