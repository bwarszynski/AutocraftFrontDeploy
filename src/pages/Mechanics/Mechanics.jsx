import React from 'react';
import MechanicCard from "../../components/Mechanics/MechanicCard.jsx";
import {mechanics} from "../../assets/data/mechanics.js";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import {BASE_URL} from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import HashLoader from "react-spinners/HashLoader";
import {useEffect, useState} from "react";

const Mechanics = () => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const {
        data: mechanics,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/mechanics?query=${debouncedQuery}`);

    const handleSearch = () => {
        setQuery(query.trim());
    };

    useEffect(() => {
// Po 500ms nieaktywności zrób debounce
        const timeoutId = setTimeout(() => {
            setDebouncedQuery(query);
        }, 700);

        // wyczyść czas nieaktywności
        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <>
            <section className="bg-[#fff9ea]">
                <div className="container text-center">
                    <h2 className="heading">Znajdź mechanika</h2>
                    <div className="max-w-[570px] mx-auto mt-[30px] bg-[#0066ff2c] rounded-md flex items-center justify-between ">
                        <input
                            className="py-4 pl-4 pr-2 focus:outline-none cursor-pointer w-full bg-transparent placeholder:text-textColor"
                            type="search"
                            placeholder="Szukaj po imieniu lub specjalizacji"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button
                            className="btn mt-0 rounded-[0px] rounded-r-md"
                            onClick={handleSearch}
                        >
                            Szukaj
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {mechanics?.map(mechanic => (
                                <MechanicCard mechanic={mechanic} key={mechanic.id} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Co mówią nasi klienci</h2>
                        <p className="text__para text-center">
                            Troszczymy się o twój samochód, by każdego dnia mógł Ci przynosić dużo radości.
                        </p>
                    </div>

                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default Mechanics;
