import { BiHome } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FcBullish, FcHome, FcPackage } from "react-icons/fc";

export default function AngeloNgovenePage() {
    return (
        <main className="bg-white flex-col p-4 text-black w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col flex-1 space-y-4 max-w-[375px] w-full relative md:h-auto">
                <div className="border-2 aspect-video relative mb-20
                   before:absolute before:border-t-2 before:top-1 before:left-1 before:w-10 before:h-10 before:border-l-2
                   after:absolute after:border-b-2 after:bottom-1 after:right-1 after:w-10 after:h-10 after:border-r-2
                ">
                    <img
                        className="object-cover aspect-video"
                        src="./profile.JPG"
                        alt="Profile image"

                    />
                    <div className="shadow-xl shadow-black/50 border-2  w-3/4 absolute left-4 -bottom-1/3 bg-white/50 backdrop-blur-2xl p-4
                    before:absolute before:border-t-2 before:top-1 before:left-1 before:w-5 before:h-5 before:border-l-2
                    after:absolute after:border-b-2 after:bottom-1 after:right-1 after:w-5 after:h-5 after:border-r-2
                    ">
                        <h1 className="font-semibold uppercase text-xl">Angelo Ngovene</h1>
                        <p className="text-lg uppercase ">Arquitecto</p>
                        <p className="text-sm text-zinc-500">&#91;Com + 5 anos de experiencia&#93;</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">

                    <a href="#"
                        className="bg-black flex-col text-white justify-center items-center flex p-4 relative font-semibold
                                        before:absolute before:border-t-2 before:top-1 before:left-1 before:w-5 before:h-5 before:border-l-2
                                        after:absolute after:border-b-2 after:bottom-1 after:left-1 after:w-5 after:h-5 after:border-l-2
                        ">
                        <span>
                            Ligar
                        </span>
                        <span className="text-zinc-500 text-xs">&#91;+258 84 000 000&#93;</span>
                    </a>
                    <a href="#"
                        className="bg-black text-white justify-center items-center flex p-4 relative font-semibold flex-col
                                        before:absolute before:border-t-2 before:top-1 before:right-1 before:w-5 before:h-5 before:border-r-2
                                        after:absolute after:border-b-2 after:bottom-1 after:right-1 after:w-5 after:h-5 after:border-r-2
                        ">
                        <span>Guardar</span>
                        <span className="text-zinc-500 text-xs">&#91;+258 84 000 000&#93;</span>
                    </a>
                    <a href="" className="flex-col border-2 p-4 col-span-2 flex justify-center items-center font-semibold"

                    >
                        <span>Enviar email</span>
                        <span className="text-zinc-500 text-xs">&#91;angelo.govene@gmail.com&#93;</span>
                    </a>

                </div>
                <div className="flex-1 *:grid *:place-content-center *:bg-black divide-x divide-y divide-zinc-500 text-white grid grid-cols-2">
                    <a href="#" className="p-4 relative space-y-1
                    before:absolute before:border-t-2 before:top-1 before:left-1 before:w-5 before:h-5 before:border-l-2
                    ">
                        <BsWhatsapp size={30} className="mx-auto" />
                        <span className="text-zinc-500 text-xs">&#91;+258 84 000 000&#93;</span>
                    </a>
                    <a href="#" className="p-4 space-y-1">
                        <BsInstagram size={30} className="mx-auto" />
                        <span className="text-zinc-500 text-xs">&#91;@angelo&#93;</span>
                    </a>
                    <a href="#" className="p-4 space-y-1">
                        <BsFacebook size={30} className="mx-auto" />
                        <span className="text-zinc-500 text-xs">&#91;@angelo&#93;</span>
                    </a>
                    <a href="#" className="p-4 relative space-y-1
                                        after:absolute after:border-b-2 after:bottom-1 after:right-1 after:w-5 after:h-5 after:border-r-2
                    ">
                        <BsLinkedin size={30} className="mx-auto" />
                        <span className="text-zinc-500 text-xs">&#91;@angelo&#93;</span>
                    </a>
                </div>
                <div className="text-center">
                    <small>&copy; 2023 <a href="https://www.devmack.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DevMack</a>. All rights reserved.</small>
                </div>
            </div>
        </main>
    )
}