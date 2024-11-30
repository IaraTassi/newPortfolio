import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Parallax } from "react-parallax";

const Skills: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  // Habilita a animação ao rolar para a seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Ativa a animação
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { percentage: 98, text: "Comunicação" },
    { percentage: 96, text: "Colaboração" },
    { percentage: 89, text: "Adaptabilidade" },
    { percentage: 100, text: "Resiliência" },
  ];

  return (
    <div id="skills-area" ref={skillsRef}>
      <Parallax bgImage="src/assets/pattern.png" strength={200}>
        <div className="container py-5">
          <h3 className="main-title">Soft Skills</h3>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div className="col-md-3 col-6 text-center mb-4" key={index}>
                <div className="circle-container">
                  <CircularProgressbar
                    value={animate ? skill.percentage : 0} // Só anima quando visível
                    text={`${animate ? skill.percentage : 0}%`}
                    styles={buildStyles({
                      textSize: "20px",
                      pathColor: "#fff389",
                      textColor: "#fff",
                      trailColor: "#444",
                    })}
                  />
                </div>
                <p className="mt-3 text-white">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
