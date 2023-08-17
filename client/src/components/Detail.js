import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Detail = (props) => {

    const {id} = useParams(); 
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {console.log(err)})
    }

    return (
        <div>
            <h1>Title: {oneProduct.title}</h1>
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}
export default Detail;

