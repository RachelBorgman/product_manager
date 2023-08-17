import React, { useState } from 'react'
// import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);

    // const removeFromDom = productId => {
    //     setProductList(productList.filter(product => product._id != productId))
    // }
    
    return (
        <div>
            <Form productList={productList} setProductList={setProductList} />
            <hr/>
            <ProductList productList={productList} setProductList={setProductList}/>
        </div>
    )
}
export default Main;
