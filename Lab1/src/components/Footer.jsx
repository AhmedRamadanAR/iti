import ContactMeButton from './ContactMeButton'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (

        <div  id="footer" className=" container-fluid">

            <div className='row bg-dark '>
                <div className='col-md-4 my-3  px-4 '>
                    <h1 className='display-6  fw-bold text-white justify'>GET IN TOUCH</h1>
                    <br />
                    <div className='text-white'>
                        <p><FontAwesomeIcon icon={faEnvelope} /> ahmedramadan8050@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +20 1025659292</p>
                    </div>

                </div>

                <div className='col-md-6 d-flex justify-content-center align-items-center'>
               <ContactMeButton link="mailto:ahmedramadan8050@gmail.com" ></ContactMeButton>

                </div>

                <div className='col-md-2  my-3 px-3 '>
                    <a className='text-white m-2 ' href="https://www.linkedin.com/in/ahmedramdan/" target="_blank" >
                        <FontAwesomeIcon icon={faLinkedin}  size="2x" />

                    </a>

                    <a className='text-white m-2' href=" https://github.com/AhmedRamadanAR/" target="_blank" >
                        <FontAwesomeIcon icon={faGithub}  size="2x"/>

                    </a>
                    <a className='text-white m-2' href="https://ahmedramadan-portfolio-cc0c675.gamma.site/
" target="_blank" >
                        <FontAwesomeIcon icon={faGlobe}  size="2x"/>

                    </a>

                </div>
            </div>
        </div>


    )
}
