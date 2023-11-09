import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteMessage, getAllMessage} from "../../redux/message/action.js";
import Section from "../../components/Layout/Section.jsx";

const Messages = () => {
    const {messages} = useSelector((store) => store.MessageReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMessage());
    }, []);

    return (
        <Section>
            <h1 className="heading">messages</h1>

            <div className="grid grid-cols-[repeat(auto-fit,33rem)] sm:grid-cols-[1fr] gap-6 justify-center items-start">
                {messages.length ? messages.map((item, i) => (
                    <div key={i} className="rounded-lg bg-white p-8 pt-4 border-normal shadow-normal">
                        <p className="leading-[1.5] m-[1rem_0]"> user id : <span className="text-main">{item.user_id}</span></p>
                        <p className="leading-[1.5] m-[1rem_0]"> name : <span className="text-main">{item.name}</span></p>
                        <p className="leading-[1.5] m-[1rem_0]"> email : <span className="text-main">{item.email}</span></p>
                        <p className="leading-[1.5] m-[1rem_0]"> number : <span className="text-main">{item.number}</span></p>
                        <p className="leading-[1.5] m-[1rem_0]"> message : <span className="text-main">{item.message}</span></p>
                        <a href="#" className="delete-btn" onClick={() => dispatch(deleteMessage(item._id))}>delete</a>
                    </div>
                )) : <p className="empty">you have no messages</p>}
            </div>
        </Section>
    );
}

export default Messages