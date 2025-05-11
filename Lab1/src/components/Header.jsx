
import './Header.css';

export default function Header() {
    return (
        <>
            <header className="p-5 my-1 bg-light ">
                <div className="container-fluid">
              <div className="row align-items-center">

                    <div className="col-md-8 d-flex justify-content-center text-center">
                   <h1 className="display-6 fw-bold text-white ">Hello , I'm Ahmed Ramadan <br />
                    <p> Software Engineer</p></h1>

                </div>
                <div className="col-md-4">
                    <img src="./src/assets/programmer.svg" alt="computer"   className="img-fluid w-70"
 />
                </div>
                </div>
                </div>

            </header>


        </>
    )
}