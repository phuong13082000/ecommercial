import axios from "axios";
import { CREATE_PRODUCT, DELETE_PRODUCT, PRODUCTS, SHOW_PRODUCT, UPDATE_PRODUCT } from "./type.js";

const mainUrl = `http://localhost:5000/product`;
const tokenAdmin = localStorage.getItem("admintoken");
const tokenUser = localStorage.getItem("usertoken");
const configAdmin = { headers: { admintoken: tokenAdmin } };
const configUser = { headers: { usertoken: tokenUser } };

export const getAllProduct = (keyword = "", category = "") => async (dispatch) => {
    try {
        let url = `${mainUrl}?keyword=${keyword}`;

        if (category) {
            url += `&category=${category}`;
        }

        const { data } = await axios.get(url);

        dispatch({ type: PRODUCTS, payload: data });
    } catch (err) {
        console.log(err)
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    await axios.get(`${mainUrl}/${id}`).then(res => {
        dispatch({ type: SHOW_PRODUCT, payload: res.data });
    }).catch(err => console.log(err));
}

export const createProduct = (data) => async (dispatch) => {
    await axios.post(`${mainUrl}/create`, data).then(res => {
        dispatch({ type: CREATE_PRODUCT, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getAllProduct());
}

export const updateProduct = (id, data) => async (dispatch) => {
    await axios.put(`${mainUrl}/update/${id}`, data).then(res => {
        dispatch({ type: UPDATE_PRODUCT, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getAllProduct());
}

export const deleteProduct = (id) => async (dispatch) => {
    await axios.delete(`${mainUrl}/delete/${id}`).then(res => {
        dispatch({ type: DELETE_PRODUCT, payload: res.data });
    }).catch(err => console.log(err));

    dispatch(getAllProduct());
}
