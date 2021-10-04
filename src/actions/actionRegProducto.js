import { types, typesProducto } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,getDocs, query,where,doc } from "@firebase/firestore";

//Eliminar
export const deleteProducto = (nombre) =>{
    return async(dispatch) => {

        const proCollection = collection(db,"productos");
        const q = query(proCollection,where("nombre","==",nombre))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"productos",docu.id));
        })
        dispatch(deleteSincrono(nombre));
    }
}

export const deleteSincrono = (nombre) => {
    return{
        type: typesProducto.delete,
        payload: nombre
    }
}

export const registerProducto = (nom,precio,detPre,color,detProducto,img) => {
   return( dispatch) => {
       const newProducto = {
           nom,
           precio,
           detPre,
           color,
           detProducto,
           img
       }
       addDoc(collection(db,"productos"),newProducto)
       .then(resp => {
           dispatch(registerProductoSincrono(newProducto))
       })
       .catch(error => {
           console.log(error);
       })
   }
}

export const registerProductoSincrono = (producto) => {
    return{
        type: typesProducto.register,
        payload: producto
    }

}

//Lectura

export const listProducto = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const producto = [];
        querySnapshot.forEach((doc) => {
            producto.push({
                ...doc.data()
            })
        });
        dispatch(list(producto));
    }
}

export const list = (productos) => {
    return {
        type: typesProducto.list,
        payload: productos
    }
}

