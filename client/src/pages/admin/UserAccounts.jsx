import {useDispatch, useSelector} from "react-redux";
import { getAllUser } from "../../redux/user/action.js";
import { useEffect } from "react";
import Section from "../../components/Layout/Section.jsx";

const UserAccounts = () => {
    const {users} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    return (
        <>
            <Section>
                <h1 className="heading">user accounts</h1>

                <div className="grid grid-cols-[repeat(auto-fit,33rem)] sm:grid-cols-[1fr] gap-6 justify-center items-start">
                    {users.length ? users.map((item, i) => (
                        <div key={i} className="rounded-lg bg-white p-8 text-center pt-[.5rem] border-normal shadow-normal">
                            <p className="m-[1rem_0] text-light-color"> user id : <span className="text-main">{item._id}</span></p>
                            <p className="m-[1rem_0] text-light-color"> username : <span className="text-main">{item.name}</span></p>
                            <p className="m-[1rem_0] text-light-color"> email : <span className="text-main">{item.email}</span></p>
                            <a href="#" className="delete-btn">delete</a>
                        </div>
                    )) : <p className="empty">no accounts available!</p>}
                </div>
            </Section>
        </>
    );
}

export default UserAccounts