import { BiPhoneCall } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FcContacts, FcPhone } from "react-icons/fc";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import VideoPreview from "./_components/VideoPreview";

export default function DomingosMunguambePage() {
    return (
        <main className="flex justify-center items-center min-h-screen w-full">
            <div className="max-w-[375px] w-full p-4 relative md:h-auto">
                <VideoPreview />
                <div className="h-full space-y-4 rounded-2xl">
                    <div className="border-2 bg-black/50 backdrop-blur-2xl border-black rounded-2xl p-4 space-y-4" >
                        <div className="border-4 ring-4 border-black ring-blue-500 size-30 rounded-full mx-auto">
                            <img
                                className="object-cover rounded-full"
                                src="./profile.JPG"
                                alt="Profile image"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="font-semibold">Domingos Munguambe</h1>
                            <h2 className="text-sm uppercase font-medium">Contabulista</h2>
                        </div>
                    </div>
                    <div className="border-4 bg-black/50 backdrop-blur-2xl border-black/50 rounded-2xl aspect-video p-4">
                        <h2 className="font-semibold text-sm underline text-blue-500">Sobre</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm">
                                    Contabilista com mais de 10 anos de experiência,
                                    especializado em contabilidade,
                                    gestão financeira e abertura e
                                    regularização de empresas.
                                </p>
                            </div>
                            <div className="flex gap-4 items-center text-sm">
                                <div className="border-4 size-15 rounded-full aspect-square">
                                    <img
                                        className="object-cover rounded-full"
                                        src="./profile.JPG"
                                        alt="Profile image"
                                    />
                                </div>
                                <div>
                                    <p>
                                        Fundador da <span className="font-semibold text-blue-500">Conta Certa</span>,
                                        desde 2020, com foco em contabilidade e consultoria financeira.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 divide-x-2 divide-blue-900 bg-black/50 backdrop-blur-2xl border-black rounded-2xl grid grid-cols-2 text-xs font-medium">
                        <a href="#" className="rounded-l-2xl p-4 flex flex-col items-center justify-center">
                            <FcPhone size={30} />
                            <span>Ligar</span>
                        </a>
                        <a href="#" className="rounded-r-2xl p-4 flex flex-col justify-center items-center">
                            <FcContacts size={30} />
                            <span>Guardar</span>
                        </a>
                    </div>
                    <div className=" *:bg-zinc-900/70 *:border-2 rounded-2xl *:border-black *:grid *:place-content-center *:aspect-square gap-4 *:rounded-full grid grid-cols-3 bg-black/50 backdrop-blur-2xl border-black p-4">
                        <a href="#">
                            <MdEmail size={30} />
                        </a>
                        <a href="">
                            <BsLinkedin size={30} className="fill-blue-600" />
                        </a>
                        <a href="">
                            <BsWhatsapp size={30} className="fill-green-600" />
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