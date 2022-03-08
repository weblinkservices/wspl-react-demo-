import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";
const Whatsapp_marketing = () => {
    return (
        <Fragment>
            <MetaData title={'Whatsapp Marketing Service Provider in Pune, Whatsapp Marketing Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2> </h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="business-marketing.html">Business Marketing</Link></li>
                                    <li><Link to="whatsapp-marketing.html"><u>Whatsapp Marketing</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/whatsapp-marketing.jpg" alt="whatsapp-marketing" class="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title"><br />
                                <h2><strong>Whatsapp Marketing </strong></h2>
                            </div>
                            <div class="row content section-content">
                                <p class="para">Web Link Services Pvt Ltd Provides Whatsapp Marketing Service Provider in Pune. We are best company for Whatsapp Marketing services in Pune, MH India.<p class="para">
                                    <h3>As a Bulk WhatsApp text, images, audio service provider. We have been delivering innovative mobile messaging services across India.</h3>
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

export default Whatsapp_marketing
