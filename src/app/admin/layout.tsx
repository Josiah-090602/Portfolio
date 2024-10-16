import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Side } from '@/components/ui/core/Sidebar'

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="">
      <div className=" min-h-dvh flex">
        <div className="h-full w-screen">
          <Side>{children}</Side>
        </div>
      </div>
    </main>
  )
}
