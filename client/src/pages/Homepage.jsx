import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {dataCategories, dataSliders} from "../components/data.js";
import CardProduct from "../components/Product/CardProduct.jsx";
import {getAllProduct} from "../redux/product/action.js";
import Section from "../components/Layout/Section.jsx";

const Homepage = () => {
    const {products} = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    if (products.length > 5) {
        products.splice(5)
    }

    useEffect(() => {
        dispatch(getAllProduct());
    }, []);

    return (
        <>
            <div className="home-bg bg-no-repeat bg-[url(../images/home-bg.png)] bg-cover bg-center">
                <Section>
                    <Swiper
                        loop={true} modules={[Pagination]} spaceBetween={20}
                        pagination={{ clickable: true, el: ".swiper-pagination"}}
                    >
                        {dataSliders.map((slider, i) => (
                            <SwiperSlide key={i} className="flex select-none flex-wrap items-center gap-6 pt-8 pb-24">
                                <div className="flex-[1_1_40rem]">
                                    <img src={slider.image} alt="" className="h-[40rem]"/>
                                </div>

                                <div className="flex-[1_1_40rem]">
                                    <span className="text-white text-[2rem]">{slider.detail}</span>
                                    <h3 className="mt-4 uppercase text-white text-[4rem]">{slider.title}</h3>
                                    <a href={slider.href} className="btn">shop now</a>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-pagination"></div>
                    </Swiper>
                </Section>
            </div>

            <Section>
                <h1 className="heading">shop by category</h1>

                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={20}
                    pagination={{clickable: true, el: ".swiper-pagination"}}
                    breakpoints={{
                        0: {slidesPerView: 2},
                        650: {slidesPerView: 3},
                        768: {slidesPerView: 4},
                        1024: {slidesPerView: 5}
                    }}
                >
                    {dataCategories.map((category, i) => (
                        <SwiperSlide key={i} className="mb-20 rounded-lg bg-white p-8 text-center shadow-normal border-normal group hover:bg-black">
                            <a href={category.href}>
                                <img src={category.image} alt="" className="mb-4 select-none h-[7rem] group-hover:invert"/>
                                <p className="select-none capitalize group-hover:text-white">{category.title}</p>
                            </a>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-pagination"></div>
                </Swiper>
            </Section>

            <Section>
                <h1 className="heading">latest products</h1>

                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={20}
                    pagination={{clickable: true, el: ".swiper-pagination"}}
                    breakpoints={{
                        550: {slidesPerView: 2},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3}
                    }}
                >
                    {products.length ? products.map((product, i) => (
                        <SwiperSlide key={i}>
                            <CardProduct
                                _id={product._id}
                                name={product.name}
                                price={product.price}
                                images={product.images}
                            ></CardProduct>
                        </SwiperSlide>
                    )) : <p className="empty">no products added yet!</p>}

                    <div className="swiper-pagination"></div>
                </Swiper>
            </Section>
        </>
    );
}

export default Homepage