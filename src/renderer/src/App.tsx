import { Content, RootLayout, Sidebar, DragTopBar } from '@/components'

const App = () => {
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <Sidebar className="p-3">Sidebar</Sidebar>
        <Content className="p-2 border-l border-l-white/20 bg-zinc-950/50">Content Page</Content>
      </RootLayout>
    </>
  )
}

export default App
