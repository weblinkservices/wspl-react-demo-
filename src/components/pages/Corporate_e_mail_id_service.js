import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Corporate_e_mail_id_service = () => {
    return (
        <Fragment>
            <MetaData title={'Corporate E-Mail Id Service Company in Pune, Buy Corporate E-Mail Id Service'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><Link to="index.html"><span className="ri-home-4-line">&nbsp; </span>
                                    <li>Home</li></Link>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="domain-and-hosting.html">Domain &#38; Hosting </Link></li>
                                    <li><Link to="corporate-e-mail-id-service.html"><u>Corporate E-Mail Id Service</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/corporate-e-mail-id-service.jpg" alt="corporate-e-mail-id-service" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Corporate E-Mail Id Service</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Corporate E-Mail Id Service in Pune on cheapest cost Pune, MH India.<p className="para">
                                    <p className="para">As opposed to free email solutions, you can give your business a more professional image with Business Email by getting email that is branded with your company's domain name (ex. sales@mybrand.com). In addition, you also benefit from our advanced email technology that gives you the least latency and industry-best uptime, scalability and reliability. An email service being served out of the cloud also means no IT, hardware, software, bandwidth or people costs. And the best part is that you can add email accounts as and when your team grows.</p>
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

export default Corporate_e_mail_id_service
