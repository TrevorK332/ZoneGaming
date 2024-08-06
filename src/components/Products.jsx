import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Head from "./Head.jsx";
//

export default function Products() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        //specifying API
        const response = await axios.get("https://api.apensoftwares.co.ke/api/products/")
        setProducts(response.data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Head/>
            <div className="row">
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>GAMES</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link>  {">"}  Games</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Trending</h6>
                                <h2>Trending Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/shop">View All</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {products ? products.map((product) => {
                    return (
                        <>
                            <div className="section trending">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="cards">
                                                <div className="thumb">
                                                    <a href={"products/" + product.id}><img src={product.image} alt=""/></a>
                                                    <span className="price"><em>$28.00</em>${product.amount}</span>
                                                </div>
                                                <div className="down-content">
                                                    <span className="category">Action</span>
                                                    <h4>{product.product}</h4>
                                                    <a href={"products/" + product.id}><i
                                                        className="fa fa-shopping-bag"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }) : null}
                </div>
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    );
}