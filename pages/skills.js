
import { Flex, Button, useColorMode, Spacer, Link, Text, VStack, UnorderedList, ListItem, Center, HStack, Tooltip } from '@chakra-ui/react';
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
                </Button>
            </Flex>
        </Flex>

        <Flex justifyContent={"center"}>
          <Flex>
            
            <VStack spacing='30px'>
              <Text fontSize='xl'>
                Some skills that Syahir has.
              </Text>
              <Text fontSize='xl' as='u'>
                Development
              </Text>
              <UnorderedList size="md">

                <ListItem size="md">
                  <Text fontSize='lg' >
                    Solidity 
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    Hardhat, Foundry
                  </Text>
                </ListItem>
                
                <ListItem size="md">
                  <Text fontSize='lg'>
                    React, Vue
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    Etherjs, Web3js
                  </Text>
                </ListItem>
                
              </UnorderedList>

              <Text fontSize='xl' as='u'>
                Research
              </Text>
              <Text fontSize='sm' align="center">
                Other than development, Syahir also spends his time researching web3 and blockchain technologies that interest him.
              </Text>

              <UnorderedList size="md">

                <ListItem size="md">
                  <Text fontSize='lg' >
                    Ethereum (EVM), Contract Cptimizations (Security and Gas) 
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    Yul, Opcodes, Assembly language for the EVM
                  </Text>
                </ListItem>
                
                <ListItem size="md">
                  <Text fontSize='lg'>
                    Blockchain Monitoring
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    MEV and Marketplaces
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    ZK Rollups and Cairo, (Scaling Solutions)
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    Public Goods and Protocols
                  </Text>
                </ListItem>
                  
              </UnorderedList>
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
