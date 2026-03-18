import { NextResponse } from "next/server"

const BACKEND_BASE_URL =
  process.env.CONTACT_FORM_BACKEND_URL ||
  process.env.CONTACT_API_BASE_URL ||
  "http://localhost:5001"

export async function POST(req: Request) {
  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body." }, { status: 400 })
  }

  const { fullName, email, phone } = (payload ?? {}) as Record<string, unknown>
  if (typeof fullName !== "string" || !fullName.trim()) {
    return NextResponse.json({ success: false, message: "Full name is required." }, { status: 400 })
  }
  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 })
  }
  if (typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ success: false, message: "Phone is required." }, { status: 400 })
  }

  const targetUrl = new URL("/api/contact/submit", BACKEND_BASE_URL).toString()

  let upstreamResponse: Response
  try {
    upstreamResponse = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Contact service is unavailable. Please try again later." },
      { status: 502 }
    )
  }

  const raw = await upstreamResponse.text()
  const contentType = upstreamResponse.headers.get("content-type") || ""

  if (contentType.includes("application/json")) {
    try {
      const data = JSON.parse(raw) as unknown
      return NextResponse.json(data, { status: upstreamResponse.status })
    } catch {
      // fall through to plain-text response
    }
  }

  return NextResponse.json(
    {
      success: upstreamResponse.ok,
      message: raw || upstreamResponse.statusText || "Unexpected response from contact service.",
    },
    { status: upstreamResponse.status }
  )
}
