import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Multi_language_website = () => {
    return (
        <Fragment>
            <MetaData title={'Multi Language Web Design Company'} />
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
                                    <li><Link to="Web-Services.html">Web Design</Link></li>
                                    <li><Link to="multi-language-website.html"><u>Multi-Language Website</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <center><img src="assets/img/multi-language-website.png" alt="multi-language-website" className="w-100" /></center>
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Multi-Language Website</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Multi-Language Website designing a website with content in more than one language Localization, Select the language switcher simple to find make visitors like their preferred language.
                                </p>
                                <p className="para"><h3>Maximize your online potential</h3>
                                    <p className="para">In today's connected world organizations need web sites that reach a global audience in their native language.
                                        One of the great advantages of the world wide web is that it reaches a greater audience then you would otherwise reach. But what happens if this market is in another country or your target audience speaks another language?
                                        Web Link Services Pvt. Ltd. has experience in developing multi-language websites. We have created 'best practice' multi-language websites for both the public and private sectors, including multi-language e-recruitment packages. The addition of a multi-language option opens your products and services up to wider audience that would otherwise be a closed market.</p>
                                </p>
                                <ul>
                                    <h3>The advantages of Multi Language Website</h3>
                                    <li ><i className="ri-check-double-line"></i>Your products and services are open to a wider audience</li>
                                    <li><i className="ri-check-double-line"></i>It enables access to closed markets</li>
                                    <li><i className="ri-check-double-line"></i>Makes your website truly accessible worldwide</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Multi_language_website
