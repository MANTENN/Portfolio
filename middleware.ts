import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production' && request.headers.get('x-vercel-country-ip') !== "US") {
    return NextResponse.json(null, { status: 500 })
  }
  return NextResponse.next()
}