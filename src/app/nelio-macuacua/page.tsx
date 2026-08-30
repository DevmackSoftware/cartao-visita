import LogoLoop from "@/components/LoopLogo";
import SaveContactButton from "@/components/SaveContactButton";
import TextType from "@/components/TextType";
import { BiPhoneCall, BiSolidContact } from "react-icons/bi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare, FaNodeJs, FaReact, FaTiktok } from "react-icons/fa";
import { FaEarthAfrica, FaEarthAsia } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFastify } from "react-icons/si";
import VideoPreview from "./_components/VideoPreview";

export default function NelioMacuacuaPage() {

    const imageLogos = [
        { node: <FaNodeJs /> },
        { node: <FaReact /> },
        { node: <RiTailwindCssFill /> },
        { node: <FiFigma /> },
        { node: <RiNextjsFill /> },
        { node: <SiFastify /> },
    ];

    return (
        <main className="flex justify-center items-center min-h-screen w-full">
            <div className="max-w-[375px] w-full p-4 relative md:h-auto">
                <VideoPreview />
                <div className="border border-zinc-400/50 bg-zinc-900/30 backdrop-blur-sm p-4 h-full shadow-2xl shadow-black space-y-4">
                    <div className="space-y-4">
                        <div className="size-30 border relative border-zinc-400/50 mx-auto shadow-2xl shadow-black space-y-4">
                            <img
                                className="object-cover"
                                src="./profile.JPG"
                                alt="Profile image"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Nélio Macuácua</h1>
                            <TextType
                                text={[
                                    "Desenvolvedor Web",
                                    "Desenvolvedor Mobile",
                                    "Desenvolvedor Desktop",
                                    "Desenvolvedor Full Stack",
                                    "Engenheiro de Software",
                                    "Criador de Soluções Digitais",
                                ]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="|"
                                deletingSpeed={50}
                                cursorBlinkDuration={0.5}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="border *:p-4 *:w-full divide-y divide-black border-black shadow-2xl shadow-black">
                            <a href="tel:+258833067953" className="flex justify-between items-center gap-4">
                                <BiPhoneCall size={30} className="fill-zinc-400" />
                                <div className="flex flex-col text-xs text-end">
                                    <span>
                                        Ligar já
                                    </span>
                                    <span>+258 83 306 7953</span>
                                </div>
                            </a>
                            <SaveContactButton />
                            <a href="mailto:nelio.macuacua@devmack.com" className="flex justify-between items-center gap-4">
                                <MdEmail size={30} className="fill-zinc-400" />
                                <div className="flex flex-col text-xs text-end">
                                    <span>
                                        Enviar email
                                    </span>
                                    <span>nelio.macuacua@devmack.com</span>
                                </div>
                            </a>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h2 className="font-medium">Conecte-se</h2>
                                <div className="divide-x divide-y shadow-xl shadow-black/40 border grid grid-cols-2 divide-black border-black *:p-4">
                                    <a href="https://wa.me/258833067953" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center gap-2">
                                        <BsWhatsapp size={30} className="fill-green-500" />
                                        <span>Whatsapp</span>
                                    </a>
                                    <a href="https://www.instagram.com/devmack.software?igsi=MzZ3bmhlZm1yYjd2%2F" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center gap-2">
                                        <BsInstagram size={30} className="fill-orange-500" />
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://www.facebook.com/share/1DRLSxVsVr/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center gap-2">
                                        <FaFacebookSquare size={30} className="fill-blue-600" />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@devmackmz" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center gap-2">
                                        <FaTiktok size={30} />
                                        <span>Tiktok</span>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-2 w-full mx-auto">
                                <h2 className="font-medium">Tecnologias</h2>
                                <LogoLoop
                                    logos={imageLogos}
                                    speed={100}
                                    direction="left"
                                    logoHeight={30}
                                    gap={40}
                                    hoverSpeed={0}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor="#141415"
                                    ariaLabel="Technology partners"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <small>&copy; 2023 <a href="https://www.devmack.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DevMack</a>. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </main>
    )
}