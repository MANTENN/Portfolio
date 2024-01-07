import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.headers.get('x-vercel-country-ip'), request.headers.get('x-vercel-country-ip'))
  if (request.headers.get('x-vercel-country-ip') !== "US") {
    return NextResponse.json(null, { status: 500 })
  }
  return NextResponse.next()
}