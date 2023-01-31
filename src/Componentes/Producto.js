import './hooks.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Producto(props) {

    const [productos, setProductos] = useState();


    const { id } = useParams();
    const fetchApi = () => {
        fetch("https://dummyjson.com/products/" + id)
            .then(res => res.json())
            .then(data => {
                setProductos(data);

            })
    }

    useEffect(() => {
        fetchApi();
    });

if(productos){
console.log(productos.images[0]);
    return (<div className='producto'>

        <h1>PRODUCTO</h1>
        <p><b>Id: </b>{productos.id} </p>

        <p><b>Titulo: </b>{productos.title} </p>

        <p><b>Descripción: </b>{productos.description} </p>

        <p><b>Precio: </b>{productos.price} </p>

        <img className='imgBody' src={productos.images[0]}></img>
        <br></br>

    </div>)
}else{
    return(
        <div></div>
    )

    
}


}
export default Producto;