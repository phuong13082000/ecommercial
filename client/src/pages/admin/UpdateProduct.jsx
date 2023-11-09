import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct, updateProduct} from "../../redux/product/action.js";
import Section from "../../components/Layout/Section.jsx";

const UpdateProduct = () => {
    const {id} = useParams();
    const ref = useRef(null);
    const {oneProduct} = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [oldImages, setOldImages] = useState([]);
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("");
    const [details, setDetail] = useState("");
    const [imagesPreview, setImagesPreview] = useState([]);

    const handleProductImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);
        setOldImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((oldData) => [...oldData, reader.result]);
                    setImages((oldData) => [...oldData, reader.result]);
                }
            }
            reader.readAsDataURL(file);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateProduct(id, {
            name: name,
            details: details,
            price: price,
            category: category,
            images: images
        }));
    }

    useEffect(() => {
        if (oneProduct && oneProduct._id !== id){
            dispatch(getOneProduct(id));
        }else{
            setName(oneProduct.name);
            setPrice(oneProduct.price);
            setOldImages(oneProduct.images);
            setCategory(oneProduct.category);
            setDetail(oneProduct.details);
        }
    }, [id, oneProduct]);

    console.log(images)
    return (
        <Section>
            <h1 className="heading">update product</h1>

            {oneProduct.name ?
                <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-normal border-normal max-w-[50rem] m-[0_auto]">
                    <div className="mb-8 image-container">
                        <div className="main-image">
                            {oneProduct.images.length < 0 ? <img className="h-[20rem]" src={oneProduct.images && oneProduct.images[0].url} ref={ref} alt=""/> : <></>}
                        </div>

                        <div className="flex justify-center gap-4 sub-image m-[1rem_0]">
                            {oldImages && oldImages.map((image, i) => (
                                <img
                                    src={image.url} alt="" key={i}
                                    onClick={() => {ref.current.src = image.url}}
                                    className="cursor-pointer h-[5rem] w-[7rem] p-[.5rem] border-normal transition-[.2s_linear] hover:scale-[1.1]"
                                />
                            ))}
                        </div>
                    </div>

                    <span className="text-[1.7rem] text-light-color">update name</span>
                    <input
                        type="text" name="name" maxLength="100" value={name}
                        className="p-[1.4rem] bg-light-bg m-[1rem_0]"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <span className="text-[1.7rem] text-light-color">update price</span>
                    <input
                        type="number" name="price" min="0" max="9999999999" value={price}
                        className="p-[1.4rem] bg-light-bg m-[1rem_0]"
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <span className="text-[1.7rem] text-light-color">update category</span>
                    <input
                        type="text" name="category" maxLength="100" value={category}
                        className="p-[1.4rem] bg-light-bg m-[1rem_0]"
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <span className="text-[1.7rem] text-light-color">update details</span>
                    <textarea
                        cols="30" rows="10" value={details}
                        className="h-[15rem] p-[1.4rem] bg-light-bg m-[1rem_0]"
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>

                    <span className="text-[1.7rem] text-light-color">update image</span>
                    {imagesPreview.map((image, i) => <img draggable="false" src={image} alt="Product" key={i} className="h-[30rem]" />)}
                    <input
                        type="file" accept="image/*" name="images" multiple
                        className="p-[1.4rem] bg-light-bg m-[1rem_0]"
                        onChange={handleProductImageChange}
                    />

                    <div className="flex-btn">
                        <button type="submit" className="btn">update</button>
                        <a href="/admin/products" className="option-btn">go back</a>
                    </div>
                </form> : <p className="empty">no product found!</p>
            }
        </Section>
    );
}

export default UpdateProduct