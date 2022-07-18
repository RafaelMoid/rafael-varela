import Head from 'next/head';
import Image from 'next/image';
import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Varela</title>
        <meta name="description" content="Desenvolvedor frontend com experiencia em React e Next usando tanto JavaScript (JS) quando TypeScript (TS)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <h1>
          Welcome to <a href="https://www.linkedin.com/in/rafaelvarelati/">Rafael Varela</a> WebSite
          </h1>
        </section>
        <section></section>
        <section></section>
        <section></section>
        
      </main>

      <Footer />
    </div>
  )
}
