import Head from 'next/head';
import Header from '../src/components/Header/index';
import Footer from '../src/components/Footer/index';
import Section1 from '../src/components/Section1/index';
import AboutMe from '../src/components/AboutMe/index';
import WaveContainer from '../src/components/WaveContainer/index';

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
        <section id="wave1">
          <WaveContainer />
        </section>
        <AboutMe />
        <section></section>
        <section></section>
        
      </main>

      <Footer />
    </div>
  )
}
