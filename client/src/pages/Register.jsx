import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/user/action.js";
import Section from "../components/Layout/Section.jsx";

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rPassword, setRpassword] = useState();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (rPassword === password) {
            dispatch(registerUser({name, email, password}));
        } else {
            console.log("password not correct")
        }
    }

    return (
        <Section>
            <div className="rounded-lg bg-white p-8 text-center border-normal shadow-normal m-[0_auto] max-w-[50rem]">
                <h3>Register Now</h3>

                <input
                    type="text" required placeholder="enter your username" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email" required placeholder="enter your email" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password" required placeholder="enter your password" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password" required placeholder="confirm your password" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setRpassword(e.target.value)}
                />

                <a href="#" className="btn" onClick={handleSubmit}>register now</a>
                <p className="text-light-color m-[1.5rem_0]">already have an account?</p>
                <a href="/user-login" className="option-btn">login now</a>
            </div>
        </Section>
    );
}

export default Register