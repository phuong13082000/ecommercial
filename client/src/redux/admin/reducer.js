import {
    LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_ERROR, LOGOUT_SUCCESS,
    REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
    ADMINS
} from "./type.js";

const initialStateAdmin = {
    token: "",
    isAuth: false, isAuthLoading: false, isAuthError: false,
    admin: JSON.parse(localStorage.getItem("admin")) || {},
    idAdmin: JSON.parse(localStorage.getItem("idAdmin")) || "",
    emailAdmin: JSON.parse(localStorage.getItem("emailAdmin")) || "",
    admins: [],
}

export const AllAdminReducer = (state = initialStateAdmin, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, isAuthLoading: true }


        case LOGIN_SUCCESS: {
            localStorage.setItem('admintoken', payload.token);
            localStorage.setItem('admin', JSON.stringify(payload.admin));

            return {
                ...state,
                isAuthLoading: false, isAuthError: false, isAuth: true,
                token: payload.token,
                admin: payload.admin
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
            localStorage.setItem('admintoken', payload.token);
            localStorage.setItem('idAdmin', JSON.stringify(payload._id));
            localStorage.setItem('emailAdmin', JSON.stringify(payload.email));

            return {
                ...state,
                isAuthLoading: false, isAuthError: false, isAuth: true,
                token: payload.token,
                idAdmin: payload._id,
                emailAdmin: payload.email,
            }
        }

        case LOGOUT_SUCCESS: {
            localStorage.clear();

            return {
                ...state,
                isAuth: false, isAuthLoading: false, isAuthError: false,
                token: "",
                admin: {}
            }
        }

        case ADMINS:
            return {
                ...state,
                admins: payload.admins,
                admin: payload.admin,
            }

        default:
            return state;
    }
}
