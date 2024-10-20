import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import prisma from './lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await prisma.user.findUnique({ where: { email } })
          return user && (await bcrypt.compare(password, user.password))
            ? user
            : null
        }
        console.error('Invalid credentials:', parsedCredentials.error)
        return null
      },
    }),
  ],
})
