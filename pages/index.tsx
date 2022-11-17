import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PrimarySearchAppBar from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Footer />
    
    </div>
    
  )
}
