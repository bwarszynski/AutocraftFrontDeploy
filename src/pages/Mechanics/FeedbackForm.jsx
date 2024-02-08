import React, {useState} from 'react';
import {AiFillSave, AiFillStar} from "react-icons/ai";
import {BASE_URL, token} from "../../config.js";
import {toast} from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import {useParams} from "react-router-dom";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const {id} = useParams();
    const [loading, setLoading] = useState(false);

    const handleSubmitReview = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!rating || !reviewText) {
                setLoading(false)
                return toast.error("Wymagane są pola opinii i oceny");
            }

            const res = await fetch(`${BASE_URL}/mechanics/${id}/reviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({rating, reviewText}),
            });

            const result = await res.json();
            if(!res.ok){
                throw new Error(result.message)
            }

            setLoading(false);
            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
            setLoading(false);
        }
    };

    return (
        <form action="">
            <div className="">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Prosimy, oceń twoje doświadczenia.
                </h3>
                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1
                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    index <= ((rating && hover) || hover)
                                        ? "text-yellow"
                                        : "text-gray-400"
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }}
                            >
                            <span>
                                <AiFillStar/>
                            </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-[30px]">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Podziel się twoimi opiniami oraz sugestiami.
                </h3>
                <textarea
                    className="border border-solid border-[#0066ff34] focus:outline outline-primary w-full px-4 py-3 rounded-md"
                    name=""
                    id=""
                    rows="5"
                    onChange={e => setReviewText(e.target.value)}
                    placeholder="Napisz swoją opinię."
                    required
                ></textarea>
            </div>
            <button type="submit" onClick={handleSubmitReview} className="btn">
                {loading ? <HashLoader size={25} color="#fff" /> : "Wyślij opinię"}
            </button>
        </form>
    );
};

export default FeedbackForm;
