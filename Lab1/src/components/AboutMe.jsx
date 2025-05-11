import { useRef } from 'react'; 

export default function AboutMe(){
  const downloadLinkRef = useRef(null);
  const handleDownload = () => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
  };
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 my-4 d-flex justify-content-center align-items-center">
          <h1 className="display-2">About Me</h1>
        </div>
        
        <div className="col-md-8 my-5">
          <p>I'm Ahmed Ramadan, a dedicated Software Engineer and Mobile App Developer with a passion for creating innovative and user-friendly applications. I specialize in developing high-quality iOS and Android apps that perfectly align with clients' business goals.
          Leveraging the powerful Flutter framework, I efficiently develop cross-platform applications, ensuring a consistent experience across both platforms. For projects requiring native capabilities, I excel in Android native development. I work with businesses and individuals looking to develop apps from the ground up or continue building on existing projects, including eCommerce platforms, social media applications, and transportation apps. 
          By combining technical expertise with a strong understanding of user needs, I consistently deliver solutions that exceed expectations. Whether you're looking to launch a new app or enhance an existing one, my dedication to quality and attention to detail guarantee a successful partnership.
          </p>
          
          <a
            href="./src/assets/AhmedRamadan_cv.pdf" 
            download="Ahmed-Ramadan-CV.pdf" 
            style={{ display: 'none' }}
            ref={downloadLinkRef}
          >
            Download PDF
          </a>

          <button 
            onClick={handleDownload} 
            className="btn btn-dark"  
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}