import { logout } from '@/app/auth/_actions/actions'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/providers/theme/theme-toggle'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <form action={logout}>
        <Button>Logout</Button>
      </form>
      <ModeToggle />
    </div>
  )
}

export default Dashboard
