import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  session: {
    strategy: 'jwt',
    maxAge: 86400, // 24 hours
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const path = nextUrl.pathname
      const isAdmin = path.startsWith('/admin')

      if (isLoggedIn) {
        if (path === '/admin') {
          // if user go to /admin, navigate back to dashboard
          return Response.redirect(new URL('/admin/dashboard', nextUrl))
        }
        if (isAdmin) return true
        return Response.redirect(new URL('/admin/dashboard', nextUrl))
      } else {
        if (isAdmin) {
          return Response.redirect(new URL('/', nextUrl))
        }
        return true
      }
    },
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user }
      }
      return token
    },
    async session({ session, token }) {
      return { ...session, ...token }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
