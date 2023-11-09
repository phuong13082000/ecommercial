import {useState} from "react";
import {useDispatch} from "react-redux";
import {createProduct} from "../../redux/product/action.js";
import Section from "../../components/Layout/Section.jsx";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const dispatch = useDispatch();

    const handleProductImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((oldImages) => [...oldImages, reader.result]);
                    setImages((oldImages) => [...oldImages, reader.result]);
                }
            }
            reader.readAsDataURL(file);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProduct({
            "name": name,
            "details": detail,
            "price": price,
            "category": category,
            "images": images
        }));
    }

    return (
        <Section>
            <h1 className="heading">add product</h1>

            <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
                className="rounded-lg bg-white p-8 max-w-[70rem] m-[0_auto] shadow-normal border-normal"
            >
                <div className="flex flex-wrap gap-6">
                    <div className="flex-[1_1_25rem]">
                        <span className="text-[1.7rem] text-light-color">product name (required)</span>
                        <input
                            type="text" name="name" required maxLength="100" placeholder="enter product name" className="mt-6 p-[1.4rem]"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex-[1_1_25rem]">
                        <span className="text-[1.7rem] text-light-color">product price (required)</span>
                        <input
                            type="number" name="price" min={0} required max={9999999999} placeholder="enter product price" className="mt-6 p-[1.4rem]"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex-[1_1_25rem]">
                        <div className="flex h-32 gap-2 overflow-x-auto rounded border">
                            {imagesPreview.map((image, i) => <img draggable="false" src={image} alt="" key={i} className="h-full"/>)}
                        </div>
                        <span className="text-[1.7rem] text-light-color">image (required)</span>
                        <input
                            type="file" name="images" accept="image/*" multiple className="mt-6 p-[1.4rem]"
                            onChange={handleProductImageChange}
                        />
                    </div>

                    <div className="flex-[1_1_25rem]">
                        <span className="text-[1.7rem] text-light-color">category (required)</span>
                        <input
                            type="text" name="category" required maxLength="100" placeholder="enter category" className="mt-6 p-[1.4rem]"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className="flex-[1_1_25rem]">
                        <span className="text-[1.7rem] text-light-color">product details (required)</span>
                        <textarea
                            placeholder="enter product details" required maxLength="500" cols="30" rows="10" className="mt-6 resize-none h-[5.4rem] p-[1.4rem] sm:h-[15rem]"
                            onChange={(e) => setDetail(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <button type="submit" className="btn">add product</button>
            </form>
        </Section>
    );
}

export default CreateProduct