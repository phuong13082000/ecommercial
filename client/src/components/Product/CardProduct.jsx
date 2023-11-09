import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createWishlist, createCart} from "../../redux/user/action.js";

const CardProduct = ({children, _id, name, price, images, cart}) => {
    const [quantity, setQuantity] = useState(1);
    const {user} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();

    const addCart = (idUser, idProduct, nameProduct, price, quantity, image) => {
        dispatch(createCart(idUser, {
            product_id: idProduct,
            name: nameProduct,
            price: price,
            quantity: quantity,
            image: image
        }));
    }

    const addWishlist = (idUser, idProduct, name, price, image) => {
        dispatch(createWishlist(idUser, {
            product_id: idProduct,
            name: name,
            price: price,
            image: image
        }));
    }

    return (
        <div className="relative mb-20 select-none overflow-hidden rounded-lg bg-white p-8 border-normal shadow-normal group">
            <a
                href="#"
                className="absolute top-4 cursor-pointer rounded-lg bg-white text-center text-black fas fa-heart h-[4.5rem] w-[4.5rem] leading-[4.2rem] text-[2rem] border-normal transition-[.2s_linear] right-[-6rem] group-hover:right-4 hover:bg-black hover:text-white"
                onClick={() => addWishlist(user._id, _id, name, price, images[0].url || images)}
            ></a>

            <a href={`/quick-view/${_id}`} className="absolute top-4 cursor-pointer rounded-lg bg-white text-center text-black fas fa-eye h-[4.5rem] w-[4.5rem] leading-[4.2rem] text-[2rem] border-normal transition-[.2s_linear] left-[-6rem] group-hover:left-4 hover:bg-black hover:text-white"></a>

            <img src={images[0].url || images} alt="" className="mb-8 h-[20rem]"/>

            <p>{name}</p>

            <div className="flex items-center justify-between gap-4">
                <div className="m-[1rem_0] text-[2rem] text-red"><span>$</span>{price}<span>/-</span></div>
                <input type="number" className="w-28 p-4 border-normal" min={1} max={99} defaultValue={1} onChange={(e) => setQuantity(e.target.value)}/>
                {cart ? <button className="w-20 cursor-pointer rounded-lg text-white fas fa-edit h-[4.5rem] bg-orange text-[2rem] hover:bg-black" name="update_qty"></button> : <></>}
            </div>

            {!cart ? <a href="#" className="btn" onClick={() => addCart(user._id, _id, name, price, quantity, images[0].url || images)}>add to cart</a> : <></>}

            {children}
        </div>
    );
}

export default CardProduct