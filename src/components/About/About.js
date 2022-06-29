import React from "react";
import './About.css';

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me"
  });


  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Amit Patel" },
    { id: 2, title: "Email:", text: "amit3031998@gmail.com" },
    { id: 3, title: "Phone:", text: "+1 647 939 9303" },
    { id: 4, title: "Linkedin", text: "amit-patel-755a95178" },
  ]);
  return (
    <div  className="about" id="about" >
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hi I'm Amit Patel. I Completed my Bachelor in Computer Engineering from Aditya Silver Oak Institute Of Technology, India with 8.75 CGPA and Currently I am pursuing web design and development at conestoga college in kitchenr,canada.
              </div>
              <div className="about__info-p2">
              I have completed online courses of JavaScript, React-the complete guide from Udemy.com. Also I have learned some course from LinkedIn learning.
              </div>
              <div className="info__contacts">
                <div className="row" >
                  {state.map((info) => (
                    <div className="col-6" key={info.id}>
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
