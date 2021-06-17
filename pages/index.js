import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ exampleServerVar }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Layer0 Next App Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>NEXT_PUBLIC_EXAMPLE_VAR: {JSON.stringify(process.env.NEXT_PUBLIC_EXAMPLE_VAR)}</p>
        <p>EXAMPLE_VAR: {JSON.stringify(exampleServerVar)}</p>
      </main>
    </div>
  )
}

export const getServerSideProps = (ctx) => {
  return {
    props: {
      exampleServerVar: process.env.EXAMPLE_VAR
    }
  }
}
