import {useEffect, useState} from "react";
import {loginUser} from "../redux/user/action.js";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import Section from "../components/Layout/Section.jsx";

const Login = () => {
    const {isAuthError, isAuth} = useSelector((store) => store.AuthUserReducer);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(loginUser({email, password}));
    }

    useEffect(() => {
        if (isAuthError) {
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Something went wrong!'})
        }

        if (isAuth) {
            Swal.fire({title: 'Login Successfully!', html: 'Back to home!', icon: 'success'})

            navigate("/");
        }
    }, [isAuth, isAuthError]);

    return (
        <Section>
            <div className="rounded-lg bg-white p-8 text-center border-normal shadow-normal m-[0_auto] max-w-[50rem]">
                <h3>Login Now</h3>

                <input
                    type="email" required placeholder="enter your email" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password" required placeholder="enter your password" className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <a href="#" className="btn" onClick={handleSubmit}>login now</a>
                <p className="text-light-color m-[1.5rem_0]">don't have an account?</p>
                <a href="/user-register" className="option-btn">register now</a>
            </div>
        </Section>
    );
}

export default Login