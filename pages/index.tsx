import { Analytics } from '@vercel/analytics/react'

import EarlyAccessRequest from '../components/EarlyAccessRequest'
import Footer from '../components/Footer'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import Works from '../components/Works'

import { Raleway, Open_Sans } from '@next/font/google'


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})


const Home = () => {
  return (
    <div className={raleway.className}>
      <Head>
        <title>Flyo - Landing Page</title>

        <meta name="description" content="Flyo - Landing Page" />
        <meta name="author" content="Moro Samuele" />
      </Head>

      <main>
        <Header />

        <Hero
          fontOpenSans={openSans}
        />

        <Works
          fontOpenSans={openSans}
        />

        <EarlyAccessRequest
          fontOpenSans={openSans}
        />
      </main>

      <Footer
        fontOpenSans={openSans}
      />

      <Analytics />
    </div>
  )
}

export default Home