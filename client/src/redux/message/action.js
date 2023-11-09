import axios from "axios";
import {CREATE_MESSAGE, DELETE_MESSAGE, MESSAGES, UPDATE_MESSAGE} from "./type.js";

const mainUrl = `http://localhost:5000/message`;
const tokenAdmin = localStorage.getItem("admintoken");
const tokenUser = localStorage.getItem("usertoken");
const configAdmin = {headers: {admintoken: tokenAdmin}};
const configUser = {headers: {usertoken: tokenUser}};

export const getAllMessage = () => async (dispatch) => {
    await axios.get(`${mainUrl}/`).then(res => {
        dispatch({type: MESSAGES, payload: res.data});
    }).catch(err => console.log(err));
}

export const getAllMessageByUser = (userId) => async (dispatch) => {
    await axios.get(`${mainUrl}/${userId}`).then(res => {
        dispatch({type: MESSAGES, payload: res.data});
    }).catch(err => console.log(err));
}

export const createMessage = (userId, data) => async (dispatch) => {
    await axios.post(`${mainUrl}/create/${userId}`, data).then(res => {
        dispatch({type: CREATE_MESSAGE, payload: res.data});
    }).catch(err => console.log(err));
}

export const updateMessage = (id, data) => async (dispatch) => {
    await axios.put(`${mainUrl}/update/${id}`, data).then(res => {
        dispatch({type: UPDATE_MESSAGE, payload: res.data});
    }).catch(err => console.log(err));

    dispatch(getAllMessage())
}

export const deleteMessage = (id) => async (dispatch) => {
    await axios.delete(`${mainUrl}/delete/${id}`).then(res => {
        dispatch({type: DELETE_MESSAGE, payload: res.data});
    }).catch(err => console.log(err));

    dispatch(getAllMessage())
}