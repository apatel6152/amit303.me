import React from 'react';
import './Projects.css';

const Projects = () => {
        return (
          <div className="Projects" id="projects">
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading ">Projects</h2>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="images/smart.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading"><b>Smart Pass System</b></h4>
                                <h5><strong>Technology</strong> : HTML, CSS, PHP and IOT</h5>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Our project aims to make the website for “SMART PASS SYSTEM” Which is used by passengers for easy transportation service. The smart card which is provide to the user through it they can use it for public transportation. This system makes all process online so by this user can get their pass in very short time. User can make their pass profile online and after the successfully verify by admin they can pay for pass. After the successful payment user can receive the online mail of their pass slip. User scan their pass to RFID reader. Reader simply shows that user is valid or not.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="images/etc.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading"><b>Electronic Toll Collection</b></h4>
                                <h5><strong>Technology</strong> : ASP.NET</h5>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Electronic toll collection system used for collecting tax automatically. In this we do the identification with the help of radio frequency. A vehicle will hold on a RFID tag. This tag is nothing, but the unique identification assigned. Whenever the vehicle passes the toll plaza, the tax amount will be deducted from his prepaid balance or account. As vehicles don’t have to stop in a queue, it assures time saving, fuel conservation and also contributing in saving in money.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="images/ol.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading"><b>Online Attendance System</b></h4>
                                <h5><strong>Technology</strong> : HTML, CSS, PHP</h5>
                            </div>
                            <div className="timeline-body"><p className="text-muted">The “Online Attendance System” is a system for daily student attendance in college. Its facilities to access the attendance information of a student in a particular class. The system will also help in evaluating attendance eligibility criteria of a student.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="images/marvel.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading"><b>Marvel Movies House</b></h4>
                                <h5><strong>Technology</strong> : HTML, CSS, JavaScript</h5>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Marvel Movie House site, An online movie ticket booking system facilitates the purchasing of movie tickets to its customers. E-ticketing systems allow customers to browse through movies currently playing and book seats, anywhere and anytime.</p></div>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </section>
           
          </div>
        );
      }

    
export default Projects;