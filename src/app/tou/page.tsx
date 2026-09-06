import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { BiPhone, BiPhoneCall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FcAddressBook, FcContacts, FcPhone } from "react-icons/fc";
import { LiaLinkedin } from "react-icons/lia";
import { RiWhatsappFill } from "react-icons/ri";

export default function TouPage() {
    return (
        <main className="bg-white text-black flex justify-center min-h-screen w-full">
            <div className="max-w-93.75 w-full pt-10 relative md:h-auto space-y-4 flex flex-col">
                <div>
                    <div data-aos="fade-right" className="rounded-r-full p-4 flex gap-4 bg-black text-white mr-4">
                        <div className="flex-1 ">
                            <h1 className="text-2xl">Almeida Tou</h1>
                            <p className="uppercase font-semibold">Arquitecto</p>
                            <p className="text-sm">Especialista em </p>
                        </div>
                        <div className="border-4 size-30 aspect-square rounded-full relative">
                            <img
                                className="object-cover rounded-full"
                                src="./profile.JPG"
                                alt="Profile image"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 flex flex-col flex-1">
                    <div data-aos="fade-left" className=" *:text-sm text-white  *:bg-slate-300/10 *:grid *:text-center *:p-4 *:rounded-full *:aspect-square *:place-content-center rounded-l-full grid grid-cols-3 gap-4 p-4 bg-slate-900 ml-4">
                        <a href="#" className="">
                            <FcPhone size={30} />
                            <span>Ligar</span>
                        </a>
                        <a href="#" className="">
                            <FcContacts size={30} className="mx-auto" />
                            <span>Guardar</span>
                        </a>
                        <a href="#" className="">
                            <FaMailBulk size={30} className="fill-blue-500 mx-auto" />
                            <span>Email</span>
                        </a>
                    </div>
                    <div data-aos="fade-up" className="flex-1 flex flex-col rounded-t-4xl space-y-4 p-4 bg-zinc-900 text-white">
                        <div className="grid *:bg-black *:rounded-full  grid-cols-2 px-4 gap-4 max-w-1/2 mx-auto">
                            <a href="#" className="aspect-square grid place-content-center">
                                <FaFacebook size={30} className="fill-blue-500 mx-auto" />
                            </a>
                            <a href="#" className="aspect-square grid place-content-center">
                                <AiFillInstagram size={30} className="fill-orange-600 mx-auto" />
                            </a>
                        </div>
                        <div className="grid *:bg-black *:rounded-full grid-cols-3 max-w-3/4 mx-auto px-4 gap-4">
                            <a href="#" className="  rounded-full aspect-square grid place-content-center">
                                <FaLinkedin size={30} className="fill-blue-500 mx-auto" />
                            </a>
                            <a href="#" className="  rounded-full aspect-square grid place-content-center">
                                <AiFillTikTok size={30} className="fill-white mx-auto" />
                            </a>
                            <a href="#" className="  rounded-full aspect-square grid place-content-center">
                                <RiWhatsappFill size={30} className="fill-green-500 mx-auto" />
                            </a>
                        </div>
                        <div className="text-center flex-1">
                            <h2 className="font-semibold">Sobre me</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius commodi similique illum, libero ipsam esse quam enim quo corrupti quisquam explicabo! Et sit, ratione perferendis unde at dolorem eaque deserunt.</p>
                        </div>
                        <div className="text-center">
                            <small>&copy; 2023 <a href="https://www.devmack.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DevMack</a>. All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}