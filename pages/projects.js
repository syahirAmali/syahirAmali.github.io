
import { Flex, Button, useColorMode, Spacer, Link, Text, VStack, UnorderedList, ListItem, Image } from '@chakra-ui/react';
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
          <Flex width={"25vw"}>

            <VStack spacing='30px'>
              <Text fontSize='xl'>
                Some personal projects in progress for 2022.
              </Text>
              <Text fontSize='md'>
                And things Syahir is working on for learning or for fun.
              </Text>
              <Text fontSize='sm' as='em'>
                *The list may change anytime or not be the most up to date*
              </Text>

              <UnorderedList size="md">
                <VStack spacing='30px'>

                <ListItem size="md">
                  <VStack spacing='10px'>
                    <Text fontSize='lg' >
                      Fully On-Chain Idle Game (ERC721-based)
                    </Text>
                    <Image src="/v1Infra.jpg"></Image>
                    <Text>
                      - A fully on-chain based nft idle game inspired by <a href="https://melvoridle.com/"><u>melvor idle</u></a>, this projects aim to replicate the basic functionality of the gameplay through the use of solidity smart contracts, libraries, and the usage of on-chain SVGs.
                    </Text>
                  </VStack>
                </ListItem>

                <ListItem size="md">
                  <VStack spacing='10px'>
                    <Text fontSize='lg' >
                      Proof Of Competency
                    </Text>
                    <Text>
                      - A way for developers to validate and proof competency on-chain, companies and senior developers will be able to release challenges and certifications through on-chain contracts that can be attempted by other developers to proof their competency. Syahir believes that this can be used to actually show understanding and skills in more specific areas, which will help more when it comes to gauging the skill level and ability to solve problems from a developer.
                    </Text>
                  </VStack>
                </ListItem>

                <ListItem size="md">
                  <VStack spacing='10px'>
                    <Text fontSize='lg'>
                      Back to basics - Solidity ed.
                    </Text>
                    <Text>
                      - Inspired by the works of <a href="https://solidity-by-example.org/"><u>Solidity by Example</u></a>, a resource of basic solidity examples and also some deeper analysis of concepts. Syahir intends to expand upon this by creating a version that explains the introductory concepts in a friendlier manner to newer software developers. <a href="https://github.com/syahirAmali/back-to-basics-solidity-ed"><u>Here</u></a>, you may find his progress in adding content and changing them to fit his requirements.
                    </Text>
                  </VStack>
                </ListItem>
                
                <ListItem size="md">
                  <VStack spacing='10px'>
                    <Text fontSize='lg'>
                      CTF Collections
                    </Text>
                    <Text>
                      - A Collection of CTF problems attempted and solved, is comprised of many sources which includes and not limited to:-
                    </Text>
                    <Text>
                      <a href="https://ethernaut.openzeppelin.com/"><u>Ethernaut</u></a>, by OpenZeppelin. A wargame inspired learning tool, to demonstrate from common to and more rare vulnerabilities.
                    </Text>
                    <Text>
                      <a href="https://capturetheether.com/"><u>Capture the Ether</u></a>, by @smarx. A traditional CTF event to learn about security.
                    </Text>
                    <Text>
                      <a href="https://www.damnvulnerabledefi.xyz/"><u>Damn Vulnerable Defi</u></a>, by @tinchoabbate. A similar wargame like ethernaut, but focuses more on offensive security and is useful for learning to become a bug hunter or security auditor.
                    </Text>
                    <Text>
                      <a href="https://blockchain-ctf.securityinnovation.com/#/"><u>Security Innovation Blockchain CTF</u></a>, by SecurityInnovation. A CTf platform for dapps and smart contract vulnerabilities.
                    </Text>
                    <Text>
                      <a href="https://github.com/nccgroup/GOATCasino"><u>Goat Casino</u></a>, by Goat Casino. Is an intentional release of vulnerable truffle smart contract deployment for aimed to allow hacking.
                    </Text>
                    <Text>
                      <a href="https://github.com/paradigm-operations/paradigm-ctf-2021"><u>Paradigm CTF 2021</u></a>, by Paradigm. Is an Eth focused security competition by paradigm.
                    </Text>

                    <Text>
                      - You may also find Syahir's attempt and documentation of these CTFs on his Git, <a href="https://github.com/syahirAmali/"><u>here</u></a>.
                    </Text>
                  </VStack>
                </ListItem>

                
                </VStack>
              </UnorderedList>

            </VStack>
          </Flex>
        </Flex>
        
      <footer>
      
      </footer>
    </div>
  )
}
