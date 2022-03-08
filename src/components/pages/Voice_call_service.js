import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Voice_call_service = () => {
    return (
        <Fragment>
            <MetaData title={'Voice Call Service Provider'} />
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
                                    <li><Link to="voice-call-service.html"><u>Voice Call Service</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/voice-call-service.jpg" alt="voice-call-service" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Voice Call Service</strong> </h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd Provides Voice Call Service Provider in Pune. We are best company for Voice Call services in Pune, MH India.<p className="para">
                                    <h3>Voice message has greater emotions compared to text, hence a more personal way of communicating. Extremely helpful for marketers who want to promote their products & services.</h3>
                                </p></p>
                            </div>
                        </div>
                    </section>
                   <Features/>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Voice_call_service
