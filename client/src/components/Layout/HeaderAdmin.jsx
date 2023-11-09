import {useState} from "react";
import Section from "./Section.jsx";

const HeaderAdmin = () => {
    const nameAdmin = "admin";

    const [navbarClass, setNavbarClass] = useState(false);
    const [profileClass, setProfileClass] = useState(false);

    return (
        <header className="sticky top-0 right-0 left-0 bg-white header shadow-normal z-[1000]">
            <Section className="relative flex items-center justify-between">
                <a href="/admin" className="text-black text-[2.5rem]">Admin<span className="text-main">Panel</span></a>

                <nav className={`${navbarClass ? "md:clip-path-activeNavbar" : "md:clip-path-navbar"} md:absolute md:top-[99%] md:left-0 md:right-0 md:border-t-normal md:border-b-normal md:bg-white md:transition-[.2s_linear]`}>
                    <a href="/admin" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">home</a>
                    <a href="/admin/products" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">products</a>
                    <a href="/admin/placed-orders" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">orders</a>
                    <a href="/admin/admin-accounts" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">admins</a>
                    <a href="/admin/users-accounts" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">users</a>
                    <a href="/admin/messages" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">messages</a>
                </nav>

                <div className="icons">
                    <div id="menu-btn" onClick={() => navbarClass ? setNavbarClass(false) : setNavbarClass(true)} className="hidden cursor-pointer text-black fas fa-bars ml-[1.7rem] text-[2.5rem] hover:text-main md:inline-block"></div>
                    <div id="user-btn" onClick={() => profileClass ? setProfileClass(false) : setProfileClass(true)} className="cursor-pointer text-black fas fa-user ml-[1.7rem] text-[2.5rem] hover:text-main"></div>
                </div>

                <div className={`${profileClass ? "inline-block" : "hidden"} absolute top-[120%] right-8 bg-white rounded-lg shadow-normal border-normal p-8 w-[30rem] pt-[1.2rem] animate-[fadeIn_.2s_linear]`}>
                    <p className="mb-4 text-center">{nameAdmin}</p>
                    <a href="/admin/update-profile" className="btn">update profile</a>
                    <div className="flex-btn">
                        <a href="/admin/register-admin" className="option-btn">register</a>
                        <a href="/admin/admin-login" className="option-btn">login</a>
                    </div>
                    <a href="#" className="delete-btn">logout</a>
                </div>
            </Section>
        </header>
    );
}

export default HeaderAdmin