import Head from 'next/head'
import Home from './home';

export default function main() {

  return (
    <div>
      <Head>
        <title>Syahir Amali</title>
        <link rel="icon" href="/cat.svg" />
      </Head>
      <Home />
    </div>
  )
}
