import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Linux_web_hosting = () => {
    return (
        <Fragment>
            <MetaData title={'Linux Web Hosting Company in Pune, Buy Linux Web Hosting'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="domain-and-hosting.html">Domain &#38; Hosting </Link></li>
                                    <li><Link to="linux-web-hosting.html"><u>Linux Web Hosting</u> </Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/linux-web-hosting.jpg" alt="linux-web-hosting" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Linux Web Hosting</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Linux Web Hosting Services in Pune on cheapest cost Pune, MH India.<p className="para">
                                    <h3>Cheapest Linux web hosting in Pune</h3>
                                    <p className="para">We specialize in affordable solutions for small business and ecommerce websites. You deserve reliable domain hosting and we provide it - with over 6 years in the web hosting provider industry. Confidence in your online business is a must and we provide robust servers - some of the fastest in the industry - all packed with features to ensure your business runs smoothly and efficiently.</p>
                                    <h3>Get great linux web hosting at an affordable price!</h3>
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

export default Linux_web_hosting
