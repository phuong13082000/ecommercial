import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser, logoutUser} from "../../redux/user/action.js";
import Section from "./Section.jsx";

const Header = () => {
    const [navbarClass, setNavbarClass] = useState(false);
    const [profileClass, setProfileClass] = useState(false);
    const {user, idUser, emailUser, nameUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();

    let countWishlist = user ? user.wishlist?.length : 0;
    let countCart = user ? user.cartItem?.length : 0;

    useEffect(() => {
        window.onscroll = () => {
            setNavbarClass(false);
            setProfileClass(false);
        }

        if (idUser || user._id){
            dispatch(getUser(idUser || user._id));
        }
    }, []);

    return (
        <header className="sticky top-0 right-0 left-0 bg-white header shadow-normal z-[1000]">
            <Section className="relative flex items-center justify-between">
                <a href="/" className="text-black logo text-[2.5rem]">Shop<span className="text-main">.</span></a>

                <nav className={`md:top-[99%] md:border-t-[.2rem] md:border-b-[.2rem] md:transition-[.2s_linear] md:clip-path-navbar md:absolute md:right-0 md:left-0 md:border-solid md:border-t-black md:border-b-black md:bg-white ${navbarClass ? `md:clip-path-activeNavbar` : ``}`}>
                    <a href="/" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">home</a>
                    <a href="/about" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">about</a>
                    <a href="/orders" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">orders</a>
                    <a href="/shop" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">shop</a>
                    <a href="/contact" className="mx-4 my-0 text-black text-[2rem] hover:text-main hover:underline md:m-8 md:block">contact</a>
                </nav>

                <div className="icons">
                    <div
                        onClick={() => navbarClass ? setNavbarClass(false) : setNavbarClass(true)}
                        className="ml-4 hidden cursor-pointer text-black fas fa-bars text-[2.5rem] hover:text-main md:inline-block"
                    ></div>

                    <a href="/search-page">
                        <i className="ml-4 cursor-pointer text-black fas fa-search text-[2.5rem] hover:text-main"></i>
                    </a>

                    <a href="/wishlist">
                        <i className="ml-4 cursor-pointer text-black fas fa-heart text-[2.5rem] hover:text-main"></i>
                        <span className="text-[2rem] hover:text-main">{countWishlist}</span>
                    </a>

                    <a href="/cart">
                        <i className="ml-4 cursor-pointer text-black fas fa-shopping-cart text-[2.5rem] hover:text-main"></i>
                        <span className="text-[2rem] hover:text-main">{countCart}</span>
                    </a>

                    <div
                        onClick={() => profileClass ? setProfileClass(false) : setProfileClass(true)}
                        className="ml-4 cursor-pointer text-black fas fa-user text-[2.5rem] hover:text-main"
                    ></div>
                </div>

                <div className={`absolute right-8 rounded-lg bg-white p-8 top-[120%] shadow-normal border-normal w-[30rem] pt-[1.2rem] animate-[fadeIn_.2s_linear] ${profileClass ? `inline-block` : `hidden`}`}>
                    {idUser || user.name ?
                        <>
                            <p className="mb-4 text-center">{user.name || nameUser || emailUser}</p>
                            <a href="/update-user" className="btn">update profile</a>
                            <div className="flex-btn">
                                <a href="/user-register" className="option-btn">register</a>
                                <a href="/user-login" className="option-btn">login</a>
                            </div>
                            <a href="#" className="delete-btn" onClick={() => dispatch(logoutUser())}>logout</a>
                        </> : <>
                            <p className="mb-4 text-center">please login or register first!</p>
                            <div className="flex-btn">
                                <a href="/user-register" className="option-btn">register</a>
                                <a href="/user-login" className="option-btn">login</a>
                            </div>
                        </>
                    }
                </div>
            </Section>
        </header>
    );
}

export default Header