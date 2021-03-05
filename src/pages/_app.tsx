import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css';

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Plan It</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <NavBar />
      <div className="pb-40">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default App
