import '@fontsource/roboto/400.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../lib/theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Syahir Amali</title>
        <link rel="icon" href="/cat.svg" />
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp