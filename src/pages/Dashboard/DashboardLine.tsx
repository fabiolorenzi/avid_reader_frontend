import React from "react";
import CardOne from "../../media/card_one.jpg";
import CardTwo from "../../media/card_two.jpg";
import CardThree from "../../media/card_three.jpg";
import CardFour from "../../media/card_four.jpg";
import CardFive from "../../media/card_five.jpg";
import CardSix from "../../media/card_six.jpg";
import "./DashboardLine.css";

interface DashboardLineProps {
    title: string;
    onClick: () => void;
    top?: boolean;
};

function DashboardLine({title, onClick, top = false}: DashboardLineProps) {
    return(
        <div className="dashboardLine_container">
            <h1 onClick={onClick}>{title}</h1>
            <div className="dashboardLine_imageLine">
                <img src={top ? CardOne : CardFour} alt="card" />
                <img src={top ? CardTwo : CardFive} alt="card" />
                <img src={top ? CardThree : CardSix} alt="card" />
            </div>
        </div>
    );
};

export default DashboardLine;