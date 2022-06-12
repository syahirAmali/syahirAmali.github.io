
import { Flex, Button, useColorMode, Spacer, Link, Text, VStack } from '@chakra-ui/react';
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
          <Flex width={"20vw"} position={"fixed"} height={"100%"}>

            <VStack spacing='30px'>
              <Text fontSize='xl'>
                About me.
              </Text>
              <Text>
                With background in computer security and forensics in Malaysia. Syahir is a full time web developer, whom never would have thought he would fall in love with programming and spending his days solving problems. 
              </Text>
              <Text>
                Syahir traditionally began his career working as a web developer before making a move to web3 and blockchain development in early 2021. 
              </Text>
              <Text>
                For the first year he has been working as a freelancer for projects. Syahir has worked on projects such as forks for farm protocols which utilizes masterchef, autocompounders, vaults, and various erc20 and erc721 tokens. While working on solidity contracts and testing, Syahir is also incharge of building frontend and backend for his clients with varying tech stacks.  
              </Text>
              <Text>
                He is now interested in going deeper into solidity and working on the blockchain, optimizing contracts in terms of gas and security. 
              </Text>
              <Text>
                His other interest includes playing with his cat, strategy games such as civilization, mobas like league of legends, and nerding out to new gadgets and revisiting some retro consoles. 
              </Text>
            </VStack>
          </Flex>
        </Flex>
        
      <footer>
      
      </footer>
    </div>
  )
}
