import React from 'react'
import { logout } from '@/app/auth/_actions/actions'
import { Button } from '../button'
import { ModeToggle } from '../providers/theme/theme-toggle'
import Link from 'next/link'
import { Icon } from 'lucide-react'
import { IconLogout2 } from '@tabler/icons-react'

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2">
      <div className="flex gap-2 border-background w-fit h-fill">
        <Link href={''}> Breadcrumbs </Link>
      </div>
      <div className="flex gap-2 p-2 w-fit h-fill border rounded-md">
        <ModeToggle variant="dropdown" />
        <form action={logout}>
          <Button variant={'outline'} className="gap-2 py-1">
            <IconLogout2 name="log-out" size={24} />
            Logout
          </Button>
        </form>
      </div>
    </div>
  )
}

export default TopBar
