import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/product')
        .then(res => this.setState({products: res.data}))
        .catch(err => console.log(err))
    }

    render(){
        const mappedProducts = this.state.products.map((product, i) => {
            <div key={i} >
                <img src={product.image} alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        })
        console.log(this.state.products);
        return (
            <div>
                {mappedProducts};
            </div>
        )
    }
}

export default Products;