import Head from "./Head.jsx";
import {Link} from "react-router-dom";
//
export default function Home() {
    return (
        <>
            <Head/>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>GET CHEAP STEAM GAMES</h6>
                                <h2>Pre-Installed for PC!</h2>
                                <p>ZONE allows you to download your favorite games pre-installed on steam at a reasonable price.</p>
                                <div className="search-input">
                                    <form id="search" action="/">
                                        <input type="text" placeholder="Search a title" id='searchText'
                                               className="searchKeyword"/>
                                        <button className="btn btn-outline-success" type="submit" role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                            <Link to="/product"><img src="public/assets/images/banner-image.jpg" alt=""/></Link>
                                <span className="price">$22</span>
                                <span className="offer">-40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <Link to="/">
                                <div className="item">
                                    <div className="image">
                                        <img src="public/assets/images/featured-01.png" alt="" style={{maxWidth: "44px"}}/>
                                    </div>
                                    <h4>Low Storage Required</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Link to="/">
                                <div className="item">
                                    <div className="image">
                                        <img src="public/assets/images/featured-02.png" alt="" style={{maxWidth: "44px"}}/>
                                    </div>
                                    <h4>User Friendly</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Link to="/">
                                <div className="item">
                                    <div className="image">
                                        <img src="public/assets/images/featured-03.png" alt="" style={{maxWidth: "44px"}}/>
                                    </div>
                                    <h4>Quick Response</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Link to="/">
                                <div className="item">
                                    <div className="image">
                                        <img src="public/assets/images/featured-04.png" alt="" style={{maxWidth: "44px"}}/>
                                    </div>
                                    <h4>Nice Layout</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}