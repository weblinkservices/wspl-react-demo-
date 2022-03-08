import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Enquiry_form = () => {
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

        // email
        var email = document.forms["myform"]["Email"].value;

        if (email == "") {
            alert("Please enter the E-mail");
            return false;
        } else {
            var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            var x = re.test(email);
            if (x) {
            } else {
                alert("Email id not in correct format");
                return false;
            }
        }
        // email end
        //mob
        var phone = document.forms["myform"]["Mobile"];
        if (phone.value == "") {
            window.alert(
                "Please enter your telephone number.");
            phone.focus();
            return false;
        }

        event.preventDefault();
        debugger
        if (document.getElementById("cpatchaTextBox").value == code) {
            // sendmail();
            // return true;

        } else {
            alert("Invalid Captcha. try Again");
            createCaptcha();
        }
    }
    return (
        <Fragment onload="createCaptcha()">
            <MetaData title={'Enquiry Form'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link href="index.html">Home</Link></li>
                                    <li><Link href="enquiry-form.html"><u>Enquiry Form</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Career Section ======= --> */}
                    <section id="blog" className="blog">
                        <div className="container">
                        <u className="text-danger"><h3 className="text-black">Contact<strong className="logo-color"> Form</strong></h3></u>
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form">
                                            <form name="myform" onsubmit="validateCaptcha()" >
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input name="Name" type="text" className="form-control" id="Name" placeholder="Your Name" />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="email" name="Email" id="Email" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group">
                                                        <input type="number" name="Mobile" id="Mobile" className="form-control" placeholder="Your Mobile No" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-group" >
                                                        <textarea name="Address" id="Address" className="form-control" placeholder="Your Comment"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 form-group">
                                                        <div className="bg-white text-center" id="captcha"></div>

                                                    </div>
                                                    <div className="col-md-4 form-group">
                                                        <input type="text" id="cpatchaTextBox" className="form-control" placeholder="Security Code" />
                                                    </div>
                                                    <div className="col-md-4 form-group">
                                                        <button type="submit" className="btn btn-danger" >Submit</button>
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

export default Enquiry_form
