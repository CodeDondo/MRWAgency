import { NextResponse } from "next/server";

export function GET(request) {
  const faviconUrl = new URL("/mrw_agency_logo_round.png", request.url);
  return NextResponse.redirect(faviconUrl, 308);
}
