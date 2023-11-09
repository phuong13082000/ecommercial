import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProduct} from "../redux/product/action.js";
import CardProduct from "../components/Product/CardProduct.jsx";
import Section from "../components/Layout/Section.jsx";

const Shop = () => {
    const {products} = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, []);

    return (
        <Section>
            <h1 className="heading">latest products</h1>

            <div className="grid grid-cols-[repeat(auto-fit,33rem)] gap-6 justify-center items-start">
                {products.length ? products.map((product, i) => (
                    <CardProduct
                        key={i}
                        _id={product._id}
                        name={product.name}
                        price={product.price}
                        images={product.images}
                    ></CardProduct>
                )) : <p className="empty">no products added yet!</p>}
            </div>
        </Section>
    );
}

export default Shop