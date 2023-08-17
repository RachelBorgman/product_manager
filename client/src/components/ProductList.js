import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const {productList, setProductList} = props;
    // const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setProductList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteAnExistingProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                const newList = productList.filter((product, index) => product._id !== productId)
                setProductList(newList)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>
                All Products
            </h1>
            {
                productList.map((product, index)=>{
                return(
                    <div key={index}>
                        <h3>{product.title}</h3>
                        <p> $ {product.price}</p>
                        <Link to={`/product/${product._id}`}>
                            {product.title}'s Page!
                        </Link>
                        <div></div>
                        <Link to={`/product/edit/${product._id}`}>
                            Edit {product.title}'s Page
                        </Link>
                        <div></div>
                        {/* <button onClick={() => navigate(`/product/edit/${product.id}`)}>Edit</button> */}
                        <button onClick={(e) => {deleteAnExistingProduct(product._id)}}>Delete {product.title}</button>
                    </div>
                )})
            }
        </div>
    )
}
export default ProductList;

