import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lorry On Demand | Home</title>
        <link rel="icon" href="/logo-1.png" />
      </Head>
      <Header />

      <main className='h-auto w-full  '>
        <div className='relative h-[696px] '>
          <Image
            src='/truck.jpg'
            alt="Image of a truck"
            layout="fill"
            objectFit=" cover"
          />

          <div className='absolute bg-red-400 w-[95%] md:w-2/5 mt-16 ml-3 opacity-90 md:right-9 md:bottom-11'>
            <p className='text-white p-2'>POST DETAILS OF YOUR LOAD</p>
            <Form />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
