import Image from "next/image"
import { useRouter } from "next/router";



function Header() {
    const router = useRouter();
    return (
        
        <header className="sticky top-0 grid grid-cols-2 z-50 bg-gray-500">
                    <div onClick={() => router.push("/")} className="relative h-[6rem] ml-5 flex flex-grow  cursor-pointer p-5">
                        <Image
                            src='/logo.svg'
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