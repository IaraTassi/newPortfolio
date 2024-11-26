import React from "react";

const About: React.FC = () => {
  return (
    <div className="about" id="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <h3 className="main-title">Estudante Front-end</h3>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid rounded shadow"
              src="src/assets/image-iaraTassi.jpeg"
              alt="Imagem"
            />
          </div>

          <div className="col-md-8">
            <div className="mac-card">
              <div className="mac-card-header">
                <span className="mac-btn red"></span>
                <span className="mac-btn yellow"></span>
                <span className="mac-btn green"></span>
              </div>
              <div className="mac-card-body">
                <p>Olá!</p>
                <p>
                  👋Sou Iara Tassi estudante de ADS. Comecei na área de QA e, ao
                  explorar o ciclo de desenvolvimento, me apaixonei pelo
                  front-end. Tenho conhecimento em HTML, CSS, JavaScript. Este é
                  meu portfólio para compartilhar miniprojetos e minha evolução
                  como desenvolvedor.📚🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
