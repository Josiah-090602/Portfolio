'use client'
import React from 'react'
import GradientLogo from '@/../public/images/GradientLogo.svg'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import {
  IconLayoutDashboard,
  IconStack2,
  IconBriefcase,
} from '@tabler/icons-react'
import Link from 'next/link'
import { Button } from '../button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: <IconLayoutDashboard className=" h-6 w-6 flex-shrink-0" />,
  },
  {
    label: 'Experience',
    href: '/admin/experience',
    icon: <IconBriefcase className="0 h-6 w-6 flex-shrink-0" />,
  },
  {
    label: 'Projects',
    href: '/admin/projects',
    icon: <IconStack2 className=" h-6 w-6 flex-shrink-0" />,
  },
]

const Side = () => {
  const path = usePathname()

  return (
    <div className="flex flex-col justify-start items-center fixed left-0 top-0 h-screen bg-slate-950 w-[4rem] transition-all ease-in-out duration-300 hover:w-[18rem] overflow-hidden border-r">
      <div className=" p-4 w-full flex text-white items-center gap-[1.1rem] whitespace-nowrap">
        <Image src={GradientLogo} alt="Logo Dark" width={30} height={30} />
        <p className="text-xl ">
          JOSIAH <span className="text-blue-700 font-bold">VIERNES</span>
        </p>
      </div>
      <Separator className="mb-4 mx-4" />

      <div className="flex flex-col w-full gap-1">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href}>
            <Button
              size={'lg'}
              variant={'ghost'}
              className={cn(
                'w-full justify-start px-5 gap-[1.2rem] rounded-none text-base text-white hover:bg-slate-800/90 hover:text-blue-400',
                path === link.href
                  ? 'bg-slate-800/90 text-blue-700 hover:text-blue-700'
                  : '',
              )}
            >
              {link.icon}
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Side
