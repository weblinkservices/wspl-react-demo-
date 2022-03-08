import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Google_plus = () => {
    return (
        <Fragment>
            <MetaData title={'Google Plus Service Provider in Pune, Google Plus Service Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Google+</h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home </Link></li>
                                    <li><Link href="services.html">Services</Link></li>
                                    <li><Link href="social-media-optimization.html">Social Media Optimization</Link></li>
                                    <li><Link href="social-media-optimization.html"><u>Google+</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/google-plus.jpg" alt="google-plus" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Google+</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Google Plus Service Provider in Pune. We are best company for Google Plus services in Pune, MH India.<p className="para">
                                    <h3>A social micro-blogging website to work in, Twitter is a valuable avenue for increasing brand attentiveness and spreading the latest vital information. Taking the favorable aspects of this medium, we work exhaustively here to give you the best of services.</h3>
                                </p>,</p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Google_plus
