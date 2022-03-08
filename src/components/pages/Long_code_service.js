import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Long_code_service = () => {
    return (
        <Fragment>
            <MetaData title={'Long Code Service Provider'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2> </h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home </Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="business-marketing.html">Business Marketing</Link></li>
                                    <li><Link to="long-code-service.html">Long Code Service</Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/long-code-service.jpg" alt="long-code-service" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Long Code Service  </strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd Provides Long Code Service Provider in Pune. We are best company for Long Code services in Pune, MH India.<p className="para">
                                    <h3>Enterprises are empowered with two-way messaging/SMS capabilities using the familiar 10 digits mobile number.</h3>
                                </p></p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Long_code_service
