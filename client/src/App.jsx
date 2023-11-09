import './App.css'
import {Routes, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Orders from "./pages/Orders.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Search from "./pages/Search.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import UpdateUser from "./pages/UpdateUser.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Category from "./pages/Category.jsx";
import QuickView from "./components/Product/QuickView.jsx";
import Checkout from "./pages/Checkout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Products from "./components/Product/Products.jsx";
import UpdateProduct from "./pages/admin/UpdateProduct.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import HeaderAdmin from "./components/Layout/HeaderAdmin.jsx";
import PlacedOrders from "./pages/admin/PlacedOrders.jsx";
import UserAccounts from "./pages/admin/UserAccounts.jsx";
import Messages from "./pages/admin/Messages.jsx";
import AdminAccount from './pages/admin/AdminAccount.jsx';

export default function App() {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                    <Homepage/>
                    <Footer/>
                </>
            }/>

            <Route path="/about" element={
                <>
                    <Header/>
                    <About/>
                    <Footer/>
                </>
            }/>

            <Route path="/orders" element={
                <>
                    <Header/>
                    <Orders/>
                    <Footer/>
                </>
            }/>

            <Route path="/shop" element={
                <>
                    <Header/>
                    <Shop/>
                    <Footer/>
                </>
            }/>

            <Route path="/contact" element={
                <>
                    <Header/>
                    <Contact/>
                    <Footer/>
                </>
            }/>

            <Route path="/search-page" element={
                <>
                    <Header/>
                    <Search/>
                    <Footer/>
                </>
            }/>

            <Route path="/wishlist" element={
                <>
                    <Header/>
                    <Wishlist/>
                    <Footer/>
                </>
            }/>

            <Route path="/cart" element={
                <>
                    <Header/>
                    <Cart/>
                    <Footer/>
                </>
            }/>

            <Route path="/update-user" element={
                <>
                    <Header/>
                    <UpdateUser/>
                    <Footer/>
                </>
            }/>

            <Route path="/user-register" element={
                <>
                    <Header/>
                    <Register/>
                    <Footer/>
                </>
            }/>

            <Route path="/user-login" element={
                <>
                    <Header/>
                    <Login/>
                    <Footer/>
                </>
            }/>

            <Route path="/category/:category" element={
                <>
                    <Header/>
                    <Category/>
                    <Footer/>
                </>
            }/>

            <Route path="/quick-view/:id" element={
                <>
                    <Header/>
                    <QuickView/>
                    <Footer/>
                </>
            }/>

            <Route path="/checkout" element={
                <>
                    <Header/>
                    <Checkout/>
                    <Footer/>
                </>
            }/>

            <Route path="/admin" element={
                <>
                    <HeaderAdmin/>
                    <Dashboard/>
                </>
            }/>

            <Route path="/admin/products" element={
                <>
                    <HeaderAdmin/>
                    <Products/>
                </>
            }/>

            <Route path="/admin/update-product/:id" element={
                <>
                    <HeaderAdmin/>
                    <UpdateProduct/>
                </>
            }/>

            <Route path="/admin/placed-orders" element={
                <>
                    <HeaderAdmin/>
                    <PlacedOrders/>
                </>
            }/>

            <Route path="/admin/users-accounts" element={
                <>
                    <HeaderAdmin/>
                    <UserAccounts/>
                </>
            }/>

            <Route path="/admin/admin-accounts" element={
                <>
                    <HeaderAdmin/>
                    <AdminAccount/>
                </>
            }/>

            <Route path="/admin/messages" element={
                <>
                    <HeaderAdmin/>
                    <Messages/>
                </>
            }/>

        </Routes>
    )
}
