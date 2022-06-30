import React from "react";
import './About.css';

const About = () => {
  
  return (
    
    <section className="about ftco-about img ftco-section ftco-no-pb" id="about">
    	<div className="container">
      <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate">
         
          
          	<h1 className="mainHeader">About</h1>
            <div className="common">
      
              <div className="commonBorder"></div>
            </div>
            
          </div>
        </div>
    		<div className="row d-flex">
    			<div className="col-md-6 col-lg-5 ">
    				<div className="about__img img-about img  align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="img d-flex align-self-stretch align-items-center" >
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-7 pl-lg-5 pb-5 about_info-details">
    				<div className="row justify-content-start pb-3 about_heading">
		          <div className="col-md-12 heading-section ftco-animate">
              <div className="about__info">
		          	
                <h3 className="hii">Hi There,</h3>
                <div className="about__info-p">
                  <p>I'm Amit Patel. Currently I am pursuing Web design and development at Conestoga college in Kitchenr, Canada. And I'm interested in Fullstack developmet. So currently, I'm  working on the web development technologies like JavaScript, React, next.js, Firebase, MongoDB, Angular etc.
                  </p>
                 </div>
                 </div>
		      
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Amit Patel</span></li>
		            	<li className="d-flex"><span>Date of birth:</span> <span>March 30, 1998</span></li>
		            	<li className="d-flex"><span>Address:</span> <span>Fairway Station, kitchener, Ontario</span></li>
		            	<li className="d-flex"><span>Zip code:</span> <span>N2C3G5</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>apatel6152@conestogac.on.ca</span></li>
		            	<li className="d-flex"><span>Phone: </span> <span>+1-223-567-9322</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
              <div className="header__buttons">
                  <a href="/#contact" className="btn btn-outline">
                    Hire Me
                  </a>
                </div>
              
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
  );
};

export default About;
