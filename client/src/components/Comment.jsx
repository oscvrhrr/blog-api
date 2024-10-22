/* eslint-disable react/prop-types */
import { Popover, Button, Flex ,Box, TextArea } from "@radix-ui/themes"
import { useState,  } from "react"
import { useParams } from "react-router-dom"




export default function Comment ( { fetchPost }) {
    const [comment, setComment] = useState({})
    const { postId } = useParams()

    const handleTextArea = (event) => {
        const { value } = event.target;
        setComment((prevState) => ({ ...prevState, 'comment': value}))
    }

    const sendComment = async(event) => {
        event.preventDefault()
        try {
          const response = await fetch(`http://localhost:4001/posts/${postId}/comment`, {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(comment)
            })
            if(response.ok) {
              const parsedData = await response.json();
              console.log(parsedData)
              setComment({})
              fetchPost()
            }
        } catch (error) {
          console.log(error)
        }
    }



    return (
        <Popover.Root>
                <Popover.Trigger>
                    <Button variant="soft">
                        Comment
                    </Button>
                </Popover.Trigger>
                <Popover.Content width="360px">
                    <Flex gap="3">
                        <Box flexGrow="1">
                            <TextArea onChange={ handleTextArea } value={comment.comment || ''} placeholder="Write a comment…" style={{ height: 80 }} />
                            <Flex gap="3" mt="3" justify="between">
                                <Popover.Close>
                                    <Button onClick={ sendComment } size="1">Comment</Button>
                                </Popover.Close>
                            </Flex>
                        </Box>
                    </Flex>
                </Popover.Content>
            </Popover.Root>
    )
}