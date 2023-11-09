import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import Section from "../components/Layout/Section.jsx";
import {dataAbouts} from "../components/data.js";
import {GenerateStars} from "../components/GenerateStars.jsx";

const About = () => {

    return (
        <>
            <Section>
                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex-[1_1_40rem]"><img src="/images/about-img.svg" alt="" /></div>

                    <div className="flex-[1_1_40rem]">
                        <h3>Why Choose Us?</h3>
                        <p className="leading-loose text-light-color p-[1rem_0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis minus et similique doloribus? Harum molestias tenetur eaque illum quas? Obcaecati nulla in itaque modi magnam ipsa molestiae ullam consequuntur.</p>
                        <a href="/contact" className="inline-block w-auto btn">contact us</a>
                    </div>
                </div>
            </Section>

            <Section>
                <h1 className="heading">client's reviews</h1>

                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={20}
                    pagination={{clickable: true, el: ".swiper-pagination"}}
                    breakpoints={{
                        0: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        991: {slidesPerView: 3}
                    }}
                >
                    {dataAbouts?.map((ele, i) => (
                        <SwiperSlide className="mb-20 select-none rounded-lg bg-white p-8 text-center shadow-normal border-normal" key={i}>
                            <img src={ele.image} alt="" className="mx-auto rounded-full"/>
                            <p className="leading-loose p-[1rem_0] text-[1.5rem] text-light-color">{ele.title}</p>
                            <div className="mb-4 inline-block rounded-lg bg-light-bg p-[1rem_1.5rem]">{GenerateStars(ele.star)}</div>
                            <p>{ele.author}</p>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-pagination"></div>
                </Swiper>
            </Section>
        </>
    );
}

export default About