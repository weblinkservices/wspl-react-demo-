import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Web_developer_and_graphic_designer = () => {
    return (
        <Fragment onload="createCaptcha()">
            <MetaData title={'Web Developer and Graphic Designer | Career'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2> </h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home </Link></li>
                                    <li><Link href="Career.html">Career</Link></li>
                                    <li><Link href="web-developer-and-graphic-designer.html"><u>Web Developer & Graphic Designer</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- about  --> */}
                    <section ><br />
                        <div className="container" data-aos="fade-up">
                            <img className='mt--45' src="assets/img/career.png" alt="career" /><br /><br />
                            <table className="table table-bordered">
                                <tr>
                                    <th width="20%"><h5> Post : </h5></th>
                                    <th><h3>Web Developer &#38; Graphic Designer</h3></th>
                                </tr>
                                <tr>
                                    <td><h5>Reporting to :</h5></td>
                                    <td> Branch Manager</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Locations : </h5></td>
                                    <td>Pune</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Job Summary:</h5></td>
                                    <td> Web /graphic Designer (UI Designer)
                                    </td>
                                </tr>
                                <tr><td><h5>Job Profile:</h5></td>
                                    <td> <h6>Key Responsibility Areas:</h6>
                                        <ul>
                                            <li ><i className=""></i>Should have Deep knowledge about HTML, HTML5, CSS, CSS3, JavaScript, Advanced JavaScript, Ajax, JQuery, Bootstrap and basic knowledge about PHP/.NET .</li>
                                            <li><i className=""></i>Should have deep knowledge about Custom Website Design.</li>
                                            <li><i className=""></i>Should have deep knowledge about Logo , Brochure Design and Graphics Design in Corel Draw & Photoshop.</li>
                                            <li><i className=""></i>Basic Knowledge about Template/CMS based websites.</li>
                                            <li><i className=""></i>Knowledge of Website Hosting.</li>
                                            <li><i className=""></i>Must have UI Designing (Mobile websites) ability.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Experience:</h5></td>
                                    <td> 0-1 yrs Experience in Web designing & development to familiar with goood programming knowledge (PHP/.NET/JAVA)  Would be preferred.
                                    </td>
                                </tr>
                                <tr><td>
                                    <h5>Required Skills : </h5> </td>
                                    <td> <ul>
                                        <li ><i className=""></i>Excellent verbal/ written communication and presentation skills</li>
                                        <li ><i className=""></i>Design website layout/user interface by using standard HTML/CSS disciplines</li>

                                        <li ><i className=""></i>Responsive design skills, Work with graphics and other designers</li>
                                        <li ><i className=""></i>Search engine optimization</li>
                                        <li ><i className=""></i>Maintain and update websites</li>
                                        <li ><i className=""></i>Reproduce properly designed, testable,  excellent coding experience applying the most reliable software development techniques.</li>
                                    </ul> </td>
                                </tr>
                            </table>
                            <br />
                            <div className="container" data-aos="fade-up">
                                <img src="assets/img/apply-now.png" alt="Apply Now...!!!" className="w-180 h-60"  alt="Apply Now...!!!" /><br /><br />
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog mt--75" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form text-white">
                                            <h4>Career Form</h4>
                                            <p className="para">Your application will not be sent. Required fields are marked * </p>
                                            <form name="myform" method="post" onsubmit="validateCaptcha()">
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
                                                        <input name="Post" id="Post" type="text" className="form-control" value="Web Developer & Graphic Designer " placeholder=" Web Developer & Graphic Designer " readonly />
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
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Web_developer_and_graphic_designer
