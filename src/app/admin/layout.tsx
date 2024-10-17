import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Side from '@/components/ui/core/Side'

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="">
      <div className=" min-h-dvh flex relative">
        <Side />
        <div className="pl-[4rem] border w-screen">{children}</div>
      </div>
    </main>
  )
}
