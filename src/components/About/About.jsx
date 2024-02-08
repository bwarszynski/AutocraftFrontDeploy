import React from 'react';
import aboutImg from '../../assets/images/about.png';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* o nas obraz */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} width={600} alt="about_img"/>
                    </div>

                    {/* o nas tekst */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Doskonali w swoim fachu</h2>
                        <p className="text__para">
                            Od ponad 20 lat świadczymy usługi na terenie Tucholi, większość naszych klientów, którzy
                            przekonali
                            się o jakości obsługi, a nowi klienci już po jednej wizycie zostają z nami na dłużej dzięki
                            wykwalifikowanej kadrze mechaników, która poradzi sobie z każdym wyzwaniem.
                        </p>
                        <p className="text__para-[30px]">
                            Każdego dnia nasi fachowcy sprawdzają wasze auta, diagnozują je i naprawiają, byście mogli w
                            najlepszej cenie i najkrótszym terminie z powrotem cieszyć się doznaniami z prowadzenia
                            własnego
                            auta.
                        </p>
                        <Link to={'/'}><button className="btn">Dowiedz się więcej</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
