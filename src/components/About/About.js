import React from "react";
import './About.css';

const About = () => {
  // const [header] = React.useState({
  //   subHeader: "About Me"
  // });


  // const [state] = React.useState([
  //   { id: 1, title: "Name:", text: "Amit Patel" },
  //   { id: 2, title: "Email:", text: "amit3031998@gmail.com" },
  //   { id: 3, title: "Phone:", text: "+1 647 939 9303" },
  //   { id: 4, title: "Linkedin", text: "amit-patel-755a95178" },
  // ]);
  return (
    // <div  className="about" id="about" >
    //   <div className="container">
    //     <div className="common">
    //       <h1 className="mainHeader">{header.subHeader}</h1>
    //       <div className="commonBorder"></div>
    //     </div>
    //     <div className="row  h-650 alignCenter">
    //       <div className="col-6">
    //         <div className="about__img">
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="about__info">
    //           <h1>Hi There</h1>
    //           <div className="about__info-p1">
    //             Hi I'm Amit Patel. I Completed my Bachelor in Computer Engineering from Aditya Silver Oak Institute Of Technology, India with 8.75 CGPA and Currently I am pursuing web design and development at conestoga college in kitchenr,canada.
    //           </div>
    //           <div className="about__info-p2">
    //           I have completed online courses of JavaScript, React-the complete guide from Udemy.com. Also I have learned some course from LinkedIn learning.
    //           </div>
    //           <div className="info__contacts">
    //             <div className="row" >
    //               {state.map((info) => (
    //                 <div className="col-6" key={info.id}>
    //                   <strong>{info.title}</strong>
    //                   <p>{info.text}</p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
    			<div className="col-md-6 col-lg-5 d-flex">
    				<div className="about__img img-about img d-flex align-items-stretch">
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
                  <p>I'm Amit Patel. I Completed my Bachelor in Computer Engineering from Aditya Silver Oak Institute Of Technology, India with 8.75 CGPA and Currently I am pursuing web design and development at conestoga college in kitchenr,canada.
                  </p>
                 </div>
                 </div>
		            {/* <h2 className="mb-4">About Me</h2>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Amit Patel</span></li>
		            	<li className="d-flex"><span>Date of birth:</span> <span>March 30, 1998</span></li>
		            	<li className="d-flex"><span>Address:</span> <span>Fairway Station, kitchener, Ontario</span></li>
		            	<li className="d-flex"><span>Zip code:</span> <span>N2C3G5</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>apatel6152@conestogac.on.ca</span></li>
		            	<li className="d-flex"><span>Phone: </span> <span>+1-223-567-932</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
              	
                <p><a href="/#contact" className="btn btn-primary py-3 px-3">Hire Me</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
  );
};

export default About;
