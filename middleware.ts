import { NextResponse } from "next/server";
import {
  noindexRobotsValue,
  shouldBlockSearchIndexing,
} from "./lib/indexing.mjs";

export function middleware() {
  const response = NextResponse.next();

  if (shouldBlockSearchIndexing()) {
    response.headers.set("X-Robots-Tag", noindexRobotsValue);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|img1/).*)"],
};
