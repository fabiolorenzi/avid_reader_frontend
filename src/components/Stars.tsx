import React from "react";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import "./Stars.css";

interface StarsProps {
    rating: number;
};

function Stars({rating}: StarsProps) {
    return(
        <div className="stars_container">
            {rating > 0 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
            {rating > 1 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
            {rating > 2 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
            {rating > 3 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
            {rating > 4 ? <div className="fullStar"><FaStar /></div> : <div className="emptyStar"><CiStar /></div>}
        </div>
    );
};

export default Stars;