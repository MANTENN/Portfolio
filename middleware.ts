import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if ((request.headers.get('x-vercel-country-ip') || "US") !== "US") {
    return NextResponse.json(null, { status: 500 })
  }
  return NextResponse.next()
}