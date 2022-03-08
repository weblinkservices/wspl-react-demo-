import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Crm_software = () => {
    return (
        <Fragment>
            <MetaData title={'CRM Software Development Company in Pune, CRM Software Development'} />
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
                                    <li><Link to="crm-software-big.html"><u>CRM Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/crm-software-big.jpg" alt="CRM Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>CRM Software</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">
                                    <p className="para">Web Link Services Pvt Ltd is famous/top/best CRM Software Development Company in Pune. We develop CRM Software in Pune as per client requirement Pune, MH India.
                                    </p>
                                    <p className="para">CRM Software (Customer Relationship Management) helps businesses keep track of their customers and come up with more efficient ways to market them. Customized CRM software can track the enquiries, maintain/update status, maintain to do list, send auto SMS/Email reminders, generate statistics, generate Enquiry conversion ratio details, employee efficiency.
                                    </p> </p></div><br />
                            <div className="row content">
                                <p className="para"><h3>CRM SOFTWARE WILL SAVE THE FOLLOWING DETAILS OF YOUR CUSTOMERS :</h3> </p>
                                <ul>
                                    <li ><i className="ri-check-double-line"></i>Name of the company.</li>
                                    <li><i className="ri-check-double-line"></i>Name of the contact person.</li>
                                    <li><i className="ri-check-double-line"></i>Company Address – State, City, Pin code, address, landmark.</li>
                                    <li><i className="ri-check-double-line"></i>Land line no.</li>
                                    <li><i className="ri-check-double-line"></i>Mobile no. </li>
                                    <li><i className="ri-check-double-line"></i>Email address. </li>
                                    <li><i className="ri-check-double-line"></i>Customer category. </li>
                                    <li><i className="ri-check-double-line"></i>Type of Business. </li>
                                </ul></div><br />
                            <div className="row content" >  <p className="para"><h3>FEATURES :</h3>       </p></div>
                            <div className="row content" ><ul>
                                <li ><i className="ri-check-double-line"></i>Software will generate customized reports as per your requirements.</li>
                                <li><i className="ri-check-double-line"></i>Data export option – data can be exported in excel sheet</li>
                                <li><i className="ri-check-double-line"></i>Send unlimited emails to customers (need SMTP relay)</li>
                                <li><i className="ri-check-double-line"></i>Send sms to customers (sms pack is required)</li>
                            </ul>
                            </div>
                        </div></section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Crm_software
