import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Database_software = () => {
    return (
        <Fragment>
            <MetaData title={'Database Software Development Company in Pune, Database Software Development'} />
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
                                    <li><Link to="database-software-big.html"><u>Database Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/database-software-big.jpg" alt="Database Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Database Software</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Database Software Development Company in Pune. We develop Database Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    Database software is primarily used to store and manage data/databases, typically in a structured format. It generally provides a graphical interface that allows users to create, edit and manage data fields and records in a tabular or organized form. The data/database stored using this software can be retrieved in a raw or report based format.
                                </p>
                            </div>
                        </div></section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Database_software
