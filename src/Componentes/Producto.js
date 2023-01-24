import React from 'react';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.datos.id,
            title: props.datos.title,
            description: props.datos.description,
            images: props.datos.images


        };
    }
    render() {
        return (
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <img src={this.state.images[0]}></img>
            </div>
        );
    }
} export default Producto;