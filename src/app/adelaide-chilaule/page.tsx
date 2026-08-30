import { BiChevronRight } from "react-icons/bi"
import { PiPhone } from "react-icons/pi"
import VideoPreview from "./_components/VideoPreview"
import { LuContact } from "react-icons/lu"
import { BsInstagram } from "react-icons/bs"
import { LiaLinkedin } from "react-icons/lia"

export default function AdelaideChilaulePage() {
    return (
        <main className="flex justify-center items-center min-h-screen w-full">
            <div className="max-w-[375px] w-full p-4 relative md:h-auto">
                <VideoPreview />
                <div className="border rounded-2xl border-zinc-400/50 bg-zinc-900/30 backdrop-blur-sm p-4 h-full shadow-2xl shadow-black space-y-4">
                    <div className="space-y-2">
                        <div className="size-30 border-4 rounded-full border-dashed border-green-500 mx-auto">
                            <img
                                className="object-cover rounded-full"
                                src="./profile.JPG"
                                alt="Profile image"
                            />
                        </div>
                        <div className="text-center">
                            <h1>Adelaide Chilaule</h1>
                            <p className="text-sm font-bold uppercase text-zinc-500">Arquitecta</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a href="" className="border-2 border-green-400/20 p-4 bg-green-400/20 backdrop-blur-2xl rounded-2xl flex justify-between items-center gap-2">
                            <div className="flex items-center gap-4">
                                <PiPhone size={30} className="" />
                                <div className="flex flex-col text-sm">
                                    <span>
                                        Contacte já
                                    </span>
                                    <span className="text-zinc-300 text-xs">
                                        +258 84 000 0000
                                    </span>
                                </div>
                            </div>
                            <BiChevronRight size={30} />
                        </a>
                        <a href="" className="border-2 border-green-400/20 p-4 bg-green-400/20 rounded-2xl flex justify-between items-center gap-2">
                            <div className="flex items-center gap-4">
                                <LuContact size={30} className="" />
                                <div className="flex flex-col text-sm">
                                    <span>
                                        Guardar nos contactos
                                    </span>
                                    <span className="text-zinc-300 text-xs">
                                        +258 84 000 0000
                                    </span>
                                </div>
                            </div>
                            <BiChevronRight size={30} />
                        </a>
                        <a href="" className="border-2 border-green-400/20 p-4 bg-green-400/20 rounded-2xl flex justify-between items-center gap-2">
                            <div className="flex items-center gap-4">
                                <BsInstagram size={30} className="" />
                                <div className="flex flex-col text-sm">
                                    <span>
                                        Instagram
                                    </span>
                                    <span className="text-zinc-200 text-xs">
                                        @adelaide
                                    </span>
                                </div>
                            </div>
                            <BiChevronRight size={30} />
                        </a>
                        <a href="" className="border-2 border-green-400/20 p-4 bg-green-400/20 rounded-2xl flex justify-between items-center gap-2">
                            <div className="flex items-center gap-4">
                                <LiaLinkedin size={30} className="" />
                                <div className="flex flex-col text-sm">
                                    <span>
                                        Linkedin
                                    </span>
                                    <span className="text-zinc-200 text-xs">
                                        @adelaide
                                    </span>
                                </div>
                            </div>
                            <BiChevronRight size={30} />
                        </a>
                    </div>
                    <div className="text-center">
                        <small>&copy; 2023 <a href="https://www.devmack.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DevMack</a>. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </main>
    )
}