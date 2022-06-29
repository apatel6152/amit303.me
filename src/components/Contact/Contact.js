import React from "react";

import './Contact.css';
const Contact = () => {
  
  return (
    <section className=" contact-section ftco-no-pb" id="contact">
      <div className="container">
      	<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Get In Touch</h1>
          </div>
        </div>

        <div className="row no-gutters block-9">
          <div className="col-md-5 d-flex image"></div>
          <div className="col-md-7">
            <form action="/home" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-danger py-3 px-5"/>
              </div>
            </form>
          
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
