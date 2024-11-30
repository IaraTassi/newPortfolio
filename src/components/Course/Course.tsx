import React, { useEffect, useRef } from "react";

const Course: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="course" id="course-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title text-center">Cursos</h3>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="card-body">
                <i className="fa fa-bug fa-3x"></i>
                <h4 className="card-title">Formação Carreira QA</h4>
                <p className="card-text">
                  Qualidade e engenharia de Software, níveis, tipos, técnicas e
                  casos de teste. Automação de testes de API e Interface. BDD,
                  Cypress: automação de testes E2E, TDD e Java: testes
                  automatizados com JUnit.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="card-body">
                <i className="fab fa-github fa-3x"></i>
                <h4 className="card-title">Git e GitHub</h4>
                <p className="card-text">
                  Git e GitHub: repositório, commit e versões, controle e
                  compartilhamento de código, estratégias de ramificação,
                  resolução de conflitos e pull requests.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="card-body">
                <i className="fab fa-html5 fa-3x"></i>
                <h4 className="card-title">HTML5</h4>
                <p className="card-text">
                  HTML e CSS: ambientes de desenvolvimento, estrutura de
                  arquivos e tags, HTML e CSS: trabalhando com responsividade e
                  publicação de projetos, HTML e CSS: Classes, posicionamento e
                  Flexbox, HTML e CSS: responsividade com mobile-first.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="card-body">
                <i className="fab fa-css3 fa-3x"></i>
                <h4 className="card-title">CSS3</h4>
                <p className="card-text">
                  CSS: construindo layouts com Grid, CSS: dispondo elementos com
                  Flexbox e Grid, CSS: Flexbox e layouts responsivos, Praticando
                  CSS: Grid e Flexbox, Curso de SASS: CSS sintaticamente
                  espetacular.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="card-body">
                <i className="fab fa-js fa-3x"></i>
                <h4 className="card-title">JavaScript</h4>
                <p className="card-text">
                  JavaScript e HTML: desenvolva um jogo e pratique lógica de
                  programação, JavaScript: tipos, variáveis e funções,
                  JavaScript: explorando a linguagem, Curso de JavaScript para
                  Web: Crie páginas dinâmicas.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="card-body">
                <i className="fab fa-java fa-3x"></i>
                <h4 className="card-title">Java</h4>
                <p className="card-text">
                  Variáveis, Tipos de Dados e Operadores Matemáticos em Java,
                  Entendendo Métodos Java, Lógica Condicional e Controle de
                  Fluxos em Java, Estruturas de Repetição e Arrays em Java,
                  Trabalhando com Collections Java, Módulo II - Programação
                  Orientada a Objetos com Java, Praticando Orientação a Objetos
                  com Java, Módulo III - Dominando o Java.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <div className="card-body">
                <i className="fab fa-angular fa-3x"></i>
                <h4 className="card-title">Angular</h4>
                <p className="card-text">
                  Introdução ao Ecossistema Angular, Trabalhando com Componentes
                  Angular, LifeCycle Hooks Angular, Materiais Complementares:
                  Introdução ao Angular, Single Page Application com Angular,
                  Módulos Angular, Trabalhando com Rotas no Angular, Trabalhando
                  com Services no Angular, Trabalhando com Pipes no Angular.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="card-body">
                <i className="fab fa-react fa-3x"></i>
                <h4 className="card-title">React</h4>
                <p className="card-text">
                  TypeScript, POO e Browser APIs, React I: Introdução e
                  Componentes em Classe, React II: Componentes Funcionais e
                  Hooks, Styled Components, Redux, Testes e Deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100 text-center"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              <div className="card-body">
                <i className="fa fa-database fa-3x"></i>
                <h4 className="card-title">Mysql | Power Bi</h4>
                <p className="card-text">
                  SQL com MySQL: manipule e consulte dados, Dashboard com Power
                  BI: visualizando dados, Power BI Desktop: construindo meu
                  primeiro dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
