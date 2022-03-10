/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


function About() {
    return (
        <div>
            <div>
                <Head>
                    <title>Lorry On Demand | About Us</title>
                    <link rel="icon" href="/logo-1.png" />
                </Head>
                <Header />
                <section className='bg-gray-800'>
                    <div>
                        <h1>About Us</h1>
                        <p>What is LorryOnDemand.com</p>
                        <p>*LorryOnDemand.com* provides *FREIGHT FORWARDING SERVICES*. We help forwarding goods from one place to another by connecting all Truck Owner/Driver
                            and Transport Agent and Industries at one place. we have a vast network and access to a library of freight carriers and search for the right availability
                            based on customer specifications. Logistics and transportation is now simple and easy for Every on in this Industry. In simple words, it is a 'truck booking'
                            platform for those finding trucks and its a platform to 'find goods that needs to be transported' for truck movers. LorryOnDemand.com exists only to make
                            Logistics and transportation Easy in the Industry.</p>
                        <p>How LorryOnDemand.com works?

                            This platform makes it convenient to book a truck and  move goods/material from one place to another. With the help of this website/app you
                            can post your requirement
                            ▫️How to post a booking?
                            1) What kind of truck you need?
                            2) Whats the Load?
                            3) Weight of the Load
                            4) Location of pickup and drop

                            Following this simple process your order is posted and is visible to  Truck Owenr/Driver Transport Agent. Once your a/c is verified
                            Your are ready to use all our services.

                            ▫️How to receive and accept booking?
                            1) As you Login you will find Posts regarding orders and all the details are mentioned there also you will be suggested best deal for you
                            as per your requirement
                            2) After selecting the right order for you get an option to connect us or get a quote online soon you will be get connected with goods provider
                            and you can send your truck to the pick up location.</p>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default About