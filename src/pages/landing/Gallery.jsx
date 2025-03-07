import { useEffect } from 'react'
import AOSConfig from '../../tools/aosInit'
import Typography from '@mui/material/Typography';
import { FaImage } from "react-icons/fa6";
import img1 from '../../assets/galeria1.jpg';
import img2 from '../../assets/galeria2.jpg';
import img3 from '../../assets/galeria3.jpg';
import img4 from '../../assets/galeria4.jpg';
import img5 from '../../assets/galeria5.jpg';
import img6 from '../../assets/galeria6.jpg';

const galleryItems = [
    {
        id: 0,
        src: img1,
        aos: "fade-down"
    },
    {
        id: 1,
        src: img2,
        aos: "fade-up"
    },
    {
        id: 2,
        src: img3,
        aos: "fade-down"
    },
    {
        id: 3,
        src: img4,
        aos: "fade-up"
    },
    {
        id: 4,
        src: img5,
        aos: "fade-down"
    },
    {
        id: 5,
        src: img6,
        aos: "fade-up"
    },
];

function Gallery() {
    useEffect(() => {
        AOSConfig()
    }, [])

    return (
        <>
            <div className="galeria flex flex-col" id="gallery">
                <div className="mt-[3rem]! md:mt-[6rem]! lg:mt-[7rem]! mb-16 custom-paddings flex">
                    <Typography
                        variant="h1"
                        component="div"
                        data-aos="zoom-in-right"
                        className="
                            text-white
                            text-[1.5rem]!
                            md:text-[2rem]!
                            lg:text-[3rem]!
                            font-extralight!
                            font-[Raleway]!
                            tracking-[1px]!
                            ml-auto!
                            flex"
                    >
                        <FaImage className="mr-4" /> Galería
                    </Typography>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 mb-16 custom-paddings">
                    {galleryItems.map((item) => (
                        <img key={item.id} src={item.src} className="m-auto w-[280px] h-[280px]" data-aos={item.aos} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gallery