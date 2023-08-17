import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const {productList, setProductList} = props
    const [title, setTitle] = useState("");
    // const [titleError, setTitleError] = useState("");
    // const handleTitle = (e) => {
    //     setTitle(e.target.value);
        // if(e.target.value.length < 1) {
        //     setTitleError("Title is required!");
        // } else if(e.target.value.length < 2) {
        //     setTitleError("Title must be 2 characters or longer");
        // } else {
        //     // an empty string is considered a "falsy" value
        //     setTitleError("");
        // }
    // }
    const [price, setPrice] = useState("");
    // const [lnError, setLnError] = useState("");
    // const handlePrice = (e) => {
    //     setPrice(e.target.value);
        // if(e.target.value.length < 1) {
        //     setFnError("Last Name is required!");
        // } else if(e.target.value.length < 2) {
        //     setFnError("Last Name must be 2 characters or longer!");
        // } else {
        //     an empty string is considered a "falsy" value
        // setLnError("");
        // }
    // }
    const [description, setDesc] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const handleDesc = (e) => {
    //     setDesc(e.target.value);
        // if(e.target.value.length < 1) {
        //     setEmailError("Email is required!");
        // } else if(e.target.value.length < 2) {
        //     setEmailError("Email must be 2 characters or longer!");
        // } else {
        //     // an empty string is considered a "falsy" value
        //     setEmailError("");
        // }
    // }
    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {title: title, price: price, description: description};
        console.log("New Product: ", newProduct)
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProductList([...productList, res.data])
                setTitle("");
                setPrice("");
                setDesc("");
            })
            .catch(err=>console.log(err))
        // axios.get("http://localhost:8000/api/products", newProduct)
        //     // .then(res=>setMessage(res.data.message))
        //     .catch(err=>console.log(err))
        
    };

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit= {createProduct}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label>Price $ </label>
                    <input type="number" name="price" value={price} onChange={ (e) => setPrice(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label>Description</label>
                    <input type="text" name='description' value={description} onChange={ (e) => setDesc(e.target.value)}/>
                </div>
                <br></br>
                    <input type="submit" value="Create Product" />
            </form>
        </div>
    )
};

export default Form;