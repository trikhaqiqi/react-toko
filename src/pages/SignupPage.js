import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const SigninPage = () => {

    const [username, setUsername] = useState("");
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup } = useAuth();

    const isValidForm = () => {
        return username.length > 0 && password.length > 0 && nama.length > 0 && email.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(username, password, nama, email);
    }

    return (
        <div className="signup-panel shadow-8 p-fluid">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Sign Up</h1>
                    <p>Silahkan melengkapi data di bawah ini</p>
                </div>

                <div className="mb-2">
                    <InputText value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username" />
                </div>

                <div className="mb-2">
                    <InputText value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Nama" />
                </div>

                <div className="mb-2">
                    <InputText value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" />
                </div>

                <div className="mb-2">
                    <Password value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        toggleMask
                        feedback={false}
                        placeholder="Password"
                    />
                </div>

                <div>
                    <Button type="submit" disabled={!isValidForm()}>Sign Up</Button>
                </div>

                <div>
                    <p>Sudah mempunyai akun ? <Link to="/signin">
                        <span>Sign In</span>
                    </Link></p>
                </div>

            </form>
        </div>
    )
}

export default SigninPage;