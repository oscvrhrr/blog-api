import { Box, RadioCards, Flex, Text } from "@radix-ui/themes"   



// eslint-disable-next-line react/prop-types
export default function SortMenu ({ handleSort }) {
  

    
    return (
        <Box className="mx-auto my-16" maxWidth="600px">
            <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
              <RadioCards.Item onClick={ () => handleSort('latest') } value="1">
                <Flex direction="column" width="100%">
                  <Text>All Posts</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item onClick={ () => handleSort('all') } value="2">
                <Flex direction="column" width="100%">
                  <Text>Latest Posts</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <Flex direction="column" width="100%">
                  <Text>About this Blog</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>
    )
}