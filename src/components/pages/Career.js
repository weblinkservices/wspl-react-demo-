import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Career = () => {
    return (
        <Fragment onload="createCaptcha()">
            <MetaData title={'Career '} />
            <Fragment>
                <div className="container-career">
                <main id="main">
                    <div className="text-center"><img src="assets/img/career.png" alt="career" className="img-fluid" /></div>
                    {/* <!-- faq --> */}
                    <section className="accordion-section clearfix mt-3" aria-label="Question Accordions">
                        <div className="container">
                            <h2><strong>We're hiring to join our team...!</strong> </h2>
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="/#collapse0" aria-expanded="true" aria-controls="collapse0">
                                                1. Sales Executive - Client Acquisition
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                        <div className="panel-body px-3 mb-4">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <a to="/sales-executive-client-acquisition"><img src="assets/img/happy-sales-manager.jpg" alt="happy-sales-manager" height="253" className="img-fluid" /></a>
                                                </div>
                                                <div className="col-lg-9">
                                                    <p>The profile holder will be required to sell the services provided by the company to the prospective clients and thereby acquire new clients.</p>
                                                    <div className="entry-meta">
                                                        Locations : Pune
                                                    </div><br />

                                                    <div className="row">
                                                        <div className="col form-group">
                                                            <a to="/sales-executive-client-acquisition">
                                                                <button type="submit" className="btn">APPLY NOW!</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="/#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                2. Sales manager (Team Lead) - Client Acquisition.
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                        <div className="panel-body px-3 mb-4">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <a to="/sales-manager-team-Lead-client-acquisition"><img src="assets/img/13.jpg" alt="Sales Manager" height="253" className="img-fluid" /></a>
                                                </div>
                                                <div className="col-lg-9">
                                                    <p>The profile requires leading a group of sales representatives. Acquire new customers on a regular basis by selling the e-commerce concept &#38; leveraging relationships with them.</p>
                                                    <div className="entry-meta">
                                                        Locations : Pune
                                                    </div><br />
                                                    <div className="row">
                                                        <div className="col form-group">
                                                            <a to="/sales-manager-team-Lead-client-acquisition">
                                                                <button type="submit" className="btn">APPLY NOW!</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary " role="button" title="" data-toggle="collapse" data-parent="#accordion" to="/#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                3. Web Developer &#38; Graphic Designer
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                        <div className="panel-body px-3 mb-4">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <a to="/web-developer-and-graphic-designer"><img src="assets/img/web-and-graphic.jpg" alt="web-and-graphic" height="253" className="img-fluid" /></a>
                                                </div>
                                                <div className="col-lg-9">
                                                    <p>The profile requires leading a group of sales representatives. Acquire new customers on a regular basis by selling the e-commerce concept &#38; leveraging relationships with them. </p>
                                                    <div className="entry-meta">
                                                        Locations : Pune
                                                    </div><br />
                                                    <div className="row">
                                                        <div className="col form-group">
                                                            <a to="/web-developer-and-graphic-designer">
                                                                <button type="submit" className="btn">APPLY NOW!</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="/#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                4. Telecaller and Telemarketing Executive (Male/Female)
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                        <div className="panel-body px-3 mb-4">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <a to="/telecaller-telemarketing-executive"><img src="assets/img/operator.png" alt="operator" height="253" className="img-fluid" /></a>
                                                </div>
                                                <div className="col-lg-9">
                                                    <p>The profile holder will be required to call to the companies or clients &#38; generate appointments for sales team.</p>
                                                    <div className="entry-meta">
                                                        Locations : Pune
                                                    </div><br />
                                                    <div className="row">
                                                        <div className="col form-group">
                                                            <Link to="/telecaller-telemarketing-executive">
                                                                <button type="submit" className="btn">APPLY NOW!</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- end fq --> */}
                    {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form bg-white">
                                            <h3>Career Form</h3>
                                            <p>Your application will not be sent. Required fields are marked * </p>
                                            <form name="myform" onsubmit="validateCaptcha()" id="form" method="post">
                                                <div className="row">
                                                    <div className="col-md-6 form-group formGroup">
                                                        <input name="Name" id="Name" type="text" className="form-control" placeholder="Your Name*" />
                                                    </div>
                                                    <div className="col-md-6 form-group formGroup">
                                                        <input name="Email" id="Email" type="text" className="form-control" placeholder="Your Email*" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <input name="Mobile" id="Mobile" type="text" className="form-control" placeholder="Your Mobile Number*" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <input name="Post" id="Post" type="text" className="form-control" placeholder="Post* " />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup" >
                                                        <label>Attach your Resume</label>
                                                        <input name="file1" id="file1" type="file" style={{padding: "3px"}} className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <div id="captcha"></div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <label>Security Code*</label>
                                                        <input type="text" placeholder="Captcha" className="form-control" id="cpatchaTextBox" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <button type="submit" className="btn btn-danger">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar" data-aos="fade-left">
                                        <Link to="/career-form"><img src="assets/img/job-opening-apply-now.jpg" width="100%" height="334" className="car-img" alt="job-opening-apply-now" /></Link><br /><br />
                                        <div className="p-30" >
                                            <h3 className="sidebar-title">Tags</h3>
                                            <div className="sidebar-item tags">
                                                <ul>
                                                    <li><Link to="/">All</Link></li>
                                                    <li><Link to="/">WEBSITE DEVELOPMENT</Link></li>
                                                    <li><Link to="/">SOFTWARE DEVELOPMENT</Link></li>
                                                    <li><Link to="/">Design</Link></li>
                                                    <li><Link to="/">DIGITAL MARKETING</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Career
