import { NextResponse } from 'next/server'
 
export const middleware = () => {
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  return response
}