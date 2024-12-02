/* eslint-disable react/prop-types */
import { Popover, Button, Flex ,Box, TextArea } from "@radix-ui/themes"
import { useState,  } from "react"
import { useParams } from "react-router-dom"
import { ChatBubbleIcon } from "@radix-ui/react-icons"



export default function Comment ( { fetchPost }) {
    const [inputValues, setInputValues] = useState({})
    const [commentError, setCommentError] = useState('');
    const [nameError, setNameError] = useState('');
    const { postId } = useParams()

    const handleTextArea = (event) => {
        const { name, value } = event.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value}))
    }

    const sendComment = async(event) => {
        event.preventDefault()

        if(!inputValues.name || inputValues.name.length < 1) {
          return setNameError('You must enter your name')
        }

        if (!inputValues.comment || inputValues.comment.length < 1) {
           return setCommentError('You must enter a comment')
        }

        try {
          const response = await fetch(`http://localhost:4001/posts/${postId}/comment`, {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(inputValues)
            })
            if(response.ok) {
              const parsedData = await response.json();
              console.log(parsedData)
              setInputValues({})
              setNameError('')
              setCommentError('')
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
                        <ChatBubbleIcon/>
                    </Button>
                </Popover.Trigger>
                <Popover.Content size="1" width="360px">
                    <Flex direction="column" gap="4">
                        <Box flexGrow="1">
                            {nameError && <p className="error">{ nameError }</p>}
                            <TextArea  name="name" onChange={ handleTextArea } value={ inputValues.name || ''} placeholder="Write your name…" style={{ height: 80 }} />
                            {commentError && <p className="error">{commentError}</p>}
                            <TextArea name="comment" onChange={ handleTextArea } value={ inputValues.comment || ''} placeholder="Write a comment…" style={{ height: 80 }} />
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