import {Link} from "react-router-dom";
import Head from "./Head.jsx";

export default function Navigation() {
    return (
        <>
            <Head/>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                    <Link to="/" className="nav-link active" aria-current="page"
                          style={{fontWeight: "bolder", fontSize: "30px", color : "white"}}>ZONE</Link>


                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/games" className="nav-link active" aria-current="page">Games</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link active"
                                              aria-current="page">Categories</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link active"
                                              aria-current="page">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active"
                                              aria-current="page">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/help" className="nav-link active" aria-current="page">Help</Link>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}