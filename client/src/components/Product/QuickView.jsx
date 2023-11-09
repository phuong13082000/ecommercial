import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import {getOneProduct} from "../../redux/product/action.js";
import {createCart} from "../../redux/user/action.js";
import {createWishlist} from "../../redux/user/action.js";
import Section from "../Layout/Section.jsx";

const QuickView = () => {
    const {id} = useParams();
    const {oneProduct} = useSelector((store) => store.ProductReducer);
    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const addCart = (idProduct, nameProduct, price, quantity, image) => {
        dispatch(createCart(idProduct, {
            user_id: user._id || idUser,
            name: nameProduct,
            price: price,
            quantity: quantity,
            image: image
        }));
    }

    const addWishlist = (idProduct, nameProduct, price, image) => {
        dispatch(createWishlist(idProduct, {
            user_id: user._id || idUser,
            name: nameProduct,
            price: price,
            image: image
        }));
    }

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [])

    return (
        <Section>
            <h1 className="heading">quick view</h1>

            {oneProduct ?
                <form className="mt-4 rounded-lg bg-white p-8 border-normal shadow-normal">
                    <div className="flex flex-wrap items-center gap-6 row">
                        <div className="mb-8 flex-[1_1_40rem]">
                            <div className="main-image">
                                <img src={oneProduct.images && oneProduct.images[0].url} ref={ref} alt="" className="h-[30rem]"/>
                            </div>

                            <div className="mt-8 flex justify-center gap-6">
                                {oneProduct.images && oneProduct.images.map((item, i) => (
                                    <img
                                        key={i} src={item.url} alt=""
                                        onClick={() => {ref.current.src = item.url}}
                                        className="cursor-pointer p-2 h-[7rem] w-[10rem] border-normal transition-[.2s_linear] hover:scale-[1.1]"
                                    />
                                ))}
                           </div>
                        </div>

                        <div className="flex-[1_1_40rem]">
                            <p>{oneProduct.name}</p>
                            <div className="flex items-center justify-between gap-4 m-[1rem_0]">
                                <div className="text-[2rem] text-red"><span>$</span>{oneProduct.price}<span>/-</span></div>
                                <input type="number" className="p-4 w-[7rem] border-normal" min="1" max="99" onKeyPress="if(this.value.length == 2) return false;" defaultValue={1}/>
                            </div>

                            <div className="leading-loose text-[1.6rem] text-light-color">{oneProduct.details}</div>
                            <div className="flex-btn">
                                <a href="#" className="btn" onClick={() => addCart(oneProduct._id, oneProduct.name, oneProduct.price, 1, oneProduct.images[0].url)}>add to cart</a>
                                <a href="#" className="option-btn" onClick={() => addWishlist(oneProduct._id, oneProduct.name, oneProduct.price, oneProduct.images[0].url)}>add to wishlist</a>
                            </div>
                        </div>
                    </div>
                </form> : <p className="empty">no products added yet!</p>
            }
        </Section>
    );
}

export default QuickView