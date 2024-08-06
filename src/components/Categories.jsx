import Head from "./Head.jsx";
import {Link} from "react-router-dom";
//
export default function Categories() {
    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>CATEGORIES</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} Categories</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <Link to="/adventure" data-filter=".adv">Adventure</Link>
                        </li>
                        <li>
                            <Link to="/strategy" data-filter=".str">Strategy</Link>
                        </li>
                        <li>
                            <Link to="/action" data-filter=".act">Action</Link>
                        </li>
                    </ul>
                    <div className="row trending-box">
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-01.jpg" alt=""/></Link>
                                    <span className="price"><em>$28</em>$18</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>WarFrame VeilBreaker</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-02.jpg" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Tower Of Fantasy</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-03.jpg" alt=""/></Link>
                                    <span className="price"><em>$45</em>$30</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Super People</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-04.jpg" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Dragon Creed</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/infamous.png" alt=""/></Link>
                                    <span className="price"><em>$38</em>$26</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Infamous</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/uncharted.png" alt=""/></Link>
                                    <span className="price"><em>$30</em>$20</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Uncharted 2 Among Thieves</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/prototype.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Prototype</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/watchdogs.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Watch Dogs</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/take.jpg" alt=""/></Link>
                                    <span className="price"><em>$28</em>$20</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Take Cover</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/triangleStrat.png" alt=""/></Link>
                                    <span className="price"><em>$26</em>$18</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Triangle Strategy</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/endZone.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$24</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>End Zone</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/gloomHaven.png" alt=""/></Link>
                                    <span className="price"><em>$45</em>$30</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Gloom Haven</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><Link className="is_active" to="/shop">1</Link></li>
                                <li><Link to="/shop01">2</Link></li>
                            </ul>
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