import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top " data-bs-theme="dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand" id="name">
          Portfólio Iara Tassi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                id="about-menu"
                href="#about-area"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="course-menu" href="#course-area">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-menu" href="#skills-area">
                Soft Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="contact-menu" href="#">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="project-menu" href="#">
                Projetos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
