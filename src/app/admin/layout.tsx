import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Side from '@/components/ui/core/Side'
import TopBar from '@/components/ui/core/TopBar'

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="">
      <div className=" min-h-dvh flex relative">
        <Side />
        <div className="pl-[5rem] pr-[1rem] py-[1rem] border w-screen flex flex-col gap-2">
          <TopBar />
          <div className="border"> {children}</div>
        </div>
      </div>
    </main>
  )
}
