import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'

export const MarkdownEditor = () => {
  const markdown = '# Ich Bin Sourasish'

  return (
    // In the MDXEditor Docs, contentEditableClassName allows us to perform content styling thus here we are doing it with tailwindcss
    <MDXEditor
      markdown={markdown}
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
