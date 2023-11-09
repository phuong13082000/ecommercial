import {
    LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
    ADMINS
} from "./type.js";
import axios from "axios"

const mainUrl = `http://localhost:5000`;
const tokenAdmin = localStorage.getItem("admintoken");
const tokenUser = localStorage.getItem("usertoken");
const configAdmin = { headers: { admintoken: tokenAdmin } };
const configUser = { headers: { usertoken: tokenUser } };

export const loginAdmin = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    await axios.post(`${mainUrl}/admin/login-admin`, data).then(res => {
        res.data.msg === "login successfully" ? dispatch({ type: LOGIN_SUCCESS, payload: res.data }) : dispatch({ type: LOGIN_ERROR })
    }).catch(err => dispatch({ type: LOGIN_ERROR }));
}

export const registerAdmin = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    await axios.post(`${mainUrl}/admin/register-admin`, data).then(res => {
        res.data.msg === "signup successfully" ? dispatch({ type: REGISTER_SUCCESS, payload: res.data }) : dispatch({ type: REGISTER_ERROR })
    }).catch(err => dispatch({ type: REGISTER_ERROR }));
}

export const logoutAdmin = () => (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
}
