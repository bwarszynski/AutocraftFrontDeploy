import React from 'react';
import useFetchData from "../../hooks/useFetchData.jsx";
import {BASE_URL} from "../../config.js";
import MechanicCard from "../../components/Mechanics/MechanicCard.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";


const MyBookings = () => {
    const {data: appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);


    return (
        <div>
            {loading && !error && <Loading/>}
            {error && !loading && <Error errMessage={error}/>}
            {!loading && !error && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {appointments.map(mechanic => (
                            <MechanicCard mechanic={mechanic} key={mechanic._id}/>
                        ))}
                </div>
            )}
            {!loading && !error && appointments.length === 0 &&
                <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primary">Nie masz żadnej rezerwacji</h2>
            }
        </div>
    );
};

export default MyBookings;
