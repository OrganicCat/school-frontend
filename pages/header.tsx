export default function Header() {
    return (
        <div className="flex text-black bg-white p-4">
            <div className="flex-1 text-xl">Haptic Academy</div>
            <div className="flex flex-row space-x-8">
                <div><a href="#">Courses</a></div>
                <div><a href="#">Location</a></div>
                <div><a href="#">Services</a></div>
                <div><a href="#">About Us</a></div>
            </div>
        </div>)
}

