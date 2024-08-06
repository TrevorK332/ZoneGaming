import Head from "./Head.jsx";
import {Link} from "react-router-dom";
//
export default function Contact() {
    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>CONTACT US</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-text">
                                <div className="section-heading">
                                    <h6>Contact Us</h6>
                                    <h2>Say Hello!</h2>
                                </div>
                                <p>ZONE Gaming is a gaming site where you can search for and purchase games at a
                                    reasonable price. Feel free to purchase any game. Thank you.</p>
                                <ul>
                                    <li><span>Address</span> Raghvani House, Tom Mboya St, City Centre, Kenya</li>
                                    <li><span>Phone</span> +254 7** ******</li>
                                    <li><span>Email</span> zone@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div id="map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.814371315173!2d36.82329237376695!3d-1.2853636356226008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRaghvani%20House%2C%20Tom%20Mboya%20St%2C%20City%20Centre!5e0!3m2!1sen!2ske!4v1722335539453!5m2!1sen!2ske"
                                                width="100%" height="325px" frameBorder="0"
                                                style={{border: "0", borderRadius: "23px"}} allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <form id="contact-form" action="" method="post">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="name" name="name" id="name"
                                                               placeholder="Your Name..." autoComplete="on"
                                                               required=""/>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="surname" name="surname" id="surname"
                                                               placeholder="Your Surname..." autoComplete="on"
                                                               required=""/>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="text" name="email" id="email"
                                                               pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..."
                                                               required=""/>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="subject" name="subject" id="subject"
                                                               placeholder="Subject..." autoComplete="on"/>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <textarea name="message" id="message"
                                                                  placeholder="Your Message"></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit"
                                                                className="orange-button">Send Message Now
                                                        </button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE Gaming Site. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
