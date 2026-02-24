import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Neplatná e-mailová adresa." },
        { status: 400 }
      );
    }

    await resend.contacts.create({
      email: email.toLowerCase().trim(),
      unsubscribed: false,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Newsletter signup error:", error);

    // Handle duplicate contact gracefully — don't reveal if email already exists
    if (
      error instanceof Error &&
      "statusCode" in error &&
      ((error as { statusCode: number }).statusCode === 409 ||
        (error as { statusCode: number }).statusCode === 422)
    ) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Nepodařilo se přidat e-mail. Zkuste to prosím později." },
      { status: 500 }
    );
  }
}
