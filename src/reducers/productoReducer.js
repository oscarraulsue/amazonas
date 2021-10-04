import { typesProducto } from "../types/types";

const initialState = {
    producto: []
}

export const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.register:
            return {
                producto: [action.payload]
            }
        case typesProducto.list:
            return {
                producto: [...action.payload]
            }

        case typesProducto.delete:
            return {
                producto: state.producto.filter(est => est.correo !== action.payload)
            }

        default:
            return state;
    }

}