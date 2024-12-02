import React from 'react'
import Prism from "prismjs"
import { useEffect } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'


const CodeBlock = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <div className="post-content"
                    dangerouslySetInnerHTML={{ __html: code }} 
                />
    </>
  )
}

export default CodeBlock