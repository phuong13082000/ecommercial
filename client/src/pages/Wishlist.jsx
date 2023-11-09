import {useDispatch, useSelector} from "react-redux";
import {deleteAllWishlist, deleteWishlist} from "../redux/user/action.js";
import CardProduct from "../components/Product/CardProduct.jsx";
import Section from "../components/Layout/Section.jsx";

const Wishlist = () => {
    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();
    let listWishlist = user.wishlist ?? [];

    const canGrandTotal = () => {
        return listWishlist.reduce((p, elem) => p + Number(elem.price), 0);
    }

    return (
        <Section>
            <h3 className="heading">your wishlist</h3>

            <div className="grid grid-cols-[repeat(auto-fit,33rem)] gap-6 justify-center items-start">
                {user.wishlist ? user.wishlist.map((item, i) => (
                    <CardProduct
                        key={i}
                        _id={item.product_id}
                        name={item.name}
                        price={item.price}
                        images={item.image}
                    >
                        <a
                            href="#" className="delete-btn"
                            onClick={() => dispatch(deleteWishlist(idUser || user._id, {productId: item.product_id}))}
                        >
                            delete item
                        </a>
                    </CardProduct>
                )) : <p className="empty">no products added yet!</p>}
            </div>

            <div className="mt-12 rounded-lg bg-white p-8 text-center wishlist-total max-w-[50rem] m-[0_auto] border-normal">
                <p className="mb-8 text-black text-[2.5rem]">grand total : <span className="text-red">$ {canGrandTotal()}/-</span></p>
                <a href="/shop" className="option-btn">continue shopping</a>
                <a href="#" className="delete-btn" onClick={() => dispatch(deleteAllWishlist(idUser || user._id))}>delete all item</a>
            </div>
        </Section>
    );
}

export default Wishlist