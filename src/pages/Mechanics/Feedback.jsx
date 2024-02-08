import React, {useState} from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import {formatedDate} from "../../utils/formatedDate.js";
import {AiFillStar} from "react-icons/ai";
import FeedbackForm from "./FeedbackForm.jsx";

const Feedback = ({reviews, totalRating}) => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false)


    return (
        <div>
            <div className="mb-[50px]">
                <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
                    Wszystkie opinie ({totalRating})
                </h4>

                {reviews?.map((review, index) => (
                    <div key={index} className="flex justify-between gap-10 mb-[30px]">
                        <div className="flex gap-3">
                            <figure className="w-10 h-10 rounded-full">
                                <img src={review.user.photo} alt="" className="w-full"/>
                            </figure>
                            <div>
                                <h5 className="text-[16px] leading-6 text-[#0067FF] font-bold">
                                    {review.user.name}
                                </h5>
                                <p className="text-[14px] text-textColor leading-[22px]">
                                    {formatedDate(review.createdAt)}
                                </p>
                                <h6 className="text__para mt-3 text-[15px] font-medium">
                                    {review.reviewText}
                                </h6>
                            </div>
                        </div>

                        <div className="flex gap-1">
                            {[...Array(review.rating).keys()].map((_, index) => (
                                <AiFillStar key={index} color="#0067FF"/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {!showFeedbackForm && (
                <div className="text-center">
                    <button className="btn" onClick={() => setShowFeedbackForm(true)}>
                        Wystaw opinię
                    </button>
                </div>
            )}

            {/* ========== koniec sekcji ocen =========== */}

            {showFeedbackForm && <FeedbackForm/>}
        </div>
    )
};

export default Feedback;
