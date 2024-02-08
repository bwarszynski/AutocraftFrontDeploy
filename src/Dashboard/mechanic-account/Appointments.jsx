/* eslint-disable react/prop-types */
import {formatedDate} from "../../utils/formatedDate.js"

const Appointments = ({ appointments }) => {
    return (
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Imię i nazwisko
                </th>
                <th scope="col" className="px-6 py-3">
                    Płatność
                </th>
                <th scope="col" className="px-6 py-3">
                    Cena
                </th>
                <th scope="col" className="px-6 py-3">
                    Zarezerwowano
                </th>
            </tr>
            </thead>
            <tbody>
            {appointments.map(item => (
                <tr key={item._id} className="bg-white border-b  hover:bg-gray-50 ">
                    <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                        <img
                            className="w-10 h-10 rounded-full"
                            src={item.user.photo}
                            alt="Jese image"
                        />
                        <div className="pl-3">
                            <div className="text-base font-semibold">{item.user.name}</div>
                            <div className="font-normal text-gray-500">
                                {item.user.email}
                            </div>
                        </div>
                    </th>
                    <td className="px-6 py-4">
                        {item.isPaid && (
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                Opłacono
                            </div>
                        )}

                        {!item.isPaid && (
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                Nieopłacono
                            </div>
                        )}
                    </td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{formatedDate(item.createdAt)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Appointments;
