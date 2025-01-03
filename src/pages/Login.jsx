import React, {useState, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BASE_URL} from "../config.js";
import {toast} from "react-toastify";
import {AuthContext} from "../context/AuthContext.jsx";
import {data} from "autoprefixer";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    user:result.data,
                    token:result.token,
                    role:result.role,
                },
            });

            console.log(result,'login data');

            setLoading(false);
            toast.success(result.message);
            navigate('/home');
        } catch (err) {
            toast.error(err.message);
            setLoading(false)
        }
    }

    return (
        <section className="px-5 lg:px-0">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                    <span className="text-primary">Witaj!</span> Miło cię widzieć!
                </h3>

                <form className="py-4 md:py-0" onSubmit={submitHandler}>
                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Wprowadź adres e-mail"
                            name="email" value={formData.email}
                            onChange={handleInputChange}
                            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Wprowadź hasło"
                            name="password" value={formData.password}
                            onChange={handleInputChange}
                            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                            required
                        />
                    </div>

                    <div className="mt-7">
                        <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                            { loading ? <HashLoader size={25} color={"#fff"}/> : 'Zaloguj się'}
                        </button>
                    </div>

                    <p className="mt-5 text-textColor text-center">
                        Nie masz jeszcze konta? <Link to='/register' className="text-primary font-medium ml-1">Zarejestruj się</Link>
                    </p>

                </form>
            </div>
        </section>
    );
};

export default Login;
