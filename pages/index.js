import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Where is Jajko!?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Where is Jajko!?" />
        <p className="Find him before he escapes...">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
