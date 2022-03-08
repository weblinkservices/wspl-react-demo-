import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Ivr_service = () => {
    return (
        <Fragment>
            <MetaData title={'IVR Service Provider'} />
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
                                    <li><Link to="ivr-service.html"><u>IVR Service</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/ivr-service.jpg" alt="ivr-service" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>IVR Service </strong> </h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd Provides IVR Service Provider in Pune. We are best company for IVR services in Pune, MH India.<p className="para">
                                    <h3>Anyone who calls on your business number will first hear a personalized welcome message and post a welcome message it will play a list of your extension option.
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

export default Ivr_service
