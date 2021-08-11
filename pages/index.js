import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <p>Hola este es mi index</p>
      </Head>
      
      <main>
      <Image
          src="/images/200.jpg" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </main>
    </div>
  )
}
