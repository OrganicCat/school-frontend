import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Services() {
    return (
        <div className={`${styles.ralewayFont} flex mx-auto max-w-screen-lg justify-between py-12`}>
            <div><Image src="/coder.jpeg" width={400} height={400} /></div>
            <div className="w-1/2">
                <p className="font-bold text-xl">Services <span className="text-red-600">(not available yet)</span></p>
                <p className="pb-8">Looking to give your organization a coding boost? We offer starter classes in JavaScript, React, in-depth CSS styling, and more!</p>
                <p>Coding courses can be tailored towards your needs and your office's experience. Classes are offered remotely only at this time, but with the option for extra time and (nearly) unlimited questions through chat features.</p>
                <p className="pt-8 text-sm">Note: These services are offered to teach a pre-set course. They are not meant to substitute as a contractor to build your application.</p>
            </div>
        </div>)
}

