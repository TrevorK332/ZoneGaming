import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
// import "./Details.css"
import {Link} from "react-router-dom";

export default function Details() {

   const [product, setProduct] = useState([]);

   const {id} = useParams();
   const getSingleProduct = async() =>{
       const {data} = await axios.get(`https://api.apensoftwares.co.ke/api/products/${id}`);
       setProduct(data);
   }

    useEffect(() => {
        getSingleProduct();
    }, []);

   const deleteProduct = async(id) => {
       await axios.delete(`https://api.apensoftwares.co.ke/api/products/${id}`);
       Navigate("/products");
   };

    return (
        <>
            <h1 style={{fontFamily: "-moz-initial", fontWeight: "bolder"}}>Products</h1>
            <hr/>

            <div className="col col-md-4">
                <div className="cards">
                     <div className="card">
                          <div className="card-content">
                    <img src={product.image} className="img-fluid rounded-start" alt="Brushes" width={200}/>

                        <p className="card-text">Name: {product.product}</p>
                        <p className="card-text">Price: {product.amount}</p>
                        <p className="card-text">Description: {product.description}</p>
                        <p className="card-text">Quantity: {product.quantity}</p>

                        <Link className="btn btn-danger" onClick={()=> deleteProduct(product.id)} to="/products">Delete</Link>
                    </div>
                    </div>
                </div>
            </div>
            </>
            )
            }