import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProduct} from "../../redux/product/action.js";
import {getAllOrders} from "../../redux/order/action.js";
import {getAllMessage} from "../../redux/message/action.js";
import {getAllUser} from "../../redux/user/action.js";
import Section from "../../components/Layout/Section.jsx";

const Dashboard = () => {
    const {products} = useSelector((store) => store.ProductReducer);
    const {orders, order} = useSelector((store) => store.OrderReducer);
    const {message} = useSelector((store) => store.MessageReducer);
    const {users} = useSelector((store) => store.AuthUserReducer);
    const dispatch = useDispatch();

    const getTotalPending = () => {
        return orders.reduce((p, elem) => p + (elem.payment_status === "pending"), 0);
    }

    const getTotalCompleted = () => {
        return orders.reduce((p, elem) => p + (elem.payment_status === "completed"), 0);
    }

    useEffect(() => {
        dispatch(getAllProduct());
        dispatch(getAllOrders());
        dispatch(getAllMessage());
        dispatch(getAllUser());
    }, []);

    const dataDashboard = [
        {h3: "welcome!", p: "Admin", a: "see orders", href: "/admin/update-profile"},
        {h3: order, p: "orders placed", a: "see orders", href: "/admin/place-orders"},
        {h3: products.length, p: "products added", a: "see products", href: "/admin/products"},
        {h3: users.length, p: "normal users", a: "see users", href: "/admin/users-accounts"},
        {h3: "count admin", p: "admin users", a: "see admins", href: "/admin/admin-accounts"},
        {h3: message, p: "new messages", a: "see messages", href: "/admin/messages"},
        {h3: getTotalPending(), p: "total pendings", a: "see orders", href: "/admin/placed-orders"},
        {h3: getTotalCompleted(), p: "completed orders", a: "see orders", href: "/admin/placed-orders"},
    ];

    return (
        <Section>
            <h1 className="heading">dashboard</h1>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(27rem,1fr))] gap-6 justify-center items-start">
                {dataDashboard.map((item, i) => (
                    <div className="p-8 text-center border-normal shadow-normal rounded-lg" key={i}>
                        <h3>{item.h3}</h3>
                        <p className="rounded-lg p-[1.3rem] bg-light-bg text-light-color m-[1rem_0]">{item.p}</p>
                        <a href={item.href} className="btn">{item.a}</a>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Dashboard