import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// ── Validation schema ──────────────────────────────────────────
const contactSchema = z.object({
  name:    z.string().min(2,  "Name must be at least 2 characters").max(100),
  email:   z.string().email("Invalid email address"),
  subject: z.string().min(3,  "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

// ── POST /api/contact ──────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Parse body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body." },
        { status: 400 }
      );
    }

    // 2. Validate
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // 3. Save to database
    const saved = await prisma.contactMessage.create({
      data: {
        name:    parsed.data.name,
        email:   parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
      },
    });

    return NextResponse.json(
      { success: true, id: saved.id },
      { status: 201 }
    );

  } catch (error: unknown) {
    // Log the real error so you can see it in the terminal
    console.error("=== /api/contact POST error ===");
    console.error(error);

    const message =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { success: false, message: `Server error: ${message}` },
      { status: 500 }
    );
  }
}

// ── GET /api/contact ───────────────────────────────────────────
export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error: unknown) {
    console.error("=== /api/contact GET error ===");
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}