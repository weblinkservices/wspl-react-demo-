import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Website_maintenance = () => {
    return (
        <Fragment>
            <MetaData title={'Website Maintenance'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="Web-Services.html">Web Design</Link></li>
                                    <li><Link to="customized-website-design.html"><u>Customized Website Design</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <center><img src="assets/img/website-maintenance1.jpg" width="" alt="website-maintenance" /></center><br />
                    <section id="about-us" class="about-us"  >
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>Website Maintenance</strong></h2>
                            </div>
                            <div class="row content section-content">
                                <p class="para">Web Link Services Pvt Ltd is famous/top/best Website Maintenance Website Design in Pune. We are Professional and Creative Website Maintenance Web Design Company based in Pune offer services to India and Global.
                                </p>
                                <p class="para"><h3>Keeping your website up-to-date</h3>
                                    <p class="para">All web sites need to be maintained in order to keep them up to date. Some sites need daily updates while others only need occasional maintenance.
                                        Website maintenance includes revising, editing, or otherwise changing existing web pages to keep your website up to date. The periodic addition of new web pages is also part of maintenance services.</p>
                                </p>
                                <p class="para"><h3>Your website content is edited with updated information. Most maintenance job include at least the following:</h3>
                                    <ul>
                                        <li ><i class="ri-check-double-line"></i>Modification and Addition of Website Content</li>
                                        <li><i class="ri-check-double-line"></i>Image Manipulation and Addition (client supplied images)</li>
                                        <li><i class="ri-check-double-line"></i>Shopping cart product updates</li>
                                        <li><i class="ri-check-double-line"></i>Replace images i.e. pictures & graphics</li>
                                        <li><i class="ri-check-double-line"></i>Adding/removing pages </li>
                                        <li><i class="ri-check-double-line"></i>PDF creation and uploading </li>
                                    </ul></p>
                                <ul>
                                    <li>&#10050;<b> Maintaining & Managing your Site:   </b> <p class="para">We monitor your site on an ongoing basis and make changes that improve your site performance for faster download and improved content spread.</p></li>
                                    <li>&#10050;<b> Re-structure your Site Contents:</b>    <p class="para"> Using your site access statistics like how many visitors your site has, and what they look at while visiting, we can help you re-structure your site contents and navigation elements for increased business.</p></li>
                                    <li>&#10050;<b> Secure & Protect your Site: </b>   <p class="para">Server side programming used for form processing, database management, search and display functions, shopping carts etc. require regular updating to implement fixes for security holes discovered from time to time. We can manage ASP, PHP and Perl codes for all sorts of web applications.</p></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Website_maintenance
