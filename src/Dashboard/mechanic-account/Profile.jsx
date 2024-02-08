/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { AiOutlineDelete } from "react-icons/ai";

import { toast } from "react-toastify";

const Profile = ({ mechanicData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        photo: null,
        bio: "",
        about: "",
        price: 0,
        qualifications: [],
        experiences: [],
        specialization: "",
        timeSlots: [],
    });

    useEffect(() => {
        setFormData({
            name: mechanicData?.name,
            email: mechanicData?.email,
            gender: mechanicData?.gender,
            photo: mechanicData?.photo,
            phone: mechanicData?.phone,
            bio: mechanicData?.bio,
            qualifications: mechanicData?.qualifications,
            experiences: mechanicData?.experiences,
            about: mechanicData?.about,
            price: mechanicData?.price,
            specialization: mechanicData?.specialization,
            timeSlots: mechanicData?.timeSlots,
        });
    }, [mechanicData]);

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = async event => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);

        setSelectedFile(data.url);
        setFormData({ ...formData, photo: data.url });
    };

    const updateDoctorHandler = async e => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await fetch(`${BASE_URL}/mechanics/${mechanicData._id}`, {
                method: "put",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (!res.ok) {
                return toast.error(result.message);
            }
            toast.success("Aktualizacja pomyślna");
        } catch (err) {
            console.log(err);
        }
    };

    // Funkcja do dodawania elementów, recyklingowa
    const addItem = (key, item) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: [...prevFormData[key], item],
        }));
    };

    // Funkcja recyklingowa do obsługi zmiany danych wprowadzanych
    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            const updatedItems = [...prevFormData[key]];
            updatedItems[index][name] = value;
            return {
                ...prevFormData,
                [key]: updatedItems,
            };
        });
    };

    // Funkcja recyklingowa do usuwania elementów
    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: prevFormData[key].filter((_, i) => i !== index),
        }));
    };

    const addQualification = e => {
        e.preventDefault();
        addItem("qualifications", {
            startingDate: null,
            endingDate: null,
            degree: "",
            workshop: "",
        });
    };

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc("qualifications", index, event);
    };

    const deleteQualification = (e, index) => {
        e.preventDefault();
        deleteItem("qualifications", index);
    };

    const addExperience = e => {
        e.preventDefault();
        addItem("experiences", {
            startingDate: null,
            endingDate: null,
            position: "",
            workshop: "",
        });
    };

    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc("experiences", index, event);
    };

    const deleteExperience = (e, index) => {
        e.preventDefault();
        deleteItem("experiences", index);
    };

    const addTimeSlot = e => {
        e.preventDefault();
        addItem("timeSlots", { day: "", startingTime: null, endingTime: null });
    };

    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc("timeSlots", index, event);
    };

    const deleteTimeSlot = (e, index) => {
        e.preventDefault();
        deleteItem("timeSlots", index);
    };

    return (
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Informacje o użytkowniku
            </h2>
            <form>
                <div className="mb-5">
                    <p className="form__label">Imię*</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Pełne imię i nazwisko"
                        className="form__input"
                    />
                </div>
                <div className="mb-5">
                    <p className="form__label">Email*</p>
                    <input
                        type="email"
                        readOnly
                        value={formData.email}
                        name="email"
                        placeholder="Wprowadź email"
                        className="form__input"
                        aria-readonly
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Telefon*</p>
                    <input
                        type="number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        placeholder="Numer Telefonu"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Bio*</p>
                    <input
                        type="text"
                        value={formData.bio}
                        onChange={handleInputChange}
                        name="bio"
                        maxLength={100}
                        placeholder="Wprowadź informacje o sobie"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form__label">Płeć</p>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="form__input py-3.5"
                            >
                                <option value="">Wybierz</option>
                                <option value="male">Mężczyzna</option>
                                <option value="female">Kobieta</option>
                                <option value="other">Inna/Wolę nie mówić</option>
                            </select>
                        </div>
                        <div>
                            <p className="form__label">Stanowisko*</p>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleInputChange}
                                className="form__input py-3.5"
                            >
                                <option value="">Wybierz</option>
                                <option value="diagnost">Diagnosta</option>
                                <option value="mechanic">Mechanik</option>
                                <option value="vulcanizer">Wulkanizator</option>
                            </select>
                        </div>

                        <div>
                            <p className="form__label">Cena połowy roboczogodziny*</p>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                placeholder="75"
                                className="form__input"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form__label">Kwalifikacje*</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form__label">Data rozpoczęcia*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="form__input"
                                            onChange={e => handleQualificationChange(e, index)}
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">Data zakończenia*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="form__input"
                                            onChange={e => handleQualificationChange(e, index)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <p className="form__label">Nazwa*</p>
                                        <input
                                            type="text"
                                            name="degree"
                                            value={item.degree}
                                            className="form__input"
                                            placeholder="Nazwa kursu/wykształcenia"
                                            onChange={e => handleQualificationChange(e, index)}
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">Instytucja*</p>
                                        <input
                                            type="text"
                                            name="university"
                                            value={item.university}
                                            className="form__input"
                                            placeholder="Instytucja wydająca"
                                            onChange={e => handleQualificationChange(e, index)}
                                        />
                                    </div>
                                </div>

                                <button
                                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                                    onClick={e => deleteQualification(e, index)}
                                >
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addQualification}
                        className="bg-[#000] py-2 px-5 rounded text-white"
                    >
                        Dodaj kwalifikacje
                    </button>
                </div>

                <div className="mb-5">
                    <p className="form__label">Doświadczenie*</p>
                    {formData.experiences?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form__label">Data rozpoczęcia*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="form__input"
                                            onChange={e => handleExperienceChange(e, index)}
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">Data zakończenia*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="form__input"
                                            onChange={e => handleExperienceChange(e, index)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <p className="form__label">Stanowisko*</p>
                                        <input
                                            type="text"
                                            name="position"
                                            value={item.position}
                                            className="form__input"
                                            placeholder="Stanowisko"
                                            onChange={e => handleExperienceChange(e, index)}
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">Instytucja*</p>
                                        <input
                                            type="text"
                                            name="workshop"
                                            value={item.workshop}
                                            className="form__input"
                                            placeholder="Warsztat"
                                            onChange={e => handleExperienceChange(e, index)}
                                        />
                                    </div>
                                </div>

                                <button
                                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                                    onClick={e => deleteExperience(e, index)}
                                >
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addExperience}
                        className="bg-[#000] py-2 px-5 rounded text-white"
                    >
                        Dodaj doświadczenie
                    </button>
                </div>

                <div className="mb-5">
                    <p className="form__label">Przedziały czasowe*</p>
                    {formData.timeSlots?.map((item, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
                                <div>
                                    <p className="form__label">Dzień*</p>
                                    <select
                                        onChange={e => handleTimeSlotChange(e, index)}
                                        name="day"
                                        value={item.day}
                                        className="form__input py-3.5"
                                    >
                                        <option value="">Wybierz</option>
                                        <option value="monday">Poniedziałek</option>
                                        <option value="tuesday">Wtorek</option>
                                        <option value="wednesday">Środa</option>
                                        <option value="thursday">Czwartek</option>
                                        <option value="friday">Piątek</option>
                                        <option value="saturday">Sobota</option>
                                        <option value="sunday">Niedziela</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="form__label">Czas rozpoczęcia*</p>
                                    <input
                                        type="time"
                                        name="startingTime"
                                        value={item.startingTime}
                                        className="form__input"
                                        onChange={e => handleTimeSlotChange(e, index)}
                                    />
                                </div>

                                <div>
                                    <p className="form__label">Czas zakończenia*</p>
                                    <input
                                        type="time"
                                        name="endingTime"
                                        value={item.endingTime}
                                        className="form__input"
                                        onChange={e => handleTimeSlotChange(e, index)}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <button
                                        className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6"
                                        onClick={e => deleteTimeSlot(e, index)}
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addTimeSlot}
                        className="bg-[#000] py-2 px-5 rounded text-white "
                    >
                        Dodaj przedziały czasowe
                    </button>
                </div>

                <div className="mb-5">
                    <p className="form__label">O mnie*</p>
                    <textarea
                        type="text"
                        rows={5}
                        value={formData.about}
                        onChange={handleInputChange}
                        name="about"
                        placeholder="Napisz coś o sobie"
                        className="form__input"
                    />
                </div>

                <div className="mb-5 flex items-center gap-3">
                    {formData.photo && (
                        <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-[#0067FF] flex items-center justify-center">
                            <img
                                src={formData.photo}
                                alt="Podgląd"
                                className="w-full rounded-full"
                            />
                        </figure>
                    )}
                    <div className="relative inline-block w-[130px] h-[50px]">
                        <input
                            className="custom-file-input absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            id="customFile"
                            name="photo"
                            type="file"
                            accept=".jpg,.png"
                            placeholder="Dodaj zdjęcie"
                            onChange={handleFileInputChange}
                        />

                        <label
                            className="custom-file-label absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                            htmlFor="customFile"
                        >
                            {selectedFile ? selectedFile.name : "Załaduj zdjęcie"}
                        </label>
                    </div>
                </div>

                <div className="mt-7">
                    <button
                        type="submit"
                        onClick={updateDoctorHandler}
                        className="w-full bg-[#0067FF] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
                    >
                        Zaktualizuj profil
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
