import { CREATE_ORDERS, DELETE_ORDERS, ORDERS, UPDATE_ORDERS } from "./type.js";

const initValue = {
    orders: [],
    order: 0,
    msg: "",
}

export const AllOrderReducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case ORDERS: {
            return {
                ...state,
                orders: payload.orders,
                order: payload.totalOrder,
            };
        }

        case CREATE_ORDERS:
            return { ...state, msg: payload.msg }
        case UPDATE_ORDERS:
            return { ...state, msg: payload.msg }
        case DELETE_ORDERS:
            return { ...state, msg: payload.msg }
        default:
            return state;
    }
}
