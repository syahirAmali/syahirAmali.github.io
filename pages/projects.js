
import { Flex, Button, useColorMode, Spacer, Link, Text } from '@chakra-ui/react';
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
          <Text fontSize='xl'>
            Coming Soon.
          </Text>
        </Flex>
        
      <footer>
      
      </footer>
    </div>
  )
}
