import Head from 'next/head';
import Image from 'next/image';
import Header from '../src/components/Header/index';

export default function AboutPage() {
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

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    )
}