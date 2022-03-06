import Image from "next/image"
import { useRouter } from "next/router";


function Header() {
    const router = useRouter();
    return (
        <header className="sticky top-0 grid grid-cols-2 bg-gray-500 shadow-md">
            <div onClick={() => router.push("/")} className="relative h-20 flex flex-grow  cursor-pointer">
                <Image
                    src='/logo-1.png'
                    alt=" logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex space-x-4 text-white items-center justify-end pr-5">
                <p onClick={() => router.push("/about")} className="cursor-pointer hover:text-gray-400">About</p>
                <p onClick={() => router.push("/login")} className="cursor-pointer hover:text-gray-400">Login/Register</p>
                <p onClick={() => router.push("/contact")} className="cursor-pointer hover:text-gray-400">Contact Us</p>
            </div>
        </header >
    )
}

export default Header