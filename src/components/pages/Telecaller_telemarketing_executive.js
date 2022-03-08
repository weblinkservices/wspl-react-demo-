import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Telecaller_telemarketing_executive = () => {
    return (
        <Fragment>
            <MetaData title={'Telecaller Telemarketing Executive | Career'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home </Link></li>
                                    <li className=" active"><Link href="Career.html">Career</Link></li>
                                    <li className=" active"><Link href="telecaller-telemarketing-executive.html"><u>Telecaller Telemarketing Executive</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- about  --> */}
                    <section ><br />
                        <div className="container" data-aos="fade-up">
                            <img classNameName="mt--45" src="assets/img/career.png" alt="career" /><br /><br />
                            <table className="table table-bordered">
                                <tr>
                                    <th width="27%"><h5> Post : </h5></th>
                                    <th><h3>Telecaller Telemarketing Executive</h3></th>
                                </tr>
                                <tr>
                                    <td><h5>Reporting to :</h5></td>
                                    <td> Branch Manager</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Locations : </h5></td>
                                    <td>Pimpri Chicnhwad - Pune</td>
                                </tr>
                                <tr><td><h5>Job Profile:</h5></td>
                                    <td> <h6>Key Responsibility Areas:</h6>
                                        <ul>
                                            <li ><i className=""></i>Candidate Will be responsible for generate Fresh meeting for New Sales Department</li></ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h5>Desired Profile:</h5></td>
                                    <td><h6>Qualification:</h6>
                                        <ul>
                                            <li ><i className=""></i>Minimum 12th Pass Or Pursuing Graduate.</li>
                                            <li ><i className=""></i>
                                                Candidate should be familiar with Hindi &#38; English.</li>
                                            <li ><i className=""></i>Marathi Candidate Would be preferred.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Experience:</h5></td>
                                    <td> 0-1 yrs Experience in Advertising Industry/Print Media, B2B Would be preferred.
                                    </td>
                                </tr>
                                <tr><td>
                                    <h5>Required Skills : </h5> </td>
                                    <td> <ul>
                                        <li ><i className=""></i>Good Report Management Skills with competency in MS Office especially Excel</li>
                                        <li ><i className=""></i>Should be an Internet Savvy</li>
                                        <li ><i className=""></i>Excellent verbal/ written communication and presentation skills</li>
                                        <li ><i className=""></i>Excellent sales skills</li>
                                        <li ><i className=""></i>Must be target driven</li>
                                    </ul> </td>
                                </tr>
                                <tr><td>
                                    <h5>Important Note: </h5> </td>
                                    <td> <ul>
                                        <li ><i className=""></i>No Doubt Salary will be no barred for right candidate.</li>
                                        <li ><i className=""></i>Attractive Incentive for Sales on telecaller meeting.</li>
                                    </ul> </td>
                                </tr>
                            </table>
                        </div>
                    </section>
                    <div className="container" data-aos="fade-up">
                        <img src="assets/img/apply-now.png" alt="Apply Now...!!!" height="60" width="180px" alt="Apply Now...!!!" /><br /><br />
                    </div>
                    {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog mt--75">
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
                                                        <input name="Post" id="Post" type="text" className="form-control" value="Telecaller Telemarketing Executive " placeholder="Telecaller Telemarketing Executive " readonly />
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

export default Telecaller_telemarketing_executive
