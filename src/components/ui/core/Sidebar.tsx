'use client'
import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import {
  IconStack2,
  IconLayoutDashboard,
  IconStairs,
  IconLogout2,
} from '@tabler/icons-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { ModeToggle } from '../providers/theme/theme-toggle'

export function Side({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: (
        <IconLayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: 'Experience',
      href: '/admin/experience',
      icon: (
        <IconStairs className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: 'Projects',
      href: '/admin/projects',
      icon: (
        <IconStack2 className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        'rounded-md flex flex-col md:flex-row w-full flex-1 bg-background overflow-hidden',
        'h-screen',
      )}
    >
      <Sidebar animate={false}>
        <SidebarBody className=" !bg-background justify-between gap-10 border-r">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Link
              href="#"
              className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
            >
              <div className="flex items-center gap-4">
                <Logo size={30} />

                <p className="text-foreground text-xl font-semibold">
                  JOSIAH <span>VIERNES</span>
                </p>
              </div>
            </Link>

            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <ModeToggle />
        </SidebarBody>
      </Sidebar>

      <div className="p-4 w-screen">{children}</div>
    </div>
  )
}
