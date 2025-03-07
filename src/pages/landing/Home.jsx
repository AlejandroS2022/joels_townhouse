import { useEffect } from 'react'
import Navbar from './Navbar'
import Typography from '@mui/material/Typography';
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="background-principal">
        <div className="capa flex flex-col" id="home">
          <div className="mt-[7rem]! md:mt-[10rem]! lg:mt-[13rem]! custom-paddings">
            <Typography
              variant="h1"
              component="div"
              className="
                  text-white 
                  text-[2.5rem]!
                  md:text-[3.75rem]!
                  lg:text-[6rem]!
                  font-semibold!
                  font-[Raleway]!
                  tracking-[1px]!"
            >
              Bienvenido a
            </Typography>
            <Typography
              variant="h3"
              component="div"
              className="
                  text-white
                  text-[1rem]!
                  md:text-[1.75rem]!
                  lg:text-[3rem]!
                  font-light!
                  font-[Raleway]!
                  tracking-[1px]!
                  mt-[0.75rem]!"
            >
              Joel's Townhouse
            </Typography>
          </div>

          <div className="
              mt-[3rem]
              mb-[9rem]
              md:mt-[4rem]
              md:mb-[13rem]
              lg:mt-[5rem]
              lg:mb-[16rem]
              custom-paddings
              flex"
          >
            <a href="" className="text-white p-2 mr-7 border-2 border-dotted border-[#f5232e] rounded-3xl">
              <FaFacebookF />
            </a>
            <a href="" className="text-white p-2 mr-7 border-2 border-dotted border-[#f5232e] rounded-3xl">
              <FaSquareXTwitter />
            </a>
            <a href="" className="text-white p-2 mr-7 border-2 border-dotted border-[#f5232e] rounded-3xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
