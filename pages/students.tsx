import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Students() {
    return (
        <div className={`${styles.ralewayFont} flex mx-auto max-w-screen-lg justify-between py-12`}>
            <div className="w-1/2">
                <p className="font-bold text-xl">Student Coding</p>
                <p className="pb-8">There's no question coding is at the forefront of our current technology and also one of the most sought after job titles. Yet there's a shortage of coders everywhere.</p>
                <p>This is where your kids come in! We'll teach you them the basics of HTML, JavaScript, and CSS. By the end of the course, we'll help them create their own web page, and start their own coding path.</p>
                <div className="cursor-pointer"><Link href="https://forms.gle/PbZfMB9D2fkoCUVe7"><div className="rounded-full bg-sky-600 text-white p-4 w-fit mt-4 font-bold">Sign Up Today</div></Link></div>
            </div>
            <div><Image src="/coder.jpeg" width={400} height={400} /></div>
        </div>)
}

