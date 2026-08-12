import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, destination, priorities, involvement, timeline, budget, email, phone } = body

    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim()

    // Format the email content
    const emailContent = `
New Travel Inquiry from Go Out On A LIM

Name: ${fullName || "Not provided"}
Contact Email: ${email}
Phone: ${phone || "Not provided"}

Destination: ${destination}

What matters most:
${priorities?.map((p: string) => `• ${p}`).join("\n") || "Not specified"}

Level of involvement: ${involvement || "Not specified"}

Timeline: ${timeline || "Not specified"}

Budget comfort: ${budget || "Not specified"}
    `.trim()

    const { error } = await resend.emails.send({
      from: "Go Out On A LIM <hello@gooutonalim.com>",
      to: "gooutonalimNOW@gmail.com",
      subject: `New Travel Inquiry: ${destination || "General Inquiry"}`,
      text: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
