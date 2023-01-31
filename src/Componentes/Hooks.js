import './hooks.css';
import React, { useState, useEffect } from 'react';

function Hooks(props) {
    const [productos, setProductos] = useState([]);



    const fetchApi = () => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProductos(data.products);

            })
    }

    useEffect(() => {
        fetchApi();
    });


    return (<div>
        <h1 className='h1'>PRODUCTOS:</h1>
        {productos.map(value =>
            <a href={"./producto/"+ value.id}><div className='producto'>
                <h1>{value.title}</h1>
                <img className='imgBody' src={value.images[0]}></img>
            </div></a>)
        }

</div>)

}
export default Hooks;

