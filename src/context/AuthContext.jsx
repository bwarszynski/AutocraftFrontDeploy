import { createContext, useContext, useEffect, useReducer} from "react";

// inicjalizacja stanu początkowego, pobieranie informacji z LocalStorage przeglądarki
const initial_state = {
    user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || "",
    token: localStorage.getItem("token") || "",
};

export const AuthContext = createContext(initial_state);

// reducer w zależności od typu akcji zmienia stan,
// przy rozpoczęciu logowania ustawia stan na null,
// przy zalogowaniu ustawia stan na dane użytkownika, token i rolę,
// przy wylogowaniu ustawia stan na null
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                role: "",
                token: "",
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };
        case "LOGOUT":
            return {
                user: null,
                role: "",
                token: "",
            };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

useEffect(() => {
  localStorage.setItem("user", JSON.stringify(state.user));
  localStorage.setItem("token", state.token);
  localStorage.setItem("role", state.role);
}, [state]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                role: state.role,
                token: state.token,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};