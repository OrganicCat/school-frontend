import Link from 'next/link'

export default function Header() {
    return (
        <div className="mx-auto max-w-screen-lg flex text-black bg-white p-4">
            <div className="flex-1 text-xl">Haptic Academy</div>
            <div className="flex flex-row space-x-8">
                <div><Link href="/">Home</Link></div>
                <div><Link href="courses">Courses</Link></div>
                <div><Link href="aboutus">About Us</Link></div>
            </div>
        </div>)
}

