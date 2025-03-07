import { useEffect } from 'react'
import AOSConfig from '../../tools/aosInit'
import Typography from '@mui/material/Typography';
import { FaCircleInfo } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";

const aboutItems = [
    {
        id: 0,
        title: 'Espacios modernos',
        description: 'Con reflejo de nuestra cultura',
        color: '#ff9847',
    },
    {
        id: 1,
        title: 'Música y espectáculo',
        description: 'La mejor música en vivo',
        color: '#8c39ac',
    },
    {
        id: 2,
        title: 'Seguridad garantizada',
        description: 'Para asegurar tu integridad',
        color: '#5fcdff',
    },
    {
        id: 3,
        title: 'Atención al cliente',
        description: 'La mejor calidad del municipio',
        color: '#4c9118',
    },

    {
        id: 4,
        title: 'Sana diversión',
        description: 'Con el mejor entretenimiento',
        color: '#b3a819',
    },
    {
        id: 5,
        title: 'Diversidad culinaria',
        description: 'Con elegancia en nuestros platillos',
        color: '#ff4444',
    },
];

function About() {
    useEffect(() => {
        AOSConfig()
    }, [])

    return (
        <>
            <div className="sobre flex flex-col" id="about">
                <div className="mt-[3rem]! md:mt-[6rem]! lg:mt-[7rem]! mb-16 custom-paddings">
                    <Typography
                        variant="h1"
                        component="div"
                        data-aos="fade-up"
                        className="
                            text-black 
                            text-[1.5rem]!
                            md:text-[2rem]!
                            lg:text-[3rem]!
                            font-extralight!
                            font-[Raleway]!
                            tracking-[1px]!
                            flex"
                    >
                        <FaCircleInfo className="mr-4" /> Sobre <span className="ml-4 font-bold">Nosotros</span>
                    </Typography>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 mb-16 custom-paddings">
                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#ff9847]" data-aos="flip-left">
                        <FaHouseChimney className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[0].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[0].description}
                        </Typography>
                    </div>

                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#8c39ac]" data-aos="flip-up">
                        <FaMusic className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[1].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[1].description}
                        </Typography>
                    </div>

                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#5fcdff]" data-aos="flip-right">
                        <FaPerson className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[2].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[2].description}
                        </Typography>
                    </div>

                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#4c9118]" data-aos="flip-right">
                        <FaBookmark className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[3].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[3].description}
                        </Typography>
                    </div>

                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#b3a819]" data-aos="flip-down">
                        <FaUsers className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[4].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[4].description}
                        </Typography>
                    </div>

                    <div className="px-5 py-6 m-auto text-center w-[18.5rem] h-[15rem] bg-[#ff4444]" data-aos="flip-left">
                        <MdRestaurant className="
                            mb-5
                            m-auto
                            p-[15px]
                            bg-black
                            text-white!
                            text-[4rem]!
                            border-5
                            border-solid"
                        />

                        <Typography
                            variant="h5"
                            component="div"
                            className="
                                text-white 
                                text-[1.4rem]!
                                font-medium!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                capitalize"
                        >
                            {aboutItems[5].title}
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                            className="
                                text-black 
                                text-[0.85em]!
                                font-normal!
                                font-[Raleway]!
                                tracking-[1.2px]!
                                mt-4!
                                px-0!
                                md:px-2!
                                lg:px-4!"
                        >
                            {aboutItems[5].description}
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About