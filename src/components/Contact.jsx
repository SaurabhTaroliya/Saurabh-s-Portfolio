import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export const Contact = () => {
  return (
    <>
        <div className="conatainer contact" id='contact'>
            <h1>Contact me</h1>
            <div className="conatact-icon"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            >
                <a href='https://www.instagram.com/saurabhtaroliya/?hl=en' target='_blank' className="items">
                    <FaSquareInstagram className="icons" />
                </a>
                <a href='https://www.linkedin.com/in/saurabhtaroliya' target='_blank' className="items">
                    <FaLinkedin className="icons" />
                </a>
                <a href='https://github.com/SaurabhTaroliya' target='_blank' className="items">
                    <FaGithub className="icons" />
                </a>
                <a href='mailTo:SaurabhTaroliya@gmail.com' target='_blank' className="items">
                    <SiGmail className="icons" />
                </a>
            </div>
        </div>
    </>
  )
}

export default Contact;