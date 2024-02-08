import React from 'react';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// import stylów swipera
import 'swiper/css'
import 'swiper/css/pagination'
import clientAvatar from "../../assets/images/client-avatar.png"
import clientAvatar1 from "../../assets/images/client-avatar1.png"
import clientAvatar2 from "../../assets/images/client-avatar2.png"
import clientAvatar3 from "../../assets/images/client-avatar3.png"
import clientAvatar4 from "../../assets/images/client-avatar4.png"
import {HiStar} from "react-icons/hi";

const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper
                // instalacja modułów swipera
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-[13px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={clientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Adam Krzysztofiuk
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Bardzo dobra cena, dodatkowo warsztat czysty, naprawa zgodnie z umówionym czasem. Wszystko wykonane bardzo dobrze, w standardzie serwisu."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-[13px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={clientAvatar1} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Piotr Wołoszański
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Najlepszy warsztat w Tucholi."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-[13px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={clientAvatar2} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Grzegorz Wiese
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Wysoki poziom obsługi i bardzo rozsądne ceny."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-[13px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={clientAvatar3} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Marek Borysewicz
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Profesjonalna załoga, zawsze można liczyć na rzetelną opinię i diagnostykę."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-[13px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={clientAvatar4} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Andrii Kovalchuk
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                    <HiStar className="text-yellow w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Są najlepsi, nigdy nie odmawiają pomocy."</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;
