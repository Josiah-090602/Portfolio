'use client'
import React from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Logo from '../Logo'
import Link from 'next/link'
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconCode,
  IconDownload,
} from '@tabler/icons-react'
import { ButtonIcon } from '@radix-ui/react-icons'
import { Button } from '../../button'
import { ModeToggle } from '../../providers/theme/theme-toggle'
import { Separator } from '../../separator'
import AnimatedGradientText from '../../animated-gradient-text'
import { GradientButton } from './GradientButton'

const socials = [
  {
    name: 'GitHub',
    url: ' ',
    icon: (
      <IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    name: 'LinkedIn',
    url: ' ',
    icon: (
      <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    name: 'Facebook',
    url: ' ',
    icon: (
      <IconBrandFacebook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
]

export function Hero() {
  return (
    <div className="h-screen w-screen rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
      <TopNav />
      <div className="max-w-screen flex flex-col gap-8 items-center">
        {/* <BackgroundBeams /> */}
        <AnimatedGradientText className="text-center z-100">
          <IconCode className="h-4 w-4 " />
          <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300 " />{' '}
          <p className="text-xs font-semibold">Front-End Developer</p>
        </AnimatedGradientText>
        <h1 className="relative z-10 text-sm md:text-5xl font-bold bg-transparent bg-clip-text text-transparent text-center bg-gradient-to-l from-cyan-700 to-purple-700 ">
          <span className="text-foreground">Hi there!, I'm </span>
          JOSIAH B. VIERNES
        </h1>
        <p className="font-mono text-sm w-[40rem] text-center">
          {' '}
          "Developing intuitive, responsive websites that not only look great
          but deliver powerful functionality to drive user engagement and
          business growth."
        </p>
        <div className="flex gap-5">
          <Button variant={'outline'} className="w-fit ">
            Contact me
          </Button>
          <GradientButton
            label="Download CV"
            icon={<IconDownload className="w-5 h-5" />}
          />
        </div>
        <div className="opacity-40 z-[-1]">
          <BackgroundBeams />
        </div>
      </div>
    </div>
  )
}

export const TopNav = () => {
  return (
    <div className="w-screen flex py-5 px-4 md:px-[10rem] lg:px-[15rem] justify-between z-50 fixed top-0">
      <Logo size={30} />
      <div className="flex gap-2 items-center">
        {socials.map((social, idx) => (
          <Link key={idx} href={social.url}>
            <p className="text-xs font-thin hover:underline">{social.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
