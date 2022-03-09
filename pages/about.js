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
                <Footer />
            </div>
        </div>
    )
}

export default About