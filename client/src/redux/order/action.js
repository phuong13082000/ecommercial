import axios from "axios";
import {CREATE_ORDERS, DELETE_ORDERS, ORDERS, UPDATE_ORDERS} from "./type.js";

const mainUrl = `http://localhost:5000/order`;
const tokenAdmin = localStorage.getItem("admintoken");
const tokenUser = localStorage.getItem("usertoken");
const configAdmin = {headers: {admintoken: tokenAdmin}};
const configUser = {headers: {usertoken: tokenUser}};

export const getAllOrders = () => async (dispatch) => {
    await axios.get(`${mainUrl}/`).then(res => {
        dispatch({type: ORDERS, payload: res.data});
    }).catch(err => console.log(err));
}

export const getAllOrderByUser = (id) => async (dispatch) => {
    await axios.get(`${mainUrl}/${id}`).then(res => {
        dispatch({type: ORDERS, payload: res.data});
    }).catch(err => console.log(err));
}

export const createOrder = (id, data) => async (dispatch) => {
    await axios.post(`${mainUrl}/create/${id}`, data).then(res => {
        dispatch({type: CREATE_ORDERS, payload: res.data});
    }).catch(err => console.log(err));

    dispatch(getAllOrderByUser(id));
}

export const updateOrder = (id, data) => async (dispatch) => {
    await axios.put(`${mainUrl}/update/${id}`, data).then(res => {
        dispatch({type: UPDATE_ORDERS, payload: res.data});
    }).catch(err => console.log(err));

    dispatch(getAllOrders());
}

export const deleteOrder = (id) => async (dispatch) => {
    await axios.delete(`${mainUrl}/delete/${id}`).then(res => {
        dispatch({type: DELETE_ORDERS, payload: res.data});
    }).catch(err => console.log(err));

    dispatch(getAllOrders());
}
