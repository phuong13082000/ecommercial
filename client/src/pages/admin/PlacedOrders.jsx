import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteOrder, getAllOrders, updateOrder} from "../../redux/order/action.js";
import Section from "../../components/Layout/Section.jsx";

const PlacedOrders = () => {
    const [status, setStatus] = useState("pending");
    const {orders} = useSelector((store) => store.OrderReducer);
    const dispatch = useDispatch();

    const formatTime = (date) => {
        const formatter = new Intl.DateTimeFormat('vn-VN', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
        });

        return formatter.format(Date.parse(date))
    }

    useEffect(() => {
        dispatch(getAllOrders());
    }, []);

    return (
        <Section>
            <h1 className="heading">placed orders</h1>

            <div className="box-container grid grid-cols-[repeat(auto-fit,33rem)] gap-6 items-start justify-center">
                {orders.length ? orders.map((item, i) => (
                    <div className="box p-8 pt-4 rounded-lg border-normal shadow-normal bg-white" key={i}>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> placed on : <span className="text-main">{formatTime(item.placed_on)}</span></p>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> name : <span className="text-main">{item.name}</span></p>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> address : <span className="text-main">{item.address}</span></p>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> total products : <span className="text-main">{item.total_products}</span></p>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> total price : <span className="text-main">${item.total_price}/-</span></p>
                        <p className="leading-[1.5] text-light-color m-[1rem_0]"> payment method : <span className="text-main">{item.method}</span></p>

                        <select
                            className="mb-2 p-4 border-normal"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option selected disabled>{item.payment_status}</option>
                            <option value="pending">pending</option>
                            <option value="completed">completed</option>
                        </select>

                        <div className="flex-btn">
                            <a href="#" className="option-btn" onClick={() => dispatch(updateOrder(item._id, {"payment_status": status}))}>Update</a>
                            <a href="#" className="delete-btn" onClick={() => dispatch(deleteOrder(item._id))}>Delete</a>
                        </div>
                    </div>
                )) : <p className="empty">no orders placed yet!</p> }
            </div>
        </Section>
    );
}

export default PlacedOrders