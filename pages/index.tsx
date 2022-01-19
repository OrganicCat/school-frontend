import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Haptic Academy</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
            </Head>
            <Header />

            <div className={`${styles.headerBody} flex justify-center items-center`}>
                <div>
                    <div className="text-4xl">Haptic Academy</div>
                    <div className={styles.ralewayFont}>
                        <p>Learn the JavaScript skills you need to be prepared for a digital world.</p>
                        <p>Understand and create web pages. Own the technology that builds the future.</p>
                    </div>
                </div>
            </div>

            <div className={styles.ralewayFont}>
                <div>
                    <p>Learn JavaScript la la la</p>
                    <p>To get into our 12-week and 36-week coding bootcamps, all applicants are required to pass our Technical Admissions Assessment, which tests for intermediate coding competency.</p>
                    <p>To set you on the path toward acing the assessment, we offer two Prep programs designed to fit different learning styles and schedules. Our Basic program is free and self-paced, while our Premium program is scheduled and includes live online support for $250.</p>
                    <p>Both are based on the same curriculum, which builds from software engineering basics to more complex problems.</p>
                </div>
                <div>test</div>
            </div>

            <main className={styles.main}>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
