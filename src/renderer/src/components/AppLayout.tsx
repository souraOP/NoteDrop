import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

// the root layout will contain the sidebar and main content

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

// will contain all the list of our notes
export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] mt-10 overflow-auto h-[100vh + 10px]', className)} {...props}>
      {children}
    </aside>
  )
}

// right part of the sidebar is the content page.
// have a ref prop
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
