import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import About from "../components/About/About.jsx";
import Services from "./Services.jsx";
import ServiceList from "../components/Services/ServiceList.jsx";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.jpg";
import MechanicCard from "../components/Mechanics/MechanicCard.jsx";
import MechanicList from "../components/Mechanics/MechanicList.jsx";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";

const Home = () => {
    return (
        <>
            {/*=== sekcja mechaników START === */}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* zawartość mechaników */}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    Kompleksowo zadbamy o twój samochód!
                                </h1>
                                <p className="text__para">
                                    Nasz warsztat zapewnia szeroką gamę usług, które zadbają o to, by twoje auto
                                    cieszyło cię długą i bezawaryjną jazdą.
                                </p>
                                <Link to='/mechanics'>
                                    <button className="btn">
                                        Zarezerwuj wizytę
                                    </button>
                                </Link>
                            </div>
                            {/* rekomendacje */}
                            <div
                                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                        20+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-yellow rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">
                                        Lat doświadczenia w branży
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                        10
                                    </h2>
                                    <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">
                                        Mechaników w zespole
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                        100%
                                    </h2>
                                    <span
                                        className="w-[100px] h-2 bg-irisBlue rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">
                                        Zadowolonych klientów
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Zdjęcia mechaników osadzone na stronie */}
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={heroImg01} alt=""/>
                            </div>
                            <div className="mt-[30px]">
                                <img src={heroImg02} alt="" className="w-2/3 mb-[30px]"/>
                                <img src={heroImg03} alt="" className="w-2/3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*=== sekcja mechaników KONIEC === */}

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Zapewniamy najwyższą jakość usług.
                        </h2>
                        <p className="text__para text-center">
                            Nasz warsztat świadczy usługi najwyższej jakości zgodnie z najnowszą technologią i
                            dostępną
                            wiedzą. Nasz zespół przechodzi ciągłe szkolenia, by zapewnić najlepszą obsługę twojego
                            auta,
                            bez względu na rodzaj silnika.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt="" width={150}/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Wybierz mechanika
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Wybierz mechanika, który będzie odpowiadał twojej potrzebie. Znajdziesz u nas
                                    specjalistów od większości usług dostępnych dla aut spalinowych.
                                </p>
                                <Link to="/mechanics"
                                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt="" width={275}/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Znajdź nas
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Jesteśmy zlokalizowani w Tucholi przy ulicy Świeckiej, DW240 kierunek Świecie.
                                </p>
                                <Link to="/contact"
                                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt="" width={265}/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Umów wizytę
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Wygodnie umów wizytę w naszym warsztacie przez internet.
                                </p>
                                <Link to="/mechanics"
                                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === sekcja O NAS === */}
            <About/>

            {/* === sekcja USŁUGI START === */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Nasze usługi
                        </h2>
                        <p className="text__para text-center">
                            Nasz warsztat zajmuje się każdym autem osobowym w
                            najwyższym standardzie obsługi.
                        </p>
                    </div>
                    <ServiceList/>
                </div>
            </section>
            {/* === sekcja USŁUGI KONIEC === */}

            {/* === sekcja pokazowa START === */}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* zawartość pokazowa */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading">Umów wizytę <br/> kiedy tylko potrzebujesz</h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    1. Zarezerwuj wizytę bezpośrednio w naszym warsztacie lub skorzystaj z poniższej
                                    opcji rezerwacji online.
                                </li>
                                <li className="text__para">
                                    2. Wybierz mechanika, którego potrzebujesz
                                </li>
                                <li className="text__para">
                                    3. Wybierz dogodny termin i zarezerwuj przez stronę internetową
                                </li>
                            </ul>
                            <Link to="/mechanics">
                                <button className="btn">Dowiedz się więcej</button>
                            </Link>
                        </div>
                        {/* obrazek pokazowy */}
                        <div className="relative z-10 lxl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} alt="" className="w-4/5"/>
                            <div
                                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">18.12.2023</p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">13:50</p>
                                    </div>
                                    <span
                                        className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                        <img src={videoIcon} alt=""/>
                                    </span>
                                </div>
                                <div
                                    className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlue font-[500] mt-2 lg:mt-4 rounded-full">
                                    Diagnostyka
                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" className="w-1/5 rounded-full"/>
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Piotr
                                        Kowalski</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* === sekcja pokazowa KONIEC === */}

            {/* === sekcja "nasi mechanicy" START === */}

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Nasz zespół
                        </h2>
                        <p className="text__para text-center">
                            Nasz zespół jest gotów na każde wyzwanie jakie na nich czeka.
                        </p>
                    </div>
                    <MechanicList/>
                </div>
            </section>

            {/* === sekcja "nasi mechanicy" KONIEC === */}

            {/* === sekcja FAQ START === */}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                            <img src={faqImg} alt=""/>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="heading">Najczęściej zadawane pytania przez naszych klientów</h2>
                            <FaqList/>
                        </div>

                    </div>
                </div>
            </section>
            {/* === sekcja FAQ KONIEC === */}

            {/* === sekcja RECENZJE START === */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Co mówią nasi klienci?
                        </h2>
                        <p className="text__para text-center">
                            Przeczytaj opinie naszych klientów o jakości naszych usług
                        </p>
                    </div>
                    <Testimonial/>
                </div>
            </section>
            {/* === sekcja RECENZJE KONIEC === */}
        </>
    );
};

export default Home;
