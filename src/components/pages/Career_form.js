import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Career_form = () => {
    var code;
    function createCaptcha() {
        //clear the contents of captcha div first 
        document.getElementById('captcha').innerHTML = "";
        var charsArray =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
        var lengthOtp = 6;
        var captcha = [];
        for (var i = 0; i < lengthOtp; i++) {
            //below code will not allow Repetition of Characters
            var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
            if (captcha.indexOf(charsArray[index]) == -1)
                captcha.push(charsArray[index]);
            else i--;
        }
        var canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 100;
        canv.height = 50;
        var ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        ctx.strokeText(captcha.join(""), 0, 30);
        //storing captcha so that can validate you can save it somewhere else according to your specific requirements
        code = captcha.join("");
        document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
    }
    function validateCaptcha(event) {
        event.preventDefault();
        debugger
        if (document.getElementById("cpatchaTextBox").value == code) {
            return true;
        } else {
            alert("Invalid Captcha. try Again");
            createCaptcha();
        }


    }

    return (
        <Fragment onload="createCaptcha()">
            <MetaData title={'Career Form'} />
            <Fragment>
                <main id="main">

                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">

                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><Link to="index.html"><span className="ri-home-4-line">&nbsp; </span>
                                    <li>Home</li></Link>
                                    <li><Link to="Career.html">Career</Link></li>
                                    <li><Link to="career-form.html">Career Form</Link></li>
                                </ol>
                            </div>

                        </div>
                    </section>

                    <center><img src="assets/img/career.png" alt="career" className="img-fluid" /></center>
                    {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog mt--43">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form">
                                            <h3>Career Form</h3>
                                            <p>Your application will not be sent. Required fields are marked * </p>
                                            <form name="myform" action="" onsubmit="validateCaptcha()">
                                                <div className="row">
                                                    <div className="col-md-6 form-group formGroup ">
                                                        <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                                                    </div>
                                                    <div className="col-md-6 form-group formGroup ">
                                                        <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <input name="mobile" type="text" className="form-control" placeholder="Your Mobile Number*" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup">
                                                        <input name="post" type="text" className="form-control" placeholder="Post* " />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group formGroup" >
                                                        <label>Attach your Resume</label>
                                                        <input name="file" type="File" style={{padding: "3px"}} className="form-control" />
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
                                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default Career_form

