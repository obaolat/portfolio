import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { ReactComponent as YourSvg } from '../../assets/Resume/education.svg'
import './Resume.css'


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const[carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler =(screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) =>{
        return(

            <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>{props.fromDate + "-" + props.toDate}</div>
                    ): (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        
        )
        
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
      ];

    const programmingSkillsDetails =[
        {skill: "Python", ratingPercentage: 85},
        {skill: "Django", ratingPercentage: 85}, 
        {skill: "JavaScript", ratingPercentage: 60 },
        {skill: "MicroServices and Serverless", ratingPercentage: 70},
        {skill: "MERN", ratingPercentage: 70},
        {skill: "DevOps", ratingPercentage: 75},
        {skill: "Agile", ratingPercentage: 70},
        {skill: "Kubernetes & Docker", ratingPercentage: 70},
        {HTML: "HTML&CSS", ratingPercentage: 70},
    ];

    const projectDetails =[

        {
            title: "My Portfolio Website",
            duration: {fromDate: "2021", toDate:"2022"},
            description: "I created a Portfolio website to document and showcase projects I have worked on and my details ",
            subHeading: "Technologies Used: React JS, Bootstrap, NodeJs"

        },
        {
            title: "Social Media App (letMeet)",
            duration: {fromDate: "2022", toDate: "Ongoing"},
            description: "I created a social Media Application where Users can login, logout, post pictures, comment on their pictures and other people's pictures and update their bio",
            subHeading: "HTML & CSS, Django"

        },
        {
            title: "ChatAPP",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "I created a chat application where users can login and log out and log on to different rooms and have very safe group conversations using django",
            subHeading: "Django, HTML & CSS, JavaScript"

        },

        {
            title: "Eblog",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "I created a blog site where the admin can send in articles and users can drop out comments and submit their emails",
            subHeading: "Python, Django, HTML & CSS"

        },

    ];

    const resumeDetails =[
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"Covenant University, Ota, Ogun State"}
            subHeading={"Bachelor of Engingeering, Information and Communication Engineering"}
            fromDate ={"2016"}
            toDate ={"2022"}

            />

        </div>,

        <div className='resume-screen-container' key='work-experience'>
        <div className='experience-container'>
            <ResumeHeading
            heading={"Freelancer"}
            subHeading={"Full Stack Developer"}
            fromDate ={"2017"}
            toDate ={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                Working as a freelancer in different freelance platforms as full stack developer and a devops engineer
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
                - Created server side web application logic and integrated front end jobs for clients
                </span>
                <br/>
                <span className='resume-description-text'>
                - Responsible for managing the interchange of data between the server and the users
                </span>
                <br/>
                <span className='resume-description-text'>
                - Develop, scale, and control strategies, standards, guidelines, governance of Continuous Integration systems
                </span>
                <br/>
                <span className='resume-description-text'>
                - Assess and evaluate new applications, programs and software to ensure they function properly.
                </span>
                <br/>
                <span className='resume-description-text'>
                - Efficiently build software systems and can also develop low-latency applications for mission-critical business systems.
                </span>
                <br/>
            </div>
        </div>
        </div>,
/* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

                <div className='resume-screen-container' key="projects">{projectDetails.map((projectDetails, index)=>(
                    <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate = {projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />
                ))}
                </div>,

                <div className='resume-screen-container' key="interests">
                    <ResumeHeading
                    heading='Music'
                    description='In my opinion music is everything, walks you through every phase of life, good or bad. It is nothing short of beautiful!'
                    />
                    <ResumeHeading
                    heading='Traveling'
                    description='I really love to travel! The soothing feel it gives to see new environment and different cultures and spaces is defintely at the top of it for me '
                    />
                    <ResumeHeading
                    heading='Gaming'
                    description='A little bit of competion can be great you know, helps you improve and be better. I like the relaxing feel of gaming but I also love the competion that comes in with it'
                    />
                </div>

        
    ];

    const handleCarousal =(index)=>{
        let offsetHeight = 360;

        let newCarousalOffset={
            style:{transform: "translateY("+ index * offsetHeight * -1 +"px)"},
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

    const getResumeScreens = ()=>{
        return(
            <div 
            style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };
   
    return(
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'Ebenezer in details!'}/>

                <div className='resume-card'>
                    <div className="resume-bullets">
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>

        </div>
    );
}