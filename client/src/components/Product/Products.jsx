import {useEffect} from "react";
import CreateProduct from "../../pages/admin/CreateProduct.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getAllProduct} from "../../redux/product/action.js";
import Section from "../Layout/Section.jsx";

const Products = () => {
    const {products} = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, []);

    return (
        <>
            <CreateProduct/>

            <Section>
                <h1 className="heading">products added</h1>

                <div className="grid grid-cols-[repeat(auto-fit,33rem)] sm:grid-cols-[1fr] gap-6 justify-center items-start">
                    {products.length ? products.map((item, i) => (
                        <div className="rounded-lg bg-white p-8 shadow-normal border-normal" key={i}>
                            {item.images ? <img className="mb-6 h-[20rem]" src={item.images[0] && item.images[0].url} alt=""/> : <></>}
                            <p>{item.name}</p>
                            <div className="text-[2rem] text-main m-[.5rem_0]">$<span>{item.price}</span>/-</div>
                            <div className="leading-loose text-[1.5rem] text-light-color"><span>{item.details}</span></div>
                            <div className="flex-btn">
                                <a href={`/admin/update-product/${item._id}`} className="option-btn">update</a>
                                <a href="#" onClick={() => dispatch(deleteProduct(item._id))} className="delete-btn">delete</a>
                            </div>
                        </div>
                    )) : <p className="empty">no products added yet!</p>}
                </div>
            </Section>
        </>
    );
}

export default Products