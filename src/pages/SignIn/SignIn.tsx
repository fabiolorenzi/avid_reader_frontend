import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import Login from "./Login";
import User from "../../types/User";
import "./SignIn.css";

function SignIn() {
    const [input, setInput] = useState<User>({id: 0, username: "", password: ""});
    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (user) {
            console.log(user);
        };
    }, [user]);

    function onCancel() {
        setInput({
            id: 0,
            username: "",
            password: ""
        });
    };

    function onSubmit() {
        fetch("https://avid-reader-backend.hopto.org/api/v1/User", {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => data.status == 404 ? alert("The user hasn't been found. Try again.") : setUser(data))
        .catch(err => console.log(err));
    };

    return (
        <div className="signIn_container">
            <Helmet>
                <title>Avid Reader | Login</title>
            </Helmet>
            <Header />
            <Login
                user={input}
                setUser={setInput}
                onCancel={onCancel}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default SignIn;