import Head from 'next/head'
import Footer from '../components/Footer'
import { useState } from 'react';
import Header from '../components/Header'

function Contact() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [mail, setMail] = useState();
  const [number, setNumber] = useState();
  const [msg, setMsg] = useState();

  return (
    <div>
      <div>
        <Head>
          <title>Lorry On Demand | Contact Us</title>
          <link rel="icon" href="/logo-1.png" />
        </Head>
        <Header />
        <main className='bg-gray-800 pb-10 grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <div>
              <h1 className='text-white font-bold text-2xl text-center pt-5 pb-5 md:text-left md:ml-10 md:mr-10 md:text-3xl'>Get in touch</h1>
              <p className='text-white text-sm text-center pb-5 ml-10 mr-10 md:text-left md:text-md'>Want to get in touch with us? We would love to hear from you. Just fill the form below to get in touch.</p>
            </div>


            <form id='contactform' className='relative rounded-lg bg-white p-3 grid mt-3 w-[98%] md:w-[90%] md:ml-auto md:mr-auto opacity-[0.9]'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="md:mr-2 mb-5">
                  <label htmlFor='Fname'>First Name:<span className='text-red-500 space-y-1'>*</span> </label><br />
                  <input type='text' value={fname} onChange={e => setFname(e.target.value)} name="Fname" aria-required='true' placeholder='Enter your first name'
                    className='w-full m rounded-md border-2 text-gray-600 p-2' />
                </div>

                <div className="md:ml-2 mb-5">
                  <label htmlFor='Lname'>Last Name:<span className='text-red-500 space-y-1'>*</span> </label><br />
                  <input type='text' value={lname} onChange={e => setLname(e.target.value)} name="Lname" aria-required='true' placeholder='Enter your last name'
                    className='w-full m rounded-md border-2 text-gray-600 p-2' />
                </div>

                <div className="md:mr-2 mb-5">
                  <label htmlFor='Email'>Email:<span className='text-red-500 space-y-1'>*</span> </label><br />
                  <input type='email' value={mail} onChange={e => setMail(e.target.value)} name="Email" aria-required='true' placeholder='Enter your Email'
                    className='w-full m rounded-md border-2 text-gray-600 p-2' />
                </div>

                <div className="md:ml-2 mb-5">
                  <label htmlFor='number'>Phone Number:<span className='text-red-500 space-y-1'>*</span> </label><br />
                  <input type='tel' value={number} onChange={e => setNumber(e.target.value)} name="number" aria-required='true' placeholder='Enter your phone number'
                    className='w-full m rounded-md border-2 text-gray-600 p-2' />
                </div>
              </div>

              <label htmlFor='msg'>Message:<span className='text-red-500 space-y-1'>*</span> </label><br />
              <textarea value={msg} onChange={e => setMsg(e.target.value)} name="msg" form='contactform' cols="30" rows="4" className='rounded-md border-2 text-gray-600 pl-2'>Enter your message here...</textarea>

              <div className=' w-full mt-5 mb-3 grid grid-cols-1 '>
                <button type="submit" className="bg-black w-[10rem] rounded-md shadow-x p-2 ml-auto mr-auto  text-white active:scale-95 transition transform duration-100">Send Message
                </button>
              </div>

            </form>

          </div>
        </main>
        <Footer />
      </div>
    </div >
  )
}

export default Contact