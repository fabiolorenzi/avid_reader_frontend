import React from "react";
import "./Button.css";

interface ButtonProps {
    text: string;
    cancel?: boolean;
    onClick: () => void;
};

function Button({text, cancel = false, onClick} : ButtonProps) {
    return(
        <button
            className={cancel ? "cancelButton" : "submitButton"}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;