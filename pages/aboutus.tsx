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

            <div className="flex justify-center m-8">
                Hi there! This is the barebones opening of a new coding academy meant to help kids and young adults enter into the field of programming. I'm Lee Delarm, I have over 20 years of experience programming
                in a variety of fields, such as finance, government sector, games, and general product development. One of my major goals in life is to inspire the next generation to be great stewards of our tech
                industry and the world at large. I focus on trying to make tech accessible and providing a way up for those most in need.
            </div>

            <footer className={styles.footer}>
                <div>Copyright 2022 Lee Delarm</div>
            </footer>
        </div>
    )
}

export default Home
