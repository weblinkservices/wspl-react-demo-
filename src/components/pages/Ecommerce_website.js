import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Ecommerce_website = () => {
    return (
        <Fragment>
            <MetaData title={'E -commerce Web Design Company in Pune, E-commerce Website Design Company '} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home</Link></li>
                                    <li><Link href="services.html">Services</Link></li>
                                    <li><Link href="Web-Services.html">Web Design</Link></li>
                                    <li><Link href="ecommerce-website.html"></Link><u>Ecommerce Website</u></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* </section><!-- End Breadcrumbs --> */}
                    <img src="assets/img/ecommerce-website.jpg" alt="Ecommerce-Website" className="w-100" />
                    {/* <!-- ======= Why Us Section ======= --> */}
                    <section id="about-us" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title" >
                                <h2><strong>ECOMMERCE WEBSITE</strong></h2>
                            </div>
                            <p className="para">Web Link Services Pvt Ltd is famous/top/best Ecommerce Website Design in Pune. We are Professional and Creative Ecommerce Web Design Company based in Pune offer services to India and Global. </p>
                            <h4>More sales, instant business, faster transactions now your business can grow at lightning speed!!</h4>
                            <p className="para">Web Link Services Pvt. Ltd is one of the world's leading companies that provide effective Ecommerce solutions. Our secured Ecommerce solutions combine professional Ecommerce web design with affordable Ecommerce services. We cater to both the aesthetic & functional requirements of your website. You can avail different custom Ecommerce web solutions depending on your e-business strategies so that it can perfectly suit your business needs and you can reach potential customers worldwide. Selling your products on line is not an easy task. However we make it easy by creating user friendly Ecommerce websites, so that the customer can reach their desired product category with ease and can purchase the product online. We ensure simple and secured online transaction to run your online business safely. We have created many Ecommerce sites including shopping site, mobile phone sites, car accessories sites, fashion wear and garments site and so on.</p>
                            <h4>Take a look at the major features of our e-commerce web development solutions:-</h4>
                            <div className="row content" >
                                <div className="col" data-aos="fade-right">
                                    <p className="para"><ul>
                                        <li ><i className="ri-check-double-line"></i>User Management</li>
                                        <li ><i className="ri-check-double-line"></i>Content Management System</li>
                                        <li ><i className="ri-check-double-line"></i>Featured Product lists</li>
                                        <li ><i className="ri-check-double-line"></i>Easy Checkout Procedure</li>
                                        <li ><i className="ri-check-double-line"></i>Quick Search Feature</li>
                                        <li ><i className="ri-check-double-line"></i>Category Management </li>
                                        <li ><i className="ri-check-double-line"></i>Product Management </li>
                                        <li ><i className="ri-check-double-line"></i>Add/Edit Customers and Reviews </li>
                                        <li ><i className="ri-check-double-line"></i>Secured Administration Area </li>
                                        <li ><i className="ri-check-double-line"></i>Order History and Order Statuses </li>
                                        <li ><i className="ri-check-double-line"></i>Customer's Accounts Maintenance </li>
                                        <li ><i className="ri-check-double-line"></i>Shopping Cart for Customers </li>
                                        <li ><i className="ri-check-double-line"></i>Shopping Cart Integration for The E-Commerce Website </li>
                                    </ul></p>
                                </div>
                                <div className="col" data-aos="fade-left">
                                    <p className="para"><ul>
                                        <li ><i className="ri-check-double-line"></i>Content Management </li>
                                        <li ><i className="ri-check-double-line"></i>No Use of Templates</li>
                                        <li ><i className="ri-check-double-line"></i>20 Royalty Free Images</li>
                                        <li ><i className="ri-check-double-line"></i>Enquiry Form </li>
                                        <li ><i className="ri-check-double-line"></i>Google/Yahoo/MSN Link Submission</li>
                                        <li ><i className="ri-check-double-line"></i>jQuery Header </li>
                                        <li ><i className="ri-check-double-line"></i>Database</li>
                                        <li ><i className="ri-check-double-line"></i>Basic Digital Services</li>
                                        <li ><i className="ri-check-double-line"></i>Google Local Listing </li>
                                        <li ><i className="ri-check-double-line"></i>W3C Validation </li>
                                        <li ><i className="ri-check-double-line"></i>Checkout </li>
                                        <li ><i className="ri-check-double-line"></i>Shopping CART </li>
                                    </ul></p>
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

export default Ecommerce_website
