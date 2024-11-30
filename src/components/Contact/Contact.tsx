import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact-area">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h3 className="main-title-contact">Contato</h3>
          </div>

          <div className="d-flex justify-content-center mt-4 ">
            <div className="contact-box mx-5">
              <p>
                <a
                  className="contact-title"
                  href="https://www.linkedin.com/in/iara-tassi-b1879182/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </p>
            </div>

            <div className="contact-box mx-5">
              <p>
                <a
                  className="contact-title"
                  href="https://github.com/IaraTassi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </p>
            </div>

            <div className="contact-box mx-5">
              <p>
                <a
                  className="contact-title"
                  href="mailto:iaratassi@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
