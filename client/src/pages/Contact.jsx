import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createMessage} from "../redux/message/action.js";
import Section from "../components/Layout/Section.jsx";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();

    const handleCreateMessage = () => {
        dispatch(createMessage(idUser ? idUser : user._id, {
            name: name,
            email: email,
            number: number,
            message: message,
        }));
    }

    return (
        <Section>
            <div className="rounded-lg bg-white p-8 text-center shadow-normal border-normal max-w-[50rem] m-[0_auto]">
                <h3 className="mb-4">Get In Touch</h3>

                <input
                    type="text"
                    placeholder="enter your name"
                    required
                    className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="enter your email"
                    required
                    maxLength="50"
                    className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="number"
                    min="0"
                    max="9999999999"
                    placeholder="enter your number"
                    required
                    className="m-[1rem_0] p-[1.4rem]"
                    onChange={(e) => setNumber(e.target.value)}
                />

                <textarea
                    className="resize-none m-[1rem_0] p-[1.4rem] h-[15rem]"
                    placeholder="enter your message"
                    cols="30"
                    rows="10"
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <a href="#" className="btn" onClick={handleCreateMessage}>send message</a>
            </div>
        </Section>
    );
}

export default Contact