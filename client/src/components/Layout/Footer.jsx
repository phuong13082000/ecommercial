import Section from "./Section.jsx";

const Footer = () => {
    
    return (
        <footer className="bg-white">
            <Section className="grid grid-cols-[repeat(auto-fit,minmax(27rem,1fr))] gap-6 items-start">
                <div className="box">
                    <h3 className="mb-8 capitalize">quick links</h3>
                    <a href="/" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> home</a>
                    <a href="/about" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> about</a>
                    <a href="/shop" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> shop</a>
                    <a href="/contact" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> contact</a>
                </div>

                <div className="box">
                    <h3 className="mb-8 capitalize">extra links</h3>
                    <a href="/user-login" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> login</a>
                    <a href="/user-register" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> register</a>
                    <a href="/cart" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> cart</a>
                    <a href="/orders" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"> <i className="pr-4 fas fa-angle-right text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> orders</a>
                </div>

                <div className="box">
                    <h3 className="mb-8 capitalize">contact us</h3>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="pr-4 fas fa-phone text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> +123 456 7899</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="pr-4 fas fa-phone text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> +111 222 3333</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="pr-4 fas fa-envelope text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> account@gmail.com</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="pr-4 fas fa-map-marker-alt text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> HCM, VIETNAM</a>
                </div>

                <div className="box">
                    <h3 className="mb-8 capitalize">follow us</h3>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="fab fa-facebook-f text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> facebook</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="fab fa-twitter text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> twitter</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="fab fa-instagram text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> instagram</a>
                    <a href="#" className="mx-0 my-6 block text-[1.7rem] text-light-color group hover:text-main"><i className="fab fa-linkedin text-main transition-[0.2s] duration-[linear] group-hover:pr-8"></i> linkedin</a>
                </div>
            </Section>

            <div className="px-8 py-10 text-center text-black credit border-t-normal text-[2rem]">&copy; copyright @ 2023 by <span className="text-main">customer designer</span> | all rights reserved!</div>
        </footer>
    );
}

export default Footer