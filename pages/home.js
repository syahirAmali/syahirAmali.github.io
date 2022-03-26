
import { Center, Text, Heading, Flex, Button, useColorMode, Divider, VStack, Link, HStack } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { AiFillTwitterCircle, AiOutlineGithub, AiFillMail, AiOutlinePaperClip } from "react-icons/ai";
import NextLink from "next/link";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      
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

                <VStack spacing='60px'>
                  <Text fontSize='lg'>
                    After falling into the crypto rabbithole, I've made a transition to Web3. With so many available resources, a never ending journey of learning begins.
                  </Text>

                  <NextLink href='/projects' passHref>
                    <Link>
                      <Text fontSize='lg'>
                        Check out some Projects here.
                      </Text>
                    </Link>
                  </NextLink>
                  

                  <Center>

                    <HStack spacing='24px'>
                      <Link href='https://twitter.com/SyahirAmali' isExternal><AiFillTwitterCircle /></Link>
                      <Link href='https://github.com/syahirAmali' isExternal><AiOutlineGithub /></Link>
                      <Link href='mailto:syahiramali@gmail.com' isExternal><AiFillMail /></Link>
                      <Link href='https://mirror.xyz/syahiramali.eth' isExternal><AiOutlinePaperClip /></Link>
                    </HStack>
                    
                  </Center>
                </VStack>
              </VStack>
            </Heading>
          </Center>
        </Flex>
      </Flex>
      
      <footer>
        
      </footer>

    </div>
  )
}
