import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Students from './students'
import Services from './services'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Haptic Academy</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <div className={`${styles.headerBody} flex justify-center items-center`}>
                <div>
                    <div className="text-4xl">Haptic Academy</div>
                    <div className={styles.ralewayFont}>
                        <p>Now teaching 12-18 year olds the skills they need to be prepared for a digital world.</p>
                        <p>Understand and create web pages. Own the technology that builds the future.</p>
                        <div className="cursor-pointer"><Link href="https://forms.gle/PbZfMB9D2fkoCUVe7"><div className="rounded-full bg-sky-600 text-white p-4 w-fit mt-4 font-bold">Sign Up Today</div></Link></div>
                        <p className="font-bold">Courses start March 12</p>
                    </div>
                </div>
            </div>

            <Students />

            <Services />

            <footer className={styles.footer}>
                <div>Copyright 2022 Lee Delarm</div>
            </footer>
        </div>
    )
}

export default Home
