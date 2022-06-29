import React from 'react';
import './Skills.css';

const Skills = () => {
  
  return (
    <div className="skills" id="skills">
    <section className="ftco-section" id="skills-section">
			<div className="container">
				<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="mainHeader">Skills</h1>
            <div className="common">
              <div className="commonBorder"></div>
            </div>
          </div>
        </div>
				<div className="row skills_animate">
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>HTML5</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-1" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
          <div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>CSS3, Bootstrap</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-1" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
							    <span>85%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>JavaScript</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-2" role="progressbar" aria-valuenow="85"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
							    <span>85%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>React</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-3" role="progressbar" aria-valuenow="95"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
							    <span>95%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>PHP</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-4" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
          <div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>.NET</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-4" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>C, C++</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-5" role="progressbar" aria-valuenow="70"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
							    <span>80%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h4 className='skill_text'>Angular</h4>
							<div className="progress">
							 	<div className="progress-bar-danger color-6" role="progressbar" aria-valuenow="80"
							  	aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
							    <span>75%</span>
							  	</div>
							</div>
						</div>
            
					</div>
				</div>
			</div>
		</section>
    </div>
  );
};

export default Skills;
