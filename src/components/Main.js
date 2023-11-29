import React from 'react';
import myPhoto1 from '../images/photo1.png';
import Projects from './Projects';
import Experiences from './Experiences';
import { useEffect } from 'react';

const Main = () => {
  const projectsData = [
    {
        projectName: 'BellGeekfest 2023',
        briefInfo:
            'Participated in a three-day hackathon hosted by Bell that focused on developing technology solutions for online privacy and security. My team developed a privacy-preserving Chrome extension that leverages the OpenAI API and uses React and Vite on the front-end, with a Flask backend implemented in Python.',
        gitLink: 'https://github.com/junseo-yang/BellGeekfest2023',
    },
    {
        projectName: 'BellGeetfest 2022',
        briefInfo: 
            'I participated in a three-day hackathon hosted by Bell that focused on diversity. Our team developed a diversity translator and diversity calendar using React.',
        gitLink: '#',
    }
    // Add more projects as needed
  ];
  const experiencesData = [
    {
        companyName: 'Manse eSolution Inc.', 
        position: 'Data Analysis & Junior Developer', 
        date: 'Aug 2022 - Aug 2023', 
        location: "Guelph - Hybrid", 
        job: '• Worked on updating the address book feature, a Grain Management System core component. \n • Built a project that displays markers on a map in the program according to the customer\'s address book and allows the indicated markers to be selected, grouped, and used flexibly using API \n • Database redesign of core tables and entities, updated application code to reflect database changes'
    },
    {
        companyName: 'Starbucks', 
        position: 'Barista', 
        date: 'Jun 2021 - Current', 
        location: "Toronto & Waterloo", 
        job: '• Created the best Starbucks experience by connecting with customers and contributing to store and company operations through best-in-class customer service. \n • Grew Customer Connection score from 29 to 48'
    }
  ];

  // const sendEmail = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  // }


  return (
    <div className='body'>
      <div className='main'>
        {/* <div className='container'>
          <div className='headline'>
            <h1>Junior Developer</h1>
            <h1>& Coffee Enthusiast.</h1>
          </div>
        </div> */}
        <div className='container'>
          <div className='headline'>
            <h1 className='animated-text'>Junior Developer</h1>
            <h1 className='animated-text'>& Coffee Enthusiast.</h1>
          </div>
        </div>
        <div className='mainbody'>
          <div className="body1">
            <img src={myPhoto1} alt="My Image" />
          </div>
          <div className="body2" id='body2'>
            <h3>"Committed Developer with a Vision for Leadership and Continuous Growth"</h3>
            <p>&nbsp;</p>
            <p>
              I'm a dedicated Junior developer with an unwavering commitment to realizing my goal of becoming a creative leader in the field. I believe hard work and a passion for innovation are the cornerstones of success. I am ready to put my efforts into my new journey that showcases my relentless pursuit of excellence, not just in development but also in exploring the boundless possibilities that an open-minded approach to technology and creativity can offer.
            </p>
          </div>
        </div>
        <div id='projects' className='projects'>
            <h2>Projects</h2>
            <div className="project-container">
                {projectsData.map((project, index) => (
                    <Projects key={index} {...project} />
                ))}
            </div>
        </div>
        <div className='experiences' id='experiences'>
            <h2>Experiences</h2>
            <div className="experience-container">
                {experiencesData.map((project, index) => (
                    <Experiences key={index} {...project} />
                ))}
            </div>
        </div>
        <div className='skills' id='skills'>
            <h2>Skills</h2>
        </div>
        <div className='contact' id='contact'>
            <h2>Contact</h2>
            {/* <div className='message-input'>
              <input
                type='tel'
                placeholder='Recipient Phone Number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <input
                type='text'
                placeholder='Send me a message...'
                value={userMessage}
                onChange={handleInputChange}
              />
              <button onClick={handleSendMessage}>Send SMS</button>
            </div> */}
            {/* <button onClick={sendEmail}>Send E-mail</button> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
