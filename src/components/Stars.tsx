import React from "react";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import "./Stars.css";

interface StarsProps {
    rating: number;
    setRating?: (value: number) => void;
};

function Stars({rating, setRating}: StarsProps) {
    return(
        <div className="stars_container">
            {setRating ?
                <>
                    {rating > 0 ? <div onClick={() => setRating(0)} className="fullStar"><FaStar /></div> : <div onClick={() => setRating(1)} className="emptyStar"><CiStar /></div>}
                    {rating > 1 ? <div onClick={() => setRating(1)} className="fullStar"><FaStar /></div> : <div onClick={() => setRating(2)} className="emptyStar"><CiStar /></div>}
                    {rating > 2 ? <div onClick={() => setRating(2)} className="fullStar"><FaStar /></div> : <div onClick={() => setRating(3)} className="emptyStar"><CiStar /></div>}
                    {rating > 3 ? <div onClick={() => setRating(3)} className="fullStar"><FaStar /></div> : <div onClick={() => setRating(4)} className="emptyStar"><CiStar /></div>}
                    {rating > 4 ? <div onClick={() => setRating(4)} className="fullStar"><FaStar /></div> : <div onClick={() => setRating(5)} className="emptyStar"><CiStar /></div>}
                </>
            :
                <>
                    {rating > 0 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
                    {rating > 1 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
                    {rating > 2 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
                    {rating > 3 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
                    {rating > 4 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
                </>
            }
        </div>
    );
};

export default Stars;