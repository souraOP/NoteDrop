import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditorContent } from '@renderer/hooks/useMarkdownEditorContent'

export const MarkdownEditor = () => {
  const { selectedNote, editorRef, handleAutoSave, handleImmediateNoteTransitionSaving } =
    useMarkdownEditorContent()

  if (!selectedNote) {
    return null
  }

  return (
    <MDXEditor
      ref={editorRef}
      key={selectedNote.title}
      onChange={handleAutoSave}
      onBlur={handleImmediateNoteTransitionSaving}
      markdown={selectedNote.content}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-pink-500 text-zinc-300 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-blockquote:my-3 prose-headings:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin()
        // linkPlugin(),
        // toolbarPlugin({
        //   toolbarClassName: 'inline-block',
        //   toolbarContents: () => (
        //     <>
        //       {' '}
        //       <UndoRedo />
        //       <BoldItalicUnderlineToggles />
        //     </>
        //   )
        // })
      ]}
    />
  )
}
