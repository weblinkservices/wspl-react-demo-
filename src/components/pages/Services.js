import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Services = () => {
    return (
        <Fragment>
            <MetaData title={'Services'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="/index">Home</Link></li>
                                    <li><Link to="/servies"><u>Services</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" class="services section-bg services-bg">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title services-title" ><br />
                                <h2><strong>Services</strong></h2>
                                <p class="para">Web Link Services Pvt. Ltd. provides guidance to clients seeking the right choices in the fast-moving field of media technologies. We provide to our clients is the key to our understanding of your digital media needs and services to different parts of the world which are consistent with your business goals.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <Link to="/digital-marketing"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/Digital-Marketing.jpg" alt="Digital-Marketing" />
                                        <h4>Digital Marketin</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Digital Marketing services in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/digital-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <Link to="/software-development"><div class="icon-box iconbox-orange ">
                                        <img src="assets/img/software-development.jpg" alt="Software Development" />
                                        <h4>Software Develop</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Software Development Company in Pune.</p>

                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/software-development">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/domain-and-hosting"><div class="icon-box iconbox-pink">
                                        <img src="assets/img/domain-and-hosting-small.jpg" alt="Domain and Hosting" />
                                        <h4>Domain & Hos</h4>
                                        <p>Web Link Services Pvt Ltd Provides Domain and Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/domain-and-hosting">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                                    <Link to="/graphic-designing"> <div class="icon-box iconbox-yellow">
                                        <img src="assets/img/graphic-designing-small.jpg" alt="Graphic Designing" />
                                        <h4>Graphic Desig</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Graphic Designing services Provider in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/graphic-designing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                                    <Link to="/sms-e-mail-marketing"> <div class="icon-box iconbox-red">
                                        <img src="assets/img/sms-and-e-mail-marketing-small.jpg" alt="SMS E Mail Marketing" />
                                        <h4>SMS & E Mail Marke</h4>
                                        <p>Web Link Services Pvt Ltd Provides Bulk SMS and Bulk Mail Service Provider in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/sms-e-mail-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/web-services"><div class="icon-box iconbox-blue">
                                        <img src="assets/img/web-services-small.jpg" alt="Web Design" />
                                        <h4>Web De</h4>
                                        <p>Web Link Services Pvt Ltd is a Professional and Creative Website Development/Design based Company in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/web-services">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/business-marketing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/other-marketing-small.jpg" alt="Business Marketing" />
                                        <h4>Business Marke</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Google Marketing & Google Promotion Company in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/business-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- Web Design --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-designing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/website-designing.png" alt="Website Designing" />
                                        <h4>Website Desig</h4>
                                        <p>Web Link Services Pvt Ltd is a Professional and Creative Web Design Company based in Pune that offers services across India and globally.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/website-designing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300" >
                                    <Link to="/customized-website-design"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/customized-website-design-small.jpg" alt="Customized Website Design" />
                                        <h4>Customized Website De</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Customized Website Design in Pune. </p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/customized-website-design">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/ecommerce-website"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/ecommerce-website.png" alt="Ecommerce Website" />
                                        <h4>Ecommerce Web</h4>
                                        <p>Web Link Services Pvt Ltd is a top Ecommerce Website Design and Creative Ecommerce Web Design Company based in Pune, India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/ecommerce-website">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-maintenance"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/website-maintenance-small.jpg" alt="Website Maintenance" />
                                        <h4>Website Mainten</h4>
                                        <p>Web Link Services Pvt Ltd is a top Professional Website Maintenance Web Design Company based in Pune, India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/website-maintenance">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-redesigning"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/website-redesigning-small.jpg" alt="Website Redesigning" />
                                        <h4>Website Redesig</h4>
                                        <p>Web Link Services Pvt Ltd is a famous for a site with clean, simple, and fast designs with look Website Redesigning Company in Pune.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/website-redesigning">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/multi-language-website"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/multi-language-website-small.jpg" alt="Multi Language Website" />
                                        <h4>Multi Language Web</h4>
                                        <p>Multi-Language Website designing a website with content in more than one language Localization, Select the language switcher simple to find make visitors.</p><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/multi-language-website">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- Digital Marketing --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/search-engine-optimization"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/search-engine-optimization-small.jpg" alt="Search Engine Optimization" />
                                        <h4>Search Engine Optimiza</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Search Engine Optimization Company in Pune, SEO Company in Pune, MH India.</p><br /><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/search-engine-optimization">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/seo-consultant-services"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/seo-consultant-services-small.jpg" alt="SEO Consultant Services" />
                                        <h4>SEO Consultant Services</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best SEO Consultant Services Company in Pune, SEO Company in Pune, MH India.</p><h3></h3>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/seo-consultant-services">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/search-engine-marketing (SEM)"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/search-engine-marketing-sem--small.jpg" alt="Search Engine Marketing SEM" />
                                        <h4>Search Engine Marketing SEM</h4>
                                        <p>Web Link Services Pvt Ltd is a top Search Engine Marketing Company that provides Google 1st page rank with 100% assurance, SEM.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/search-engine-marketing-sem">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/internet-marketing"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/internet-marketing-small.jpg" alt="Internet Marketing" />
                                        <h4>Internet Marketing</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Internet Marketing Company in Pune, Google Promotion SEO Company in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/internet-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/local-search-engine-optimization"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/local-search-engine-optimization-small.jpg" alt="Local Search Engine Optimization" />
                                        <h4>Local Search Engine Optimization</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Local Search Engine Optimization Company in Pune, SEO Company in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/local-search-engine-optimization">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>


                                {/* <!-- Software --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/inventory-management-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/inventory-management-software.jpg" alt="Inventory Management Software" />
                                        <h4>Inventory Management Software</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Inventory Management Software Development Company in Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/inventory-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/stock-management-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/stock-management-software.jpg" alt="Stock Management Software" />
                                        <h4>Stock Management Software</h4>
                                        <p>Web Link Services Pvt Ltd develop Stock Management Software in Pune as per client requirement Pune, MH India.</p><br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/stock-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/clinic-management-software"> <div class="icon-box iconbox-teal">

                                        <img src="assets/img/clinic-management-software.jpg" alt="Clinic Management Software" />

                                        <h4>Clinic Management Software</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Clinic Management Software Development Company in Pune, MH India.</p><br /><br />

                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/clinic-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/hotel-management-software"><div class="icon-box iconbox-teal">

                                        <img src="assets/img/hotel-management-software.jpg" alt="Hotel Management Software" />
                                        <h4>Hotel Management Software</h4>
                                        <p>Web Link Services Pvt Ltd develop Hotel Management Software in Pune as per client requirement Pune, MH India.</p><br /><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/hotel-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/project-management-software"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/project-management-software.png" alt="Project Management Software" />
                                        <h4>Project Management Software</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Project Management Software Development Company in Pune, MH India.</p><h3><h3><h5></h5></h3></h3><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/project-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/accounting-billing-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/accounting-billing-software.jpg" alt="Accounting Billing Software" />
                                        <h4>Accounting Billing Software</h4>
                                        <p>Web Link Services Pvt Ltd is develop Accounting/Billing Software in Pune as per client requirement Pune, MH India.</p><h3><h3><h5></h5></h3></h3><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/accounting-billing-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/customized-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/customized-software-small.png" alt="Customized Software" />
                                        <h4>Customized Software</h4>
                                        <p>Web Link Services Pvt Ltd is develop Customized Software in Pune as per client requirement Pune, MH India.</p><br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/customized-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/crm-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/crm-software.jpg" alt="CRM Software" />
                                        <h4>CRM Software</h4>
                                        <p>Web Link Services Pvt Ltd is develop CRM Software in Pune as per client requirement Pune, MH India.</p><br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/crm-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/hospital-management-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/hospital-management-software-big.jpg" alt="Hospital Management Software" />
                                        <h4>Hospital Management Software</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Hospital Management Software Development Company in Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/hospital-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/coaching-classes-software-big"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/coaching-classes-software.png" alt="Coaching Classes Software" />
                                        <h4>Coaching Classes Software</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Coaching Classes Software Development Company in Pune, MH India.</p><br /><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/coaching-classes-software-big">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/school-management-software"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/school-management-software.jpg" alt="School Management Software" />
                                        <h4>School Management Software</h4>
                                        <p>Web Link Services Pvt Ltd is develop School Management Software in Pune as per client requirement Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/school-management-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/database-software"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/database-software.png" alt="Database Software" />
                                        <h4>Database Software</h4>
                                        <p>Web Link Services Pvt Ltd is We develop Database Software in Pune as per client requirement Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/database-software">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>


                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/desktop-application"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/desktop-application.jpg" alt="Desktop Application" />
                                        <h4>Desktop Application</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Online / Offline Software Development Company in Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/desktop-application">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* <!-- end software --> */}
                                {/* <!-- Domain & Hosting --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/windows-web-hosting"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/windows-web-hosting-small.jpg" alt="Windows Web Hosting" />
                                        <h4>Windows Web Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Windows Web Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/windows-web-hosting">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/linux-web-hosting"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/linux-web-hosting-small.jpg" alt="Linux Web Hosting" />
                                        <h4>Linux Web Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Linux Web Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/linux-web-hosting">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/domain-name-hosting"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/domain-name-hosting-small.jpg" alt="domain-name-hosting" />
                                        <h4>Domain Name Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Domain Name Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/domain-name-hosting">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/corporate-e-mail-id-service"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/corporate-e-mail-id-service-small.jpg" alt="corporate-e-mail-id-service" />
                                        <h4>Corporate E-Mail Id Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Corporate E-Mail Id Service in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/corporate-e-mail-id-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- Graphic Designing --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/logo-designing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/logo-designing-small.jpg" alt="logo-designing" />
                                        <h4>Logo Designing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Logo Designing services in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/logo-designing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/brochure-designing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/brochure-designing-small.png" alt="brochure-designing" />
                                        <h4>Brochure Designing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Brochure Designing services in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/brochure-designing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- SMS & E Mail Marketing --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/bulk-sms-campaign-marketing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/bulk-sms-campaign-marketing-small.jpg" alt="bulk-sms-campaign-marketing" />
                                        <h4>Bulk SMS Campaign Marketing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Bulk SMS Campaign Marketing Service Provider in Pune, MH India.</p>
                                        <br /><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/bulk-sms-campaign-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/bulk-e-mail-campaign-marketing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/bulk-e-mail-campaign-marketing-small.jpg" alt="bulk-e-mail-campaign-marketing" />
                                        <h4>Bulk E-Mail Campaign Marketing</h4>
                                        <p>Web Link Services Pvt Ltd Provides Bulk E-Mail Campaign Marketing Service Provider in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/bulk-e-mail-campaign-marketing">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- Other Marketing --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/whatsapp-marketing"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/whatsapp-marketing-small.jpg" alt="whatsapp-marketing" />
                                        <h4>Whatsapp Marketing</h4>
                                        <p>Web Link Services Pvt Ltd Provides Whatsapp Marketing Service Provider in Pune. We are best company for Whatsapp Marketing services in Pune, MH India..</p><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/whatsapp-marketin">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/voice-call-service"> <div class="icon-box iconbox-teal">
                                        <img src="assets/img/voice-call-service-small.jpg" alt="voice-call-service" />
                                        <h4>Voice Call Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Voice Call Service Provider in Pune. We are best company for Voice Call services in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/voice-call-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/short-code-service"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/short-code-service-small.jpg" alt="short-code-service" />
                                        <h4>Short Code Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Short Code Service Provider in Pune. We are best company for Short Code services in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/short-code-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/long-code-service"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/long-code-service-small.jpg" alt="long-code-service" />
                                        <h4>Long Code Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Long Code Service Provider in Pune. We are best company for Long Code services in Pune, MH India.</p><h3></h3>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/long-code-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/ivr-service"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/ivr-service-small.jpg" alt="ivr-service" />
                                        <h4>IVR Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides IVR Service Provider in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/ivr-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/miss-call-alert-service"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/miss-call-alert-service-small.png" alt="miss-call-alert-service" />
                                        <h4>Miss Call Alert Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Miss Call Alert Service Provider in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/miss-call-alert-service">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                {/* <!-- Social Media Optimization --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/facebook"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/facebook-small.png" alt="facebook" />
                                        <h4>Facebook</h4>
                                        <p>Web Link Services Pvt Ltd Provides Facebook Social Media Service Provider in Pune, MH India.</p><br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/facebook">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/facebook-adverts"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/facebook-adverts-small.jpg" alt="facebook-adverts" />
                                        <h4>Facebook Adverts</h4>
                                        <p>Web Link Services Pvt Ltd Provides Facebook Adverts Service Provider in Pune, MH India.</p><br />
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/facebook-adverts">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/google-plus"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/google-plus-small.jpg" alt="google-plus" />
                                        <h4>Google+</h4>
                                        <p>Web Link Services Pvt Ltd Provides Google Plus Service Provider in Pune, MH India.</p><br />
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/google-plus">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/youtube"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/youtube-small.jpg" alt="youtube" />
                                        <h4>YouTube</h4>
                                        <p>Web Link Services Pvt Ltd Provides YouTube Marketing and Promotion Company in Pune, MH India.</p><br />

                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/youtube">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/linkedin"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/linkedin-small.jpg" alt="linkedin" />
                                        <h4>LinkedIn</h4>
                                        <p>Web Link Services Pvt Ltd famous company for Linkedin Social Media Service Provider In Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/linkedin">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
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
            </Fragment >
        </Fragment >
    )
}

export default Services
