import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Windows_web_hosting = () => {
    return (
        <Fragment>
            <MetaData title={'Windows Web Hosting Company in Pune, Buy Windows Web Hosting'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="domain-and-hosting.html">Domain &#38; Hosting </Link></li>
                                    <li><Link to="linux-web-hosting.html"><u>Linux Web Hosting</u> </Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/windows-web-hosting.jpg" alt="windows-web-hosting" class="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>Windows Web Hosting</strong></h2>
                            </div>
                            <div class="row content section-content" >
                                <p class="para">Web Link Services Pvt Ltd Provides Windows Web Hosting Services in Pune on cheapest cost Pune, MH India.
                                    <h3>Affordable and reliable web hosting in Pune</h3>
                                    <p class="para">We are committed to providing you with high-quality, low cost web hosting for small business and ecommerce websites. We have awesome features that you won't find even on more expensive dedicated web hosting plans. Web hosting with 24/7 email support with control panel to do all your web hosting needs.</p>
                                </p>
                                <h3>Get great windows web hosting at an affordable price!</h3>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Windows_web_hosting
