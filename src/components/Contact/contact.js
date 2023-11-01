import React, { useRef } from 'react';
import './contact.css';
import linkedin from '../../pics/linkedin.png';
import git from '../../pics/git.png';
import cv from '../../pics/cv.png';
import mycv from '../../pics/Muriel-TIENDREBEOGO.pdf';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qc8aqib', 'template_350xj86', form.current, 'MXY4tr_nckL1f14gj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <h4 className="contactDesc">Please fill out the form below to discuss any work opportunities..</h4>
            
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea> <br></br>
                <button type='submit' value='Send' className="submitBtn">Submit</button> <br></br>

                <div className="links">
                  
                <a href={mycv} download><img src={cv} alt="cv" className="link" /> </a>
                <a href=' https://www.linkedin.com/in/muriel-tiendrebeogo-89aa18287/'><img src={linkedin} alt="Linkedin" className="link" /> </a>
                <a href='https://github.com/'> <img src={git} alt="Github" className="link" /></a>
                    
                
            




                </div>
                
                





            </form>




        </div>
        




    </section>




    










  )
}

export default Contact;