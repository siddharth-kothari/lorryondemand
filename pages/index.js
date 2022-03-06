import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lorry On Demand | Home</title>
        <link rel="icon" href="/logo-1.png" />
      </Head>
      <Header />

      <main className='h-96 w-full  '>
        <section className=''>

        </section>
      </main>

      <Footer />
    </div>
  )
}
