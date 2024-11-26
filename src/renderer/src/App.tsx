import {
  Content,
  RootLayout,
  Sidebar,
  DragTopBar,
  ServiceButtonContainer,
  PreviewNoteLists
} from '@/components'

const App = () => {
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <Sidebar className="p-3">
          <ServiceButtonContainer className="flex justify-between mt-1" />
          <PreviewNoteLists className="mt-3 space-y-2" />
        </Sidebar>
        <Content className="p-2 border-l border-l-white/20 bg-zinc-950/50">Content Page</Content>
      </RootLayout>
    </>
  )
}

export default App
