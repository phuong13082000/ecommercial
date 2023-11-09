import {
    LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_ERROR, LOGOUT_SUCCESS,
    REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
    USERS
} from "./type.js";

const initialStateUser = {
    token: "",
    isAuth: false, isAuthLoading: false, isAuthError: false,
    user: JSON.parse(localStorage.getItem("user")) || {},
    idUser: JSON.parse(localStorage.getItem("idUser")) || "",
    emailUser: JSON.parse(localStorage.getItem("emailUser")) || "",
    nameUser: JSON.parse(localStorage.getItem("nameUser")) || "",
    users: [],
    totalUser: 0,
};

export const AllUserReducer = (state = initialStateUser, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, isAuthLoading: true }


        case LOGIN_SUCCESS: {
            localStorage.setItem('usertoken', payload.token);
            localStorage.setItem('user', JSON.stringify(payload.user));

            return {
                ...state,
                isAuthLoading: false,
                isAuthError: false,
                isAuth: true,
                token: payload.token,
                user: payload.user
            }
        }

        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case LOGOUT_ERROR: {
            return {
                ...state,
                isAuthLoading: false,
                isAuthError: true,
                isAuth: false
            }
        }

        case REGISTER_SUCCESS: {
            localStorage.setItem('usertoken', payload.token);
            localStorage.setItem('idUser', JSON.stringify(payload._id));
            localStorage.setItem('emailUser', JSON.stringify(payload.email));
            localStorage.setItem('nameUser', JSON.stringify(payload.name));

            return {
                ...state,
                isAuthLoading: false,
                isAuthError: false,
                isAuth: true,
                token: payload.token,
                idUser: payload._id,
                emailUser: payload.email,
                nameUser: payload.name
            }
        }

        case LOGOUT_SUCCESS: {
            localStorage.clear();

            return {
                ...state,
                isAuth: false,
                token: "",
                isAuthLoading: false,
                isAuthError: false,
                user: {}
            }
        }

        case USERS:
            return {
                ...state,
                users: payload.users,
                totalUser: payload.totalUser,
                user: payload.user,
            }

        default:
            return state;
    }
}
