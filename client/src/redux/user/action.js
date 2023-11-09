import {
    LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
    USERS,
    CREATE_WISHLIST, DELETE_WISHLIST,
    CREATE_CART, DELETE_CART
} from "./type.js";
import axios from "axios"

const mainUrl = `http://localhost:5000`;
const tokenAdmin = localStorage.getItem("admintoken");
const tokenUser = localStorage.getItem("usertoken");
const configAdmin = { headers: { admintoken: tokenAdmin } };
const configUser = { headers: { usertoken: tokenUser } };

export const loginUser = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    await axios.post(`${mainUrl}/user/login`, data).then(res => {
        res.data.msg === "login successfully" ? dispatch({ type: LOGIN_SUCCESS, payload: res.data }) : dispatch({ type: LOGIN_ERROR })
    }).catch(err => dispatch({ type: LOGIN_ERROR }));
}

export const registerUser = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    await axios.post(`${mainUrl}/user/register`, data).then(res => {
        res.data.msg === "signup successfully" ? dispatch({ type: REGISTER_SUCCESS, payload: res.data }) : dispatch({ type: REGISTER_ERROR })
    }).catch(err => dispatch({ type: REGISTER_ERROR }));
}

export const logoutUser = () => (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
}

export const getUser = (idUser) => async (dispatch) => {
    await axios.get(`${mainUrl}/user/${idUser}`).then(res => {
        dispatch({ type: USERS, payload: res.data });
    }).catch(err => console.log(err));
}

export const getAllUser = () => async (dispatch) => {
    await axios.get(`${mainUrl}/user/get-all`).then(res => {
        dispatch({ type: USERS, payload: res.data });
    }).catch(err => console.log(err));
}

export const createWishlist = (idUser, data) => async (dispatch) => {
    await axios.post(`${mainUrl}/user/wishlist/create/` + idUser, data).then(res => {
        dispatch({ type: CREATE_WISHLIST, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}

export const deleteWishlist = (idUser, data) => async (dispatch) => {
    await axios.put(`${mainUrl}/user/wishlist/delete/` + idUser, data).then(res => {
        dispatch({ type: DELETE_WISHLIST, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}

export const deleteAllWishlist = (idUser) => async (dispatch) => {
    await axios.delete(`${mainUrl}/user/wishlist/delete-all/` + idUser).then(res => {
        dispatch({ type: DELETE_WISHLIST, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}

export const createCart = (idUser, data) => async (dispatch) => {
    await axios.post(`${mainUrl}/user/cart/create/` + idUser, data).then(res => {
        dispatch({ type: CREATE_CART, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}

export const deleteCart = (idUser, data) => async (dispatch) => {
    await axios.put(`${mainUrl}/user/cart/delete/` + idUser, data).then(res => {
        dispatch({ type: DELETE_CART, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}

export const deleteAllCart = (idUser) => async (dispatch) => {
    await axios.delete(`${mainUrl}/user/cart/delete-all/` + idUser).then(res => {
        dispatch({ type: DELETE_CART, payload: res.data })
    }).catch(err => console.log(err));

    dispatch(getUser(idUser));
}