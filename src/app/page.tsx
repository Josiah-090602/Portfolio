'use client'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from '@/components/ui/core/landing/Hero'
import TopNav from '@/components/ui/core/landing/TopNav'
import { Dock, DockIcon } from '@/components/ui/dock'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { IconHome, IconBriefcase, IconStack2 } from '@tabler/icons-react'
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/providers/theme/theme-toggle'

const links = [
  {
    label: 'Home',
    href: '/',
    icon: <IconHome className=" size-6 " />,
  },
  {
    label: 'Experience',
    href: '/projects',
    icon: <IconBriefcase className="size-6 " />,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: <IconStack2 className=" size-6 " />,
  },
]

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen  gap-16">
      <main>
        <Hero />
        <div className="flex items-center">
          <Dock
            magnification={50}
            direction="bottom"
            className="bg-gradient-to-l from-cyan-800/20 to-purple-800/20 w-fit  fixed bottom-10 left-0 right-0 flex self-center h-fit justify-center gap-2 p-2 mt-0"
          >
            {links.map((link, idx) => (
              <DockIcon magnification={100} key={idx}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        aria-label={link.label}
                        className={cn(
                          buttonVariants({ variant: 'ghost', size: 'icon' }),
                          'size-10 rounded-full',
                        )}
                      >
                        {link.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground text-xs">
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full !bg-white" />

            <DockIcon>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle variant="switch" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-foreground text-xs">
                    <p>Mode</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DockIcon>
          </Dock>
        </div>
      </main>
    </div>
  )
}
