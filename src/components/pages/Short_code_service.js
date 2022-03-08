import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Short_code_service = () => {
    return (
        <Fragment>
            <MetaData title={'Short Code Service Provider '} />
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
                                    <li><Link to="short-code-service.html"><u>Short Code Service</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/short-code-service.jpg" alt="short-code-service" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Short Code Service </strong> </h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd Provides Short Code Service Provider in Pune. We are best company for Short Code services in Pune, MH India.<p className="para">
                                    <h3>An SMS short-code is a 5 digit number, provided by mobile network operators, on which data (SMS) can be sent by subscribers of the mobile operators. All incoming SMS, to the short-code, can be made available with full details to the customer.
                                    </h3>
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

export default Short_code_service
