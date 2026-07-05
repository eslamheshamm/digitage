import nodemailer from "nodemailer"

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, message, "bot-field": botField } = body

  // honeypot: silently accept bot submissions without sending anything
  if (botField) {
    return Response.json({ ok: true })
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "name, email and message are required" },
      { status: 400 }
    )
  }
  if (message.length < 15 || message.length > 150) {
    return Response.json(
      { error: "message must be between 15 and 150 characters" },
      { status: 400 }
    )
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not set")
    return Response.json(
      { error: "Email service is not configured" },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Digitage Website" <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return Response.json({ ok: true })
  } catch (error) {
    console.error("Contact form: failed to send email", error)
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}
