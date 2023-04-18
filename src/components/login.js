import React, { useState } from "react";
import axios from "axios"

import '../css/login.css';
import { API } from "../types";

function UserLogin(){
    const [username, setUsername] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`${API}/Centhora/centhoralogin`, {
                username,
                userpassword,
            });
            
            console.log("resData", response.data);

            const JWT_Token = response.data.token;

            //Store the token in the browsers' local storage
            localStorage.setItem('JWT-Token', JWT_Token);

            // Redirect the user to the authorized page
            //window.location.href = '/authorized';
        } catch (error) {
            setErrorMessage('*Invalid username or password');
        }
    };

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={userpassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserLogin;