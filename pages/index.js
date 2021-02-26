import { auth } from 'firebase'
import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        

        {auth?.user && (<img src = {auth?.user?.photoURL} className = {styles.card}></img>)}        
        {auth?.user && (<div className = {styles.code}>{auth?.user?.email}</div>)}
        
        {auth.user ? (<button className = {styles.card} style = {{cursor: "pointer"}} onClick = {(e) => auth.signout()}>Sign Out!</button>) : (
          <button className = {styles.card} style = {{cursor: "pointer"}} onClick = {(e) => {auth.signinWithGitHub()}}>Sign In!</button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;
