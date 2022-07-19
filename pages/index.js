import Head from 'next/head';
import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import Section1 from '../src/components/Section1/index';
import PurpleWaves from '../src/components/PurpleWaves/index';


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
        <Section1 />
        <PurpleWaves />
        <section></section>
        <section></section>
        <section></section>
        
      </main>

      <Footer />
    </div>
  )
}
