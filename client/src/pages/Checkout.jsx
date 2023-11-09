import {createOrder} from "../redux/order/action.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../redux/user/action.js";
import Section from "../components/Layout/Section.jsx";

const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [method, setMethod] = useState("");
    const [address, setAddress] = useState("");

    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();
    let listCart = user.cartItem ?? [];

    const handleQuantityTotal = () => {
        return listCart.reduce((p, elem) => p + Number(elem.quantity), 0);
    }

    const handleGrandTotal = () => {
        return listCart.reduce((p, elem) => p + Number(elem.price), 0);
    }

    const handleOrder = () => {
        dispatch(createOrder(idUser ? idUser : user._id, {
            name: name ? name : user.name,
            email: email ? email : user.email,
            method: method,
            address: address,
            total_products: handleQuantityTotal(),
            total_price: handleGrandTotal(),
        }));
    }

    useEffect(() => {
        if (idUser || user._id){
            dispatch(getUser(idUser || user._id));
        }
    }, []);

    return (
        <Section>
            <form className="rounded-lg bg-white p-8 border-normal shadow-normal">
                <h3 className="mb-8 rounded-lg bg-black text-center uppercase text-white p-[1.5rem_1rem] text-[2.5rem]">your orders</h3>

                <div className="pb-0 text-center">
                    {carts.length ? carts.map((cart, i) => (
                        <p className="inline-block rounded-lg bg-white text-center p-[1rem_1rem] m-[1rem_.5rem] border-normal shadow-normal">
                            {cart.name} <span className="text-red">${cart.price}/-{cart.quantity}</span>
                        </p>
                    )) : <p className="empty">your cart is empty!</p>}

                    <div className="mt-6 mb-10 text-[2.5rem] text-light-color">
                        grand total : <span className="text-red">${handleGrandTotal()}/-</span>
                    </div>
                </div>

                <h3 className="mb-8 rounded-lg bg-black text-center uppercase text-white p-[1.5rem_1rem] text-[2.5rem]">place your orders</h3>
                <div className="flex flex-wrap justify-between gap-6">
                    <div className="w-[49%]">
                        <span className="text-[1.8rem] text-light-color">your name :</span>
                        <input
                            type="text" name="name" placeholder="enter your name" maxLength="20"
                            className="border-normal p-[1.2rem_1.4rem] m-[1rem_0]"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="w-[49%]">
                        <span className="text-[1.8rem] text-light-color">your email :</span>
                        <input
                            type="email" name="email" placeholder="enter your email" maxLength="50"
                            className="border-normal p-[1.2rem_1.4rem] m-[1rem_0]"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-[49%]">
                        <span className="text-[1.8rem] text-light-color">payment method :</span>
                        <select
                            name="method" className="border-normal p-[1.2rem_1.4rem] m-[1rem_0]" required
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="cash on delivery">cash on delivery</option>
                            <option value="credit card">credit card</option>
                            <option value="paytm">paytm</option>
                            <option value="paypal">paypal</option>
                        </select>
                    </div>

                    <div className="w-[49%]">
                        <span className="text-[1.8rem] text-light-color">address :</span>
                        <input
                            type="text" name="flat" placeholder="e.g. flat number" maxLength="50" required
                            className="border-normal p-[1.2rem_1.4rem] m-[1rem_0]"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                <a href="#" className="btn" onClick={handleOrder}>place order</a>
            </form>
        </Section>
    );
}

export default Checkout