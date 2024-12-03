import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Avatar, Heading } from "@radix-ui/themes";
import { Blockquote } from "@radix-ui/themes";
import Comment from "../components/Comment";
import CodeBlock from "../components/CodeBlock";
import { formatDate } from "../lib/helperFunctions";
import { Text } from "@radix-ui/themes";


export default function PostDetail () {
    const [post, setPost] = useState();
    const [fetchedComments, setFetchedComments] = useState(); 

    
    const { postId } = useParams()
    const endpoint = `${import.meta.env.VITE_BASE_URL}posts/${postId}`;
      const fetchPost = async() => {
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.ok) {
                const parsedData = await response.json();
                setPost(parsedData);
                setFetchedComments(parsedData["comments"])
            }
        } catch (error) {
            console.log(error)
        }
      }

    useEffect(() => {
      fetchPost()
    }, [postId])


    if (!post) {
        return <div>Loading...</div>
    }


    return (
       <main className="bg-radixblue-200 min-h-screen h-full py-24">
            <aside className="w-3/4 bg-white border rounded-lg border-radixblack-700 mx-auto px-24 py-12 flex flex-col ">
                    <Avatar
                            size="2"
                            src="https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/avatar.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL2F2YXRhci5qcGVnIiwiaWF0IjoxNzI5NTM0MDUwLCJleHAiOjE3NjEwNzAwNTB9.5xDLiWLE5ef7odSO5LMRjh9Zsp3WykfEO4G1B9GuRrM&t=2024-10-21T18%3A07%3A30.898Z"
                            radius="full"
                        />
                <div  className="flex-grow mb-4">
                    <CodeBlock code={ post.content }/> 
                </div>
                <Comment fetchPost={ fetchPost } />
            </aside>
            <section>
            <Heading className="w-3/4 mx-auto block mt-10">Comments ({fetchedComments.length})</Heading>
                {
                    fetchedComments.map((comment, index) => (
                        <Blockquote className="mx-auto rounded my-2 px-2 py-1 bg-white border border-s-radixblack-700 w-3/4" key={index}>
                            <Text weight="bold">from: {comment.author} on {formatDate(comment.createdAt)}</Text>
                            <p>{comment.comment}</p>
                            
                        </Blockquote>
                    ))
                }
            </section>
       </main>
    )
}