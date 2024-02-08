import React, {useState} from 'react';
import mechanicImg from '../../assets/images/mechanic-img01.jpeg';
import starIcon from '../../assets/images/Star.png';
import MechanicAbout from "./MechanicAbout.jsx";
import Feedback from "./Feedback.jsx";
import SidePanel from "./SidePanel.jsx";
import {BASE_URL} from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import {useParams} from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const MechanicDetails = () => {
    const [tab, setTab] = useState("about");
    const { id } = useParams();

    const {
        data: mechanic,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/mechanics/${id}`);

    const {
        name,
        qualifications,
        experiences,
        timeSlots,
        reviews,
        bio,
        about,
        averageRating,
        totalRating,
        specialization,
        price,
        photo,
    } = mechanic;

    return (
        <section>
        <div className="max-w-[1170px] px-5 mx-auto">
            {loading && (
                <div className="flex items-center justify-center w-full h-full">
                    <HashLoader color="#0067FF" />
                </div>
            )}

            {error && (
                <div className="flex items-center justify-center w-full h-full">
                    <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
                        {error}
                    </h3>
                </div>
            )}

            {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-5">
                        <figure className="max-w-[200px] max-h-[200px]">
                            <img src={photo} alt="" className="w-full"/>
                        </figure>
                        <div>
                            <span
                                className="bg-[#CCF0F3] text-irisBlue py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                {specialization}
                            </span>
                            <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                {name}
                            </h3>
                            <div className="flex items-center gap-[6px]">
                                <span
                                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                    <img src={starIcon} alt=""/> {averageRating}
                                </span>
                                <span
                                    className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                                    ({totalRating})
                                </span>
                            </div>
                            <p className="text__para text-[14px] leading-6 md:text-[15px] max-w-[390px]">
                                {bio}
                            </p>
                        </div>
                    </div>

                    <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                        <button
                            onClick={() => setTab('about')}
                            className={`${tab === 'about' && 'border-b border-solid border-primary'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                            O mnie
                        </button>

                        <button
                            onClick={() => setTab('feedback')}
                            className={`${tab === 'feedback' && 'border-b border-solid border-primary'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                            Opinie
                        </button>
                    </div>

                    <div className="mt-[50px]">
                        {tab === "about" && (
                            <div>
                                <MechanicAbout
                                    name={name}
                                    about={about}
                                    qualifications={qualifications}
                                    experiences={experiences}
                                />
                            </div>
                        )}
                        {tab === "feedback" && (
                            <div>
                                <Feedback reviews={reviews} totalRating={totalRating} />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <SidePanel
                        mechanicId={mechanic._id}
                        price={price}
                        timeSlots={timeSlots}
                    />
                </div>
            </div>
            )}
        </div>
    </section>
    )
};

export default MechanicDetails;
