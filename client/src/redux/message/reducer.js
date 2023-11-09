import { CREATE_MESSAGE, DELETE_MESSAGE, MESSAGES, UPDATE_MESSAGE } from "./type.js";

const initValue = {
    messages: [],
    message: 0,
    msg: "",
}

export const AllMessageReducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case MESSAGES: {
            return {
                ...state,
                messages: payload.messages,
                message: payload.totalMessage,
            };
        }

        case CREATE_MESSAGE:
            return { ...state, msg: payload.msg }
        case UPDATE_MESSAGE:
            return { ...state, msg: payload.msg }
        case DELETE_MESSAGE:
            return { ...state, msg: payload.msg }
        default:
            return state;
    }
}
