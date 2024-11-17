import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import {
  authCsrfToken,
  authSessionToken,
  callbackUrl,
} from "@/app/_constants/cookies-name";

export function GET(request: NextRequest) {
  cookies().delete(authCsrfToken);
  cookies().delete(authSessionToken);
  cookies().delete(callbackUrl);

  return NextResponse.redirect(new URL("/login", request.url));
}
