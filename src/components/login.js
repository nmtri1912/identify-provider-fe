import axios from "axios";
import { useState } from "react";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (field, e) => {
        if (field == "username") {
            setUsername(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
    }

    const submit = () => {
        axios.post("http://localhost:8080/api/login", {
            username: username,
            password: password
        })
    }
    return (
        <div className="container">
            <label for="inputEmail" className="sr-only">Email address</label>
            <textarea
                value={username}
                onChange={(e) => {handleChange("username", e)}}
            />
            <label for="inputPassword" className="sr-only">Password</label>
            <textarea
                value={password}
                onChange={(e) => {handleChange("password", e)}}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submit}>Login</button>
        </div>
    )

}

export default Login;
