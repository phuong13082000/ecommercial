import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllProduct} from "../redux/product/action.js";
import CardProduct from "../components/Product/CardProduct.jsx";
import Section from "../components/Layout/Section.jsx";

const Search = () => {
    const [valueSearch, setValueSearch] = useState("");
    const {products} = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    const searchFunction = () => {
        dispatch(getAllProduct(valueSearch));
    }

    useEffect(() => {
        searchFunction();
    }, [valueSearch]);

    return (
        <>
            <Section>
                <div className="flex gap-4">
                    <input
                        type="text" placeholder="search here..." maxLength="100" required
                        className="border-normal shadow-normal p-[1.4rem]"
                        onChange={(e) => setValueSearch(e.target.value)}
                    />
                    <button
                        type="button"
                        className="w-24 cursor-pointer rounded-lg text-center text-white fas fa-search text-[2.5rem] h-[5.5rem] leading-[5.5rem] bg-main hover:bg-black"
                        // onClick={searchFunction}
                    ></button>
                </div>
            </Section>

            <Section className="pt-0 min-h-[100vh]">
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
        </>
    );
}

export default Search