
import { Flex, Button, useColorMode, Spacer, Link, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';
import { MoonIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import NextLink from "next/link";

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
          <Flex width={"25vw"} position={"fixed"} height={"100%"}>

            <VStack spacing='30px'>
              <Text fontSize='xl'>
                Some skills that Syahir has.
              </Text>
              <Text fontSize='xl'>
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

              <Text fontSize='xl'>
                Research
              </Text>
              <Text fontSize='sm'>
                Other than development, Syahir also spends his time researching web3 and blockchain technologies that interest him
              </Text>

              <UnorderedList size="md">

                <ListItem size="md">
                  <Text fontSize='lg' >
                    Ethereum(EVM), contract optimizations(security and gas) 
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
                    MEV and marketplaces
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    ZK Rollups and Cairo, (Scaling solutions)
                  </Text>
                </ListItem>

                <ListItem size="md">
                  <Text fontSize='lg'>
                    Public Goods and protocols
                  </Text>
                </ListItem>
                  
              </UnorderedList>
            </VStack>
          </Flex>
        </Flex>
        
      <footer>
      
      </footer>
    </div>
  )
}
