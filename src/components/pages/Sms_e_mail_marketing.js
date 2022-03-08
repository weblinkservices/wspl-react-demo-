import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Sms_e_mail_marketing = () => {
  return (
    <Fragment>
      <MetaData title={'Bulk SMS and Bulk Mail Service Provider in Pune, Bulk SMS and Bulk Mail Company '} />
      <Fragment>
        <main id="main">
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2></h2>
                <ol><span className="ri-home-4-line">&nbsp; </span>
                  <li><Link to="/index">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/sms-e-mail-marketing"><u>SMS &#38; E-Mail Marketing</u></Link></li>
                </ol>
              </div>
            </div>
          </section>
          {/* <!-- ======= Services Section ======= --> */}
          <section id="services" className="services section-bg services-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title services-title">
                <h2><strong>SMS &#38; E-Mail Marketing</strong></h2>
                <p className="para-content">Web Link Services Pvt Ltd Provides Bulk SMS and Bulk Mail Service Provider in Pune. We are best company for Bulk SMS and Bulk Mail services in Pune, MH India.
                </p>
              </div>
              <div className="row">
                {/* <!-- SMS & E Mail Marketing --> */}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                  <Link to="/bulk-sms-campaign-marketing"><div className="icon-box iconbox-teal">
                    <img src="assets/img/bulk-sms-campaign-marketing-small.jpg" alt="bulk-sms-campaign-marketing" />
                    <h4>Bulk SMS Campaign Marketing</h4>
                    <p className="text-black">Web Link Services Pvt Ltd is the best company for Bulk SMS Campaign Marketing Service Provider in Pune, MH India.</p>
                    <br /><br />
                    <div className="row">
                      <div className="col form-group">
                        <Link to="/bulk-sms-campaign-marketing">
                          <button type="submit" className="btn btn-danger">Read More</button></Link>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                  <Link to="/bulk-e-mail-campaign-marketing"><div className="icon-box iconbox-teal">
                    <img src="assets/img/bulk-e-mail-campaign-marketing-small.jpg" alt="bulk-e-mail-campaign-marketing" />
                    <h4>Bulk E-Mail Campaign Marketing</h4>
                    <p className="para-content">Web Link Services Pvt Ltd Provides Bulk E-Mail Campaign Marketing Service Provider in Pune, MH India.</p>
                    <br />
                    <div className="row">
                      <div className="col form-group">
                        <Link to="/bulk-e-mail-campaign-marketing">
                          <button type="submit" className="btn btn-danger">Read More</button></Link>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Features />
        </main>
      </Fragment>
    </Fragment>
  )
}

export default Sms_e_mail_marketing
