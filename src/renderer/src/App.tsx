import {
  Content,
  RootLayout,
  Sidebar,
  DragTopBar,
  ServiceButtonContainer,
  PreviewNoteLists,
  MarkdownEditor,
  NoteTitle
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const scrollReset = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DragTopBar />
      <RootLayout>
        <Sidebar className="p-3">
          <ServiceButtonContainer className="flex justify-between mt-1" />
          <PreviewNoteLists className="mt-3 space-y-2" onSelect={scrollReset} />
        </Sidebar>
        <Content
          className="p-2 border-l border-l-white/20 bg-zinc-950/50"
          ref={contentContainerRef}
        >
          <NoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
