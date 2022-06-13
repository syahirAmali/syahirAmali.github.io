
import { Flex, Button, useColorMode, Spacer, Link, Text, VStack, Image, Center, HStack, Tooltip } from '@chakra-ui/react';
import { MoonIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import { AiFillTwitterCircle, AiOutlineGithub, AiFillMail } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <div>
        <Flex>
            <Flex justify={'left'}>
            <NextLink href='/home' passHref>
                <Link>
                    <Button leftIcon={<ChevronLeftIcon />} variant='ghost'>
                        Back home
                    </Button>
                </Link>
            </NextLink>
                
            </Flex>
            <Spacer />
            <Flex justify={'right'}>
                <Button leftIcon={<MoonIcon />} onClick={toggleColorMode} variant='ghost'>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Flex>
        </Flex>

        <Flex justifyContent={"center"}>
          <Flex width={"45vw"}>

            <VStack spacing='30px'>
              <Text fontSize='xl'>
                About.
              </Text>
              <Text textAlign="justify">
                With background in computer security and forensics in Malaysia. Syahir is a full time web developer, whom never would have thought he would fall in love with programming and spending his days solving problems. 
              </Text>
              <Text textAlign="justify">
                Syahir traditionally began his career working as a web developer before making a move to web3 and blockchain development in early 2021. 
              </Text>
              <Text textAlign="justify">
                For the first year he has been working as a freelancer for projects. Syahir has worked on projects such as forks for farm protocols which utilizes masterchef, autocompounders, vaults, and various erc-20 and erc-721 tokens. While working on solidity contracts and testing, Syahir is also incharge of building frontend and backend for his clients with varying tech stacks.  
              </Text>
              <Text textAlign="justify">
                He is now interested in going deeper into solidity and working on the blockchain, optimizing contracts in terms of gas and security. 
              </Text>
              <Text textAlign="justify">
                His other interest includes playing with his cat, strategy games such as civilization, mobas like league of legends, and nerding out to new gadgets and revisiting some retro consoles. 
              </Text>
              <Text textAlign="justify">
                Obligatory picture of his cat...
              </Text>
              <Image src="/sunCat.jpg"></Image>

            </VStack>
          </Flex>
        </Flex>
        
      <footer>
      <Center padding="25px">
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
      </footer>
    </div>
  )
}
