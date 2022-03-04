import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
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

            <div className={`${styles.courseHeader} flex justify-center items-center`}>
            </div>

            <div className="flex justify-center">
                <div className="pt-4">
                    The current offered courses are:
                    <p className="font-bold text-xl">Early Student (ages 12-18)</p>
                    <ul>
                        <li>Introduction to HTML - 2 classes</li>
                        <li>Introduction to CSS - 2 classes</li>
                        <li>Introduction to JavaScript - 2 classes</li>
                    </ul>
                    <div className="text-blue-400 underline">
                        <Link href="https://forms.gle/PbZfMB9D2fkoCUVe7">Sign up here</Link>
                    </div>

                    <p className="pt-8 text-red-600">(not available yet)</p>
                    <p className="font-bold text-xl text-gray-400">Free Range Student (18+)</p>
                    <ul className="text-gray-400">
                        <li>Introduction to HTML - 2 classes</li>
                        <li>Introduction to CSS - 2 classes</li>
                        <li>Introduction to JavaScript - 2 classes</li>
                    </ul>

                    <p className="pt-8 text-red-600">(not available yet)</p>
                    <p className="font-bold text-xl text-gray-400">Intermediary Student</p>
                    <ul className="text-gray-400">
                        <li>Introduction to React - 2 classes</li>
                        <li>Introduction to NextJS - 2 classes</li>
                        <li>Building Applications - 3 classes</li>
                    </ul>
                </div>
            </div>

            <footer className={styles.footer}>
                <div>Copyright 2022 Lee Delarm</div>
            </footer>
        </div>
    )
}

export default Home
