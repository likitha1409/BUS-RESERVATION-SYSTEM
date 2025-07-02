import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Bus Reservation System
                  </h5>
                  <p>
                    Welcome to our Online Bus Reservation System, where your
                    journey begins with convenience and ends with unforgettable
                    experiences.
                  </p>
                </div>

                {/* About Us */}
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">About us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                  </ul>
                </div>

                {/* Contact Us */}
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Contact us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                  </ul>
                </div>

                {/* Careers */}
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Careers</h5>
                  <ul className="list-unstyled mb-0">
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                  </ul>
                </div>

                {/* Links */}
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                    <li>Busbee</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded text-color custom-bg"
                  >
                    <b>Log in</b>
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center">
            © 2025 Copyright:
            <span className="text-color-3 ms-1">Busbee</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
