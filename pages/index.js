//1. Import Area
import Head from 'next/head'
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

//2. Defination Area
export default function Home() {
  return (
    <div className="container p-0 cbdr">
      <Head>
        <title>Find Businesses Near You on Local Search Engine - Justdial</title>
        <meta name="description" content="Justdial, India's No. 1 local search engine, for Restaurants, Hotels, Salons, Real Estate, Travel, Healthcare, Education, B2B Businesses and more. Find addresses, phone numbers, reviews and ratings, photos, maps of businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main> Main page </main>
      <Footer />
      
    </div>
  )
}
