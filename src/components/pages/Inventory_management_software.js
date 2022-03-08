import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Inventory_management_software = () => {
    return (
        <Fragment>
            <MetaData title={''} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="software-development.html">Software Development</a></li>
                                    <li><a href="inventory-management-software-big.html"><u>Inventory Management Software</u></a></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <img src="assets/img/inventory-management-software-big.jpg" alt="Inventory Management Software" class="w-100" /> */}
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>Inventory Management Software</strong></h2>
                            </div>
                            <div class="row content section-content ">
                                <p class="para">Web Link Services Pvt Ltd is famous/top/best Inventory Management Software Development Company in Pune. We develop Inventory Management Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p class="para"><h3>Inventory management software </h3>
                                    Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents. Companies use inventory management software to avoid product overstock and outages. It is a tool for organizing inventory data that before was generally stored in hard-copy form or in spreadsheets.
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

export default Inventory_management_software
