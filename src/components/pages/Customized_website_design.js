import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Customized_website_design = () => {
    return (
        <Fragment>
            <MetaData title={"Customized Web Design Company in Pune, Customized Website Design Company"} />
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
                                    <li><Link to="Web-Services.html">Web Design</Link></li>
                                    <li><Link to="customized-website-design.html"><u>Customized Website Design</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/customized-website-design-small.png" alt="customized-website-design" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Customized Website Design</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Customized Website Design in Pune. We are Professional and Creative Customized Web Design Company based in Pune offer services to India and Global.
                                </p><br />
                                <p className="para"><h3>Easy way to satisfy customer need…</h3>
                                </p>
                                <ul>
                                    <li ><i className="ri-check-double-line"></i>Web Link Services Pvt. Ltd. offer affordable, appealing and fully functional web solutions to small, medium and large scale businesses. We hold many different options for our clients.</li>
                                    <li><i className="ri-check-double-line"></i>Customize Web design is more than just a combination of right fonts, colors, lines, shapes, textures, imagery and navigation. It's erecting a virtual environment that, while it doesn't use bricks-and-mortar, employs interactivity and transactional features.</li>
                                    <li><i className="ri-check-double-line"></i>We work directly with you turn ideas into solutions. Whether it's a solo web page or an expansive, database-driven website, we specializing in developing your Internet presence a new or from an existing site.</li>
                                    <li><i className="ri-check-double-line"></i>The web has become the center of diversity. We understand that. We take the approach of getting to know you, your business and your needs from the very beginning. We can save you time and money on any sized project because of our personal approach.</li>
                                    <li><i className="ri-check-double-line"></i>Not only will we be customizing our bid based on your needs, we also have package rates that we've developed from our most common requests. That doesn't mean your site will be simply thrown together. We'll tailor the design to your target audience. </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/customized-website-design.jpg" alt="customized-website-design" />
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    );
};

export default Customized_website_design;
