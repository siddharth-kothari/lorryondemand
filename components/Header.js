import Image from "next/image"
import { useRouter } from "next/router";
import Form from "./Form";


function Header() {
    const router = useRouter();
    return (
        <main className='h-auto w-full  '>
            <div className='relative h-[696px] '>
                <Image
                    src='/truck.jpg'
                    alt="Image of a truck"
                    layout="fill"
                    objectFit=" cover"
                />

                <div className='absolute bg-red-400 mt-32 w-[95%] md:w-2/5 ml-3  opacity-90 md:right-9 md:bottom-11'>
                    <p className='text-white p-2'>POST DETAILS OF YOUR LOAD</p>
                    <Form />
                </div>

                <header className="sticky top-0 grid grid-cols-2 bg-black shadow-md opacity-70">
                    <div onClick={() => router.push("/")} className="relative h-20 flex flex-grow  cursor-pointer p-5">
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
            </div>
        </main>

    )
}

export default Header