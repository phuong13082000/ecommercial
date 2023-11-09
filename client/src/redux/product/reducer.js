import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    PRODUCTS,
    SHOW_PRODUCT,
    UPDATE_PRODUCT
} from "./type.js";

const initValue = {
    products: [],
    oneProduct: [],
    msg: "",
}

export const AllProductReducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case PRODUCTS:
            return { ...state, products: payload.products }
        case SHOW_PRODUCT:
            return { ...state, oneProduct: payload.product }
        case CREATE_PRODUCT:
            return { ...state, msg: payload.msg }
        case UPDATE_PRODUCT:
            return { ...state, msg: payload.msg }
        case DELETE_PRODUCT:
            return { ...state, msg: payload.msg }
        default:
            return state;
    }
}
