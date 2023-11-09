import {useSelector} from "react-redux";
import Section from "../components/Layout/Section.jsx";

const UpdateUser = () => {
    const {user, emailUser, nameUser} = useSelector((store) => store.AuthUserReducer);

    return (
        <Section>
            <form action="" method="post" className="rounded-lg bg-white p-8 text-center border-normal shadow-normal m-[0_auto] max-w-[50rem]">
                <h3 className="uppercase text-black text-[2.5rem]">update now</h3>
                <input
                    type="text" required placeholder="enter your username"
                    className="w-full rounded-lg text-black m-[1rem_0] bg-light-bg p-[1.4rem] text-[1.8rem]"
                    defaultValue={nameUser || user.name}
                />

                <input
                    type="email" required placeholder="enter your email"
                    className="w-full rounded-lg text-black m-[1rem_0] bg-light-bg p-[1.4rem] text-[1.8rem]"
                    defaultValue={emailUser || user.email}
                />

                <input
                    type="password" placeholder="enter your old password"
                    className="w-full rounded-lg text-black m-[1rem_0] bg-light-bg p-[1.4rem] text-[1.8rem]"
                    disabled
                />

                <input
                    type="password" placeholder="enter your new password"
                    className="w-full rounded-lg text-black m-[1rem_0] bg-light-bg p-[1.4rem] text-[1.8rem]"
                />

                <input
                    type="password" placeholder="confirm your new password"
                    className="w-full rounded-lg text-black m-[1rem_0] bg-light-bg p-[1.4rem] text-[1.8rem]"
                />

                <input type="submit" value="update now" className="btn" name="submit"/>
            </form>
        </Section>
    );
}

export default UpdateUser