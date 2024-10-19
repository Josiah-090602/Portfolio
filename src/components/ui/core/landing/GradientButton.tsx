'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type GradientButtonProps = {
  label?: string
  icon: React.JSX.Element
  size?: 'icon' | 'default' | 'sm' | 'lg' | null | undefined
}

export const GradientButton = ({ label, icon, size }: GradientButtonProps) => {
  return (
    <Button
      variant={'default'}
      size={size}
      className="bg-gradient-to-l from-cyan-700 to-purple-700 gap-2 w-fit text-white hover:from-cyan-600 hover:to-purple-600 "
    >
      {icon}
      {label}
    </Button>
  )
}
