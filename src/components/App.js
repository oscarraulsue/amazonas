import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listProducto } from '../actions/actionRegProducto';
import { ListarProducto } from './ListarProducto'
import Navbar from './Navbar'

const App = (history) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducto());
      }, [dispatch])
      
    return (
        <div>
        <Navbar />   
        <ListarProducto /> 
        </div>
    )
}

export default App
