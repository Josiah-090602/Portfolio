import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import LogoLight from '@/../public/images/LogoLight.svg'
import LogoDark from '@/../public/images/LogoDark.svg'

type LogoProps = {
  size: number
}

const Logo = ({ size }: LogoProps) => {
  const theme = useTheme()

  return (
    <>
      {theme.resolvedTheme === 'dark' ? (
        <Image src={LogoDark} alt="Logo Dark" width={size} height={size} />
      ) : (
        <Image src={LogoLight} alt="Logo Light" width={size} height={size} />
      )}
    </>
  )
}

export default Logo
