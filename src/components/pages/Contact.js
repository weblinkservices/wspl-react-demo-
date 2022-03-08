import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Contact = () => {
    return (
        <div onload="createCaptcha()">
            <MetaData title={'Contact'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="shad">Contact </h4>
                                {/* <Link to="/"><u style={{ color: 'red' }}><h3 style={{ color: "white", textShadow: "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em darkblue " }}>Web<strong style={{ color: "#D2042D" }}>Link</strong></h3></u></Link> */}
                                <Link to="/"><div className="fss"><u style={{ color: 'white'}}>Welcome to <strong  style={{ color: "white", textShadow: "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em darkblue " }}>WL<strong style={{ color: "#D2042D" }}>SPL</strong></strong></u></div></Link>
                                <Link to="/"><img src="assets/img/logo.png" height="48px" /></Link>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Contact Section ======= --> */}
                    <section id="contact" className="contact mt--25">
                        <div className="container">
                            {/* <img src="assets/img/21.jpg" alt="Contact US" className="rounded mx-auto d-block img-fluid conImg" /> */}
                            
                                <u className="text-danger"><h3 className="text-black">Contact<strong className="logo-color"> Us</strong></h3></u>
                        
                            <div className="row justify-content-center" data-aos="fade-up">
                                <div className="info-wrap">
                                    <div className="row">
                                        <div className="col-lg-3 info">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+91 8421060192<br /> </p>
                                        </div>
                                        <div className="col-lg-3 info mt-3 mt-lg-0">
                                            <i className="icofont-google-map"></i>
                                            <h4>Find Us:</h4>
                                            <p className="para-content">
                                                2nd and 3rd Floor,<br /> Meera Building,
                                                Durga<br /> Mata Colony, Behind <br />Shivar
                                                Garden Restaurant,<br /> Pimple Saudagar,
                                                Pune, Maharashtra 411027, India</p>
                                        </div>
                                        <div className="col-lg-3 info mt-3 mt-lg-0">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@weblinkservices.net<br />sales@weblinkservices.net</p>
                                        </div>
                                        <div className="col-lg-3 info mt-3 mt-lg-0">
                                            <i className="ri-time-fill fs-22"  ></i>
                                            <h4>Office Time:</h4>
                                            <p>Mon – Sat :<br /> 9:30AM – 6:30PM <br />Sun : Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog">
                
                        <u className="text-danger"><h3 className="text-black">Contact<strong className="logo-color"> Form</strong></h3></u>
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form">
                                            <form name="myform" onsubmit="validateCaptcha()" >
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input name="Name" type="text" className="form-control" id="Name" placeholder="Your Name" />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="email" name="Email" id="Email" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group">
                                                        <input type="number" name="Mobile" id="Mobile" className="form-control" placeholder="Your Mobile No" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group" >
                                                        <textarea name="Address" id="Address" className="form-control" placeholder="Your Comment"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 form-group">
                                                        <div className="bg-white text-center" id="captcha"></div>

                                                    </div>
                                                    <div className="col-md-4 form-group">
                                                        <input type="text" id="cpatchaTextBox" className="form-control" placeholder="Security Code" />
                                                    </div>
                                                    <div className="col-md-4 form-group">
                                                        <button type="submit" className="btn btn-danger" >Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </section>
                            <u className="text-danger"><h3 className="text-black">Our<strong className="logo-color"> Location</strong></h3></u>
                            <div className="map-section">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30252.1901569107!2d73.786592!3d18.595497000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90ea49a921f%3A0x3660fff14cfc2cd9!2sWeb%20Link%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1621248132725!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </div>
    )
}

export default Contact
