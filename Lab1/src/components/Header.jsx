import programmer from '../assets/programmer.svg';

import './Header.css';
import ContactMeButton from './ContactMeButton'; 

export default function Header() {
    return (
        <>
            <header className="p-5 my-1 bg-light ">
                <div className="container-fluid">
              <div className="row align-items-center">

      <div className="col-md-8 d-flex flex-column align-items-center text-start">
                   <h1 className="display-6 fw-bold text-white ">Hello , I'm Ahmed Ramadan <br />
                    <p> Software Engineer</p></h1>
                    <ContactMeButton link="#footer"></ContactMeButton>


                </div>
                <div className="col-md-4">
                    <img src={programmer} alt="programmer"   className="img-fluid w-70"
 />
                </div>
                </div>
                </div>

            </header>


        </>
    )
}