import Section from "../../components/Layout/Section.jsx";

const AdminAccount = () => {
    return (

        <Section>
            <h1 className="heading">admin accounts</h1>

            <div className="grid grid-cols-[repeat(auto-fit,33rem)] sm:grid-cols-[1fr] gap-6 justify-center items-start">
                <div className="rounded-lg bg-white p-8 text-center pt-[.5rem] border-normal shadow-normal">
                    <p className="m-[1rem_0] text-light-color">add new admin</p>
                    <a href="#" className="option-btn">register admin</a>
                </div>

                <div className="rounded-lg bg-white p-8 text-center pt-[.5rem] border-normal shadow-normal">
                    <p className="m-[1rem_0] text-light-color"> admin id : <span className="text-main">id</span></p>
                    <p className="m-[1rem_0] text-light-color"> admin name : <span className="text-main">name</span></p>
                    <div className="flex-btn">
                        <a href="#" className="delete-btn">delete</a>
                        <a href="#" className="option-btn">update</a>
                    </div>
                </div>

                <p className="empty">no accounts available!</p>
            </div>
        </Section>
    );
}

export default AdminAccount