import {useDispatch, useSelector} from "react-redux";
import {deleteAllCart, deleteCart} from "../redux/user/action.js";
import CardProduct from "../components/Product/CardProduct.jsx";
import Section from "../components/Layout/Section.jsx";

const Cart = () => {
    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();
    let listCart = user.cartItem ?? [];

    const canGrandTotal = () => {
        return listCart.reduce((p, elem) => p + Number(elem.price), 0);
    }

    return (
        <Section>
            <h3 className="heading">shopping cart</h3>

            <div className="grid grid-cols-[repeat(auto-fit,33rem)] gap-6 justify-center items-start">
                {user.cartItem ? user.cartItem.map((item, i) => (
                    <CardProduct
                        key={i} cart
                        _id={item.product_id}
                        name={item.name}
                        price={item.price}
                        images={item.image}
                    >
                        <div className="m-[2rem_0] text-[2rem] text-light-color">
                            sub total : <span className="text-red">${item.price * item.quantity}/-</span>
                        </div>

                        <a
                            href="#"
                            className="delete-btn"
                            onClick={() => dispatch(deleteCart(idUser || user._id, {productId: item.product_id}))}
                        >
                            delete item
                        </a>
                    </CardProduct>
                )) : <p className="empty">no products added yet!</p>}
            </div>

            <div className="mt-12 rounded-lg bg-white p-8 text-center cart-total max-w-[50rem] m-[0_auto] border-normal">
                <p className="mb-8 text-[2.5rem]">grand total : <span className="text-red">${canGrandTotal()}/-</span></p>
                <a href="/shop" className="option-btn">continue shopping</a>
                <a href="#" className="delete-btn" onClick={() => dispatch(deleteAllCart(idUser || user._id))}>delete all item</a>
                <a href="/checkout" className="btn">proceed to checkout</a>
            </div>
        </Section>
    );
}

export default Cart