'use server'

import { z } from 'zod'
import { signIn, signOut } from '../../../../auth'
import { AuthError } from 'next-auth'
import { LoginSchema } from '../login/page'
import { redirect } from 'next/navigation'

export async function login(values: z.infer<typeof LoginSchema>) {
  try {
    await signIn('credentials', { ...values, redirectTo: '/admin/dashboard' })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid Credentials.'
        default:
          return 'An error occurred. Please try again.'
      }
    }
    throw error
  }
}

export const logout = async () => {
  await signOut({ redirectTo: '/auth/login' })
}
