import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';


const key = import.meta.env.VITE_TINY_APIKEY

export default function TinyEditor() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const editorRef = useRef(null);


    const createNewPost = async() => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}posts`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    
                },
                body: JSON.stringify({ title, content })
            })
            if(response.ok) {
                const parsedData = await  response.json();
                console.log(parsedData)
            }

        } catch(error) {
            console.log(error)
        }




    }
    

    return (
        <div className="flex items-center flex-col">
             <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <Editor
            apiKey={ key }
            onInit={(_evt, editor) => editorRef.current = editor}
            onEditorChange={(newValue, editor) => {
                setContent(editor.getContent({ format: 'html'}))
            }}
            init={{
            height: 400,
            width: 800,
            menubar: false,
            plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
            ],
            toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | codesample ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
           />
           <button className='bg-radixblue-500 rounded px-2 py-1' onClick={ createNewPost }>Log editor content</button>
          </div>
    )
}