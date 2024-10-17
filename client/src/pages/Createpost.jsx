import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const key = import.meta.env.VITE_TINY_APIKEY

export default function Createpost() {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };


    return (
        <main className="bg-[#F7F9FF] h-screen pt-16">
          <div className="flex items-center flex-col">
            <Editor

            apiKey={ key }
            onInit={(_evt, editor) => editorRef.current = editor}
            init={{
            height: 400,
            width: 800,
            menubar: false,
            plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
           />
           <button onClick={log}>Log editor content</button>
          </div>
        </main>
    )
}