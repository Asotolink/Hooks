import './hooks.css';
import React, { useState, useEffect } from 'react';

function Hooks(props) {

    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);

    const handleClick = () => {
        setCount(contador + 1);
    }

    const fetchApi = () => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProductos(data.products);

            })
    }

    useEffect(() => {
        fetchApi();
    }, [contador]);

    if (contador < productos.length) {


        return (<div>

            <p><b>Id: </b>{productos[contador]?.id} </p>

            <p><b>Titulo: </b>{productos[contador]?.title} </p>

            <p><b>Descripción: </b>{productos[contador]?.description} </p>

            <p><b>Precio: </b>{productos[contador]?.price} </p>

            <img className='imgBody' src={productos[contador]?.images[0]}></img>
            <br></br>
            <button onClick={handleClick}>
                Cambiar Producto
            </button>
        </div>)

    } else {
        return (
            <div><b>NO HAY MÁS PRODUCTOS</b></div>)
    }
}
export default Hooks;