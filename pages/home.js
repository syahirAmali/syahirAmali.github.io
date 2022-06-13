
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
          </Button>
      </Flex>
      
      <Flex justifyContent={"center"}>
        <Flex width={"45vw"}>
          <Heading>
              <Text align="center">
                Hi, I'm Syahir.
              </Text>

            <VStack spacing='30px'>
              <Text fontSize='xl'>
                A Developer
              </Text>

              <Divider />

              <Text fontSize='lg' textAlign="justify">
                Loves tech, shiny tools and cats.  
              </Text>
              
              <Text fontSize='lg' align="center" textAlign="justify">
                Currently building in web3 and trying to get more involved with the community. Looking to create a positive impact I have on the world and educate myself and others.    
              </Text>

              <Text fontSize='lg' textAlign="justify"> 
                A never ending journey of learning.
              </Text>

              <VStack spacing='60px'>
                <UnorderedList size="md">
                  <ListItem size="md">
                    <NextLink href='/about' passHref>
                      <Link>
                        <Text fontSize='lg' as='u'>
                          More about Syahir.
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
                          Some things he's working on.
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
                <Text fontSize='md'>
                  Feel free to reach out!
                </Text>
              </VStack>
            </VStack>
          </Heading>
        </Flex>
      </Flex>
      
      <footer>
      </footer>

    </div>
  )
}
