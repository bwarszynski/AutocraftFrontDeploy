import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from "react-icons/ri";
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from "react-icons/ai";

const socialLinks = [
    {
        path: "https://www.youtube.com/@Milosnicy4Kolek",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5"/>,
    },
    {
        path: "https://github.com/bwarszynski",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>,
    },
    {
        path: "https://www.linkedin.com/in/bwarszynski/",
        icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>,
    },
];

const quickLinks01 = [
    {
        path: "/home",
        display: "Strona Główna",
    },
    {
        path: "/",
        display: "O nas",
    },
    {
        path: "/services",
        display: "Usługi",
    },
    {
        path: "/",
        display: "Blog",
    },
];

const quickLinks02 = [
    {
        path: "/mechanics",
        display: "Znajdź mechanika",
    },
    {
        path: "/",
        display: "Zarezerwuj wizytę",
    },
    {
        path: "/",
        display: "Znajdź nas",
    },
    {
        path: "/",
        display: "Oceń nas",
    },
];

const quickLinks03 = [
    {
        path: "/contact",
        display: "Skontaktuj się z nami",
    },
];

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} width={150} alt=""/>
                        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                            Prawa autorskie © {year} Bartosz Warszyński. Wszelkie prawa zastrzeżone.
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link to={link.path}
                                      key={index}
                                      className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none">
                                    {link.icon}
                                </Link>))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Szybki dostęp
                        </h2>
                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Chciałbym przejść do:
                        </h2>
                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Wsparcie
                        </h2>
                        <ul>
                            {quickLinks03.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
