import React from 'react';
import convertTime from "../../utils/convertTime.js";
/* eslint-disable react/prop-types */
import {BASE_URL, token} from "../../config.js";

const SidePanel = ({price, timeSlots, mechanicId}) => {
    const bookingHandler = async () => {
        try{
            const response = await fetch(
                `${BASE_URL}/bookings/checkout-session/${mechanicId}`,
                {
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.session.url) {
                window.location.href = data.session.url;
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">
                    {price} zł
                </p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    Pół Roboczogodziny
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Dostępne godziny:
                </p>
                <ul className="mt-3">
                    {timeSlots?.map((item, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}:
                            </p>
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {convertTime(item.startingTime)}
                                <span> - </span>
                                {convertTime(item.endingTime)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
                Umów wizytę
            </button>
        </div>
    );
};

export default SidePanel;
