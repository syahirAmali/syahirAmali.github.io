
import { Center, Text, Heading, Flex, Button, useColorMode, Divider, VStack, Link, HStack, UnorderedList, ListItem, Tooltip  } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { AiFillTwitterCircle, AiOutlineGithub, AiFillMail } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";

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
        <Flex width={"25vw"} position={"fixed"} height={"100%"}>
          <Center>
            <Heading>
              <Center>
                <Text>
                  Hi, I'm Syahir.
                </Text>
              </Center>

              <VStack spacing='30px'>

                <Center>
                  <Text fontSize='xl'>
                    A Developer
                  </Text>
                </Center>

                <Divider />

                <Text fontSize='lg'>
                  Loves tech, shiny tools and cats.  
                </Text>
                
                <Text fontSize='lg'>
                  Currently building in web3 and trying to get more involved with the community. Looking to create a positive impact I have on the world and educate myself and others.    
                </Text>

                <Text fontSize='lg'> 
                  A never ending journey of learning.
                </Text>

                <VStack spacing='60px'>

                  <UnorderedList size="md">
                    <ListItem size="md">
                      <NextLink href='/about' passHref>
                        <Link>
                          <Text fontSize='lg' as='u'>
                            More about me.
                          </Text>
                        </Link>
                      </NextLink>
                    </ListItem>

                    <ListItem size="md">
                      <NextLink href='/skills' passHref>
                        <Link>
                          <Text fontSize='lg' as='u'>
                            Some skills.
                          </Text>
                        </Link>
                      </NextLink>
                    </ListItem>
                    
                    <ListItem size="md">
                      <NextLink href='/projects' passHref>
                        <Link>
                          <Text fontSize='lg' as='u'>
                            Some things im working on.
                          </Text>
                        </Link>
                      </NextLink>
                    </ListItem>
                  
                  </UnorderedList>

                  <Center>

                    <HStack spacing='24px'>
                      <Tooltip label='Twitter' fontSize='md'>
                        <Link href='https://twitter.com/SyahirAmali' isExternal><AiFillTwitterCircle /></Link>
                      </Tooltip>
                      <Tooltip label='Github' fontSize='md'>
                        <Link href='https://github.com/syahirAmali' isExternal><AiOutlineGithub /></Link>
                      </Tooltip>
                      <Tooltip label='Mail me' fontSize='md'>
                        <Link href='mailto:syahiramali@gmail.com' isExternal><AiFillMail /></Link>
                      </Tooltip>
                      <Tooltip label='Mirror Blog' fontSize='md'>
                        <Link href='https://mirror.xyz/syahiramali.eth' isExternal><BsNewspaper /></Link>
                      </Tooltip>
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
