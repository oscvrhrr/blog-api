/* eslint-disable react/prop-types */
import { Box, Inset, Strong, Card, Flex  } from "@radix-ui/themes"
import { ChatBubbleIcon } from "@radix-ui/react-icons"
import CodeBlock from "./Codeblock"


export default function Post({title, content, datePosted, comments }) {
    return (
        <>
          <Flex justify={'center'}>
            <Box  maxWidth="240px" className="hover:transition ease-in hover:-translate-y-1 hover:scale-105 duration-300">
              <Card size="2" mx>
                <Inset clip="padding-bx" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 140,
                        backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>

                <p className="bg-radixblue-600 rounded px-2 py-1">{datePosted}</p>
                <Strong>{title}</Strong>
                <CodeBlock code={content}/>
                <Flex align="center">
                  <p className="mr-2">{comments}</p>
                  <ChatBubbleIcon/>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </> 
    )
}