import React, {ChangeEvent} from "react";
import User from "../../types/User";
import "./Login.css";

interface LoginProps {
    user: User | undefined,
    setUser: (value: User) => void;
    onCancel: () => void;
    onSubmit: () => void;
};

function Login({
    user,
    setUser,
    onCancel,
    onSubmit
} : LoginProps) {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value} as {[K in keyof User]: User[K]});
    };

    return(
        <div className="login_container">
            <div className="login_inputLine">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={user?.username} onChange={onChange} autoComplete="off" />
            </div>
            <div className="login_inputLine">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={user?.password} onChange={onChange} autoComplete="off" />
            </div>
            <div className="login_buttonsLine"></div>
        </div>
    );
};

export default Login;