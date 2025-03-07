import { useEffect } from 'react'
import AOSConfig from '../../tools/aosInit'
import Typography from '@mui/material/Typography';
import { FaComments } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
    useEffect(() => {
        AOSConfig()
    }, [])

    return (
        <>
            <div className="background-principal">
                <div className="capa flex flex-col" id="contact">
                    <div className="mt-[3rem]! md:mt-[6rem]! lg:mt-[7rem]! mb-16 custom-paddings">
                        <Typography
                            variant="h1"
                            component="div"
                            data-aos="fade-down"
                            className="
                            text-white 
                            text-[1.5rem]!
                            md:text-[2rem]!
                            lg:text-[3rem]!
                            font-extralight!
                            font-[Raleway]!
                            tracking-[1px]!
                            flex"
                        >
                            <FaComments className="mr-4" /> Contacto
                        </Typography>
                    </div>
                    <div className="flex flex-col mb-16 custom-paddings">
                        <div className="flex flex-col mb-7" data-aos="fade-down">
                            <span>
                                <FaPhone className="bg-white/25 text-white p-[1rem] text-5xl" />
                            </span>

                            <Typography
                                variant="h4"
                                component="div"
                                className="
                                text-[#e00231] 
                                text-[1.25rem]!
                                font-semibold!
                                font-[Raleway]!
                                tracking-[1px]!
                                drop-shadow-[1px_1px_2px_rgba(0,0,0,1)]
                                mt-1!"
                            >
                                Teléfono
                            </Typography>

                            <Typography
                                variant="p"
                                component="div"
                                className="
                                text-white 
                                text-[0.85rem]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1px]!
                                mt-1!"
                            >
                                0276-1234567
                            </Typography>
                        </div>

                        <div className="flex flex-col mb-7" data-aos="fade-down">
                            <FaFacebookF className="bg-white/25 text-white p-[1rem] text-5xl" />

                            <Typography
                                variant="h4"
                                component="div"
                                className="
                                text-[#e00231] 
                                text-[1.25rem]!
                                font-semibold!
                                font-[Raleway]!
                                tracking-[1px]!
                                drop-shadow-[1px_1px_2px_rgba(0,0,0,1)]
                                mt-1!"
                            >
                                Facebook
                            </Typography>
                        </div>

                        <div className="flex flex-col mb-7" data-aos="fade-down">
                            <FaXTwitter className="bg-white/25 text-white p-[1rem] text-5xl" />

                            <Typography
                                variant="h4"
                                component="div"
                                className="
                                text-[#e00231] 
                                text-[1.25rem]!
                                font-semibold!
                                font-[Raleway]!
                                tracking-[1px]!
                                drop-shadow-[1px_1px_2px_rgba(0,0,0,1)]
                                mt-1!"
                            >
                                X / Twitter
                            </Typography>
                        </div>

                        <div className="flex flex-col mb-7" data-aos="fade-down">
                            <FaInstagram className="bg-white/25 text-white p-[1rem] text-5xl" />

                            <Typography
                                variant="h4"
                                component="div"
                                className="
                                text-[#e00231] 
                                text-[1.25rem]!
                                font-semibold!
                                font-[Raleway]!
                                tracking-[1px]!
                                drop-shadow-[1px_1px_2px_rgba(0,0,0,1)]
                                mt-1!"
                            >
                                Instagram
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact