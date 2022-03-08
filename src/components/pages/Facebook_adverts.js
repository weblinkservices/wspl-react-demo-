import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Facebook_adverts = () => {
    return (
        <Fragment>
            <MetaData title={'Facebook Adverts Service Provider in Pune, Facebook Adverts Service Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home </Link></li>
                                    <li><Link href="services.html">Services</Link></li>
                                    <li><Link href="social-media-optimization.html">Social Media Optimization</Link></li>
                                    <li><Link href="facebook-adverts.html"><u>Facebook Adverts</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/facebook-adverts.jpg" alt="facebook-adverts" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Facebook Adverts</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Facebook Adverts Service Provider in Pune. We are best company for Facebook Adverts services in Pune, MH India.<p className="para">
                                    <h3>Facebook adverts are an addition to Facebook promotion which denotes the advertisement run in this social media. The adverts appearing on the left side of the page are an effective way of drawing the attention of the key demographics. Targeting digital marketing and fan page likes serves both purposes successfully.</h3>
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

export default Facebook_adverts
