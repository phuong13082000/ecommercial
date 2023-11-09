import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllOrderByUser} from "../redux/order/action.js";
import Section from "../components/Layout/Section.jsx";

const Orders = () => {
    const {user, idUser} = useSelector((store) => store.AuthUserReducer);
    const {orders} = useSelector((store) => store.OrderReducer);
    const dispatch = useDispatch();

    const formatTime = (date) => {
        const formatter = new Intl.DateTimeFormat('vn-VN', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
        });

        return formatter.format(Date.parse(date))
    }

    useEffect(() => {
        dispatch(getAllOrderByUser(idUser ? idUser : user._id));
    },[]);

    return (
        <>
            <Section>
                <h1 className="heading">placed orders</h1>

                <div className="flex flex-wrap gap-6 items-start">
                    {orders.length ? orders.map((item, i) => (
                        <div key={i} className="box p-[1rem_2rem] flex-[1_1_40rem] border-normal bg-white shadow-normal rounded-lg">
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">placed on : <span className="text-main">{formatTime(item.placed_on)}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">name : <span className="text-main">{item.name}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">email : <span className="text-main">{item.email}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">address : <span className="text-main">{item.address}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">payment method : <span className="text-main">{item.method}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">your orders : <span className="text-main">{item.total_products}</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color">total price : <span className="text-main">${item.total_price}/-</span></p>
                            <p className="mx-0 my-2 leading-[1.8] text-light-color"> payment status : <span className={`text-main ${item.payment_status === "pending" ? "text-red" : "text-orange"}`}>{item.payment_status}</span> </p>
                        </div>
                    )) : <p className="empty">no orders placed yet!</p>}
                </div>
            </Section>
        </>
    );
}

export default Orders