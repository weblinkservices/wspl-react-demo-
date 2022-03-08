import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const School_management_software = () => {
    return (
        <Fragment>
            <MetaData title={'School Management Software Development Company in Pune, School Management Software Development'} />
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
                                    <li><Link to="software-development.html">Software Development</Link></li>
                                    <li><Link to="school-management-software-big.html"><u>School Management Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/school-management-software-big.jpg" alt="School Management Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="services" className="services section-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>School Management Software</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best School Management Software Development Company in Pune. We develop School Management Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    Most modern schools and educational institutions focus on offering the best infrastructure and advanced teaching methodologies to ensure all-round development of students. However many of these schools still rely on manual and outdated methods for managing attendance, exams, fees and other such essential day-to-day administrative activities.
                                </p>
                                <p className="para">
                                    To add value to the overall management and smooth functioning of school activities, Web Link Services Pvt Ltd has developed a comprehensive School Management Software . This simple yet powerful tool connects various departments within the school like office, finance, etc. The solution aims to simplify and manage the following important tasks:
                                </p>
                            </div>
                        </div>
                        </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default School_management_software
