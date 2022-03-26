import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    ...chakraTheme.fonts,
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
}

const theme = extendTheme({ config })

export default theme