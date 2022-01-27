import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'

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

            <div className="mx-auto">
                The current offered courses are:
                <p className="font-bold text-xl">Early Student (ages 12-18)</p>
                <ul>
                    <li>Introduction to HTML - 2 classes</li>
                    <li>Introduction to CSS - 2 classes</li>
                    <li>Introduction to JavaScript - 2 classes</li>
                </ul>

                <p className="font-bold text-xl pt-8">Free Range Student (18+)</p>
                <ul>
                    <li>Introduction to HTML - 2 classes</li>
                    <li>Introduction to CSS - 2 classes</li>
                    <li>Introduction to JavaScript - 2 classes</li>
                </ul>

                <p className="font-bold text-xl pt-8">Intermediary Student</p>
                <ul>
                    <li>Introduction to React - 2 classes</li>
                    <li>Introduction to NextJS - 2 classes</li>
                    <li>Building Applications - 3 classes</li>
                </ul>
            </div>

            <footer className={styles.footer}>
                <div>Copyright 2022 Lee Delarm</div>
            </footer>
        </div>
    )
}

export default Home
