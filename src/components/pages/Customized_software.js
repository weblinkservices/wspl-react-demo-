import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Customized_software = () => {
    return (
        <Fragment>
            <MetaData title={'Customized Software Development Company in Pune, Customized Software Development'} />
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
                                    <li><Link to="software-development.html">Software Development</Link></li>
                                    <li><Link to="software-development.html"><u>Customized Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/customized-software.png" alt="Customized Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Customized Software</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Customized Software Development Company in Pune. We develop Customized Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">Searching for top software development companies in Pune? We are leading software developer company in Pune that builds customized software as per business needs. Web Link Services Pvt Ltd is a reliable software partner that delivers cost-effective, secured and reliable software products that match client's unique business requirements. The team of creative designers, software developers and marketers are highly passionate about building innovative digital products. The company lays high emphasis on user experience while building cutting-edge custom software.
                                    We Provide Below Software's as per client requirement.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

            </Fragment>
        </Fragment>
    )
}

export default Customized_software
