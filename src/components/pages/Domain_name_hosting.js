import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Domain_name_hosting = () => {
    return (
        <Fragment>
            <MetaData title={'Domain Name Hosting Company in Pune, Buy Domain Name Hosting'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Domain Name Hosting</h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="domain-and-hosting.html">Domain &#38; Hosting </Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/domain-name-hosting.jpg" alt="domain-name-hosting" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Domain Name Hosting</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Domain Name Hosting Services in Pune on cheapest cost Pune, MH India.<p className="para">
                                    <h3>Lowest domain name registration prices in Pune</h3>
                                    <p className="para">Choosing the right domain for your online business is the most important thing you need to do when you are starting out. Since you will not be able to start a website without a domain name and once the website is started and is getting traffic, you would not want to change the name because you will lose both reputation as well as the traffic, it only makes sense to spend as much time possible to get the name right.
                                        It's totally up to you to register a domain name through us or use any other domain registrar. Whatever the case may be, we can use any domain name owned by you to be able to assign hosting on it.
                                        Your Domain name is first form of identity that people will associate your site with Creative Globe can help you to register a domain name under various extensions.
                                        A range of domain name extensions (.com, .org, .net, .biz, .info). We have cost effective domain registration.</p>
                                    <ul>
                                        <h3>Features:</h3>
                                        <li ><i className="ri-check-double-line"></i>Real Time Domain Control Panel.</li>
                                        <li><i className="ri-check-double-line"></i>Manage all your domain names at one place.</li>
                                        <li><i className="ri-check-double-line"></i>REAL TIME processing. Now no more waiting No losing back your domains.</li>
                                        <li><i className="ri-check-double-line"></i>Renew domain on REAL TIME basis.</li>
                                        <li><i className="ri-check-double-line"></i>Create sub-users for a particular domain.</li>
                                        <li><i className="ri-check-double-line"></i>Domain Booked on customer name only.</li>
                                    </ul>
                                </p></p>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Domain_name_hosting
