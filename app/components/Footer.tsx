import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row text-left">
            {/* Address */}
            <div className="col-md-4 mb-3">
              <div>
                <b>Corporate office:</b>
              <ul className="list-unstyled">
                <li>
                  <b>Address:</b> Road #29, House #399 (Level-04), Mohakhali DOHS, Dhaka-1206
                </li>
                
                <li>
                  <b>Call us:</b> +880 1310005533
                </li>
                
                 <li>
                  <b>E-mail:</b> <a href="mailto:info@omnitrust.com.bd">info@omnitrust.com.bd</a>
                </li>
               
              </ul>
              </div>

              <div>
                <b>Basundhara  Office:</b>
              <ul className="list-unstyled">
                <li>
                  <b>Address:</b> Rupayan Shopping Square, Level 05 Unit-603/C, Plot #02, Block-G, Basundhara R/A, Dhaka-1229
                </li>
                
               
               
              </ul>
              </div>
            </div>

            {/* Empty Column (optional) */}
            <div className="col-md-4 mb-4">
              {/* You can put something here later */}
            <div className="text-md-center">
               <div className="text-md-center">
    <div className="text-md-center">
          <Link href="/" className="nav-link ">Home</Link>
          <Link href="/about" className="nav-link ">About</Link>
          <Link href="/service" className="nav-link ">Service</Link>
          <Link href="/contact" className="nav-link ">Contact</Link>
  </div>
  </div>

            </div>
            </div>

            

            {/* Social Links */}
            <div className="col-md-4 ">
              <ul className="list-unstyled">
                <li>
                  <b>Follow Us:</b>
                </li>
                <li className="mt-2 d-flex justify-content-around">
                  <a
                    className="text-white mr-3"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-lg "></i>
                  </a>


                  <a
                    className="text-white"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-lg "></i>
                  </a>
                 
                   
               
                  <a
                    className="text-white"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <hr className="bg-light" />
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Omnitrust properties. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
