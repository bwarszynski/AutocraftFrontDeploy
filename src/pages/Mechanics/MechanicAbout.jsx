import React from 'react';
import {formatedDate} from "../../utils/formatedDate.js";

const MechanicAbout = ({about, name, experiences, qualifications}) => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    O mnie
                    <span className="text-irisBlue font-bold  text-[24px] leading-9">
                    {name}
                    </span>
                </h3>
                <p className="text__para">
                    {about}
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Ukończone kursy
                </h3>
                <ul className="pt-4 md:p-5">
                    {qualifications?.map((item, index) => (
                        <li
                            key={index}
                            className="flex sm:justify-between sm:items-end flex-col sm:flex-row  md:gap-5 mb-[30px]"
                        >
                            <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatedDate(item.startingDate, {year: "numeric"})}-
                    {formatedDate(item.endingDate, {year: "numeric"})}
                </span>
                                <p className="text-[16px] leading-6 font-medium text-textColor">
                                    {item.degree}
                                </p>
                            </div>
                            <p className="text-[14px] leading-6 font-medium text-textColor">
                                {item.workshop}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Doświadczenie
                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    {experiences?.map((item, index) => (
                        <li key={index}>
                            <div className="p-4 rounded bg-[#fff9ea]">
                                <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                                    {formatedDate(item.startingDate, {year: "numeric"})}-
                                    {formatedDate(item.endingDate, {year: "numeric"})}
                                </span>
                                <p className="text-[16px] leading-6 font-medium text-headingColor mt-3">
                                    {item.position}
                                </p>
                                <p className="text-[14px] leading-6 font-medium text-textColor">
                                    {item.workshop}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MechanicAbout;
