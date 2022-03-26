import Head from 'next/head'

import { Center, Text, Heading, Flex, Button, useColorMode, Divider, VStack } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Syahir Amali</title>
        <link rel="icon" href="/cat.svg" />
      </Head>
      
      <Flex justify={'right'}>
          <Button leftIcon={<MoonIcon />} onClick={toggleColorMode} variant='ghost'>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
      </Flex>
      
      <Flex justifyContent={"center"}>
        <Flex width={"20vw"} position={"fixed"} height={"100%"}>
          <Center>
            <Heading>
              <Center>
                <Text>
                  Syahir Amali 
                </Text>
              </Center>

              <VStack spacing='30px'>

              <Center>
                <Text fontSize='xl'>
                  Web3 Developer
                </Text>
              </Center>

              <Divider />

              <Text fontSize='lg'>
                Hi, Im a web developer who loves technology, shiny machines, tools and cats.  
              </Text>

              <Text fontSize='lg'>
                After falling into the crypto rabbithole, I've made a transition to Web3. With so many available resources, a never ending journey of learning begins.
              </Text>

              </VStack>
            </Heading>
          </Center>
        </Flex>
        {/* <Text fontSize='lg'>
          Hi, Im a web developer who loves technology, shiny machines, tools and cats.  
        </Text>

        <Text fontSize='lg'>
          After falling into the crypto rabbithole, I've made a transition to Web3. With so many available resources, a never ending journey of learning begins.
        </Text> */}
      </Flex>
      
      <footer>
        
      </footer>

    </div>
  )
}
