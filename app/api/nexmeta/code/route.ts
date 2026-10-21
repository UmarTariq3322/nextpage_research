import { NextResponse } from "next/server";

import { isValidAmbassadorCode } from "@/lib/nexmeta-server";

// Checks an ambassador code without revealing the list of valid codes.
export async function POST(request: Request) {
  let code = "";
  try {
    code = String((await request.json())?.code ?? "").slice(0, 40);
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
  return NextResponse.json({ valid: isValidAmbassadorCode(code) });
}
