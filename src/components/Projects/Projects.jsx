import React, { useState } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Projects.module.css";

function Projects() {
  const img = ["./todolist.png", "./Project-portfolio.png"];
  const [activeProject, setActiveProject] = useState(null);

  // Array de resumos de projeto correspondentes às imagens
  const projectSummaries = [
    (
      <div className={styles.projectAbout}>
        <img src={img[0]} alt="Todo List" />
        <div className={styles.projectText}>
        <p>Projeto: <span>Todo List</span> {'('} <a href="https://github.com/Dev-vinixx/todoList_react_vite_deploy">link do projeto</a> {')'}<br /><br />Esta é uma lista de tarefas eu a fiz para testar a função de saveStorage e o useState do react. <br />Este projeto foi feito com React, Html, e Css, feito em aproximadamente 4 horas. <br />Layout simples e minimalista eu o fiz com o intuito de criar uma lista de tarefas para mim mesmo obs: Gostei de mais de fazer esse projeto :{')'}.</p>
        </div>
      </div>
    ),
    (
      <div className={styles.projectAbout}>
        <img src={img[1]} alt="Portfolio" />
        <div className={styles.projectText}>
          <p>Projeto: <span>Portfolio</span> {'('} <a href="https://github.com/Dev-vinixx/Project-Portifolio-React-Deploy">link do projeto</a> {')'}<br /><br /> Este foi um projeto simples que eu fiz enquanto aprendia react. <br />Ele foi feito com <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Html</strong> e <strong>Css</strong>, feito em aproximadamente 5 horas fora o tempo para configurar o deploy e postar no GitHub. <br />Seu layout é agradavel e armonioso obs: os icons de navegação não estão carregando no deploy do GitHub.</p>
        </div>
      </div>
    ),
  ];

  
  const handleProjectClick = (index) => {
    if (activeProject === index) {
      
      setActiveProject(null);
    } else {
     
      setActiveProject(index);
    }
  };

  return (
    <body className={styles.body}>
      <Header />

      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.coluna}>
            <div className={styles.project}>
              <img
                src={img[0]}
                alt="Todo List"
                onClick={() => handleProjectClick(0)}
              />
            </div>
            <div className={styles.project}>
              <img
                src={img[1]}
                alt="Portfolio"
                onClick={() => handleProjectClick(1)}
              />
            </div>
          </div>
          <div className={styles.coluna}>
            <div className={styles.project}>
              <img
                src={img[1]}
                alt="Portfolio"
                onClick={() => handleProjectClick(1)}
              />
            </div>
            <div className={styles.project}>
              <img
                src={img[0]}
                alt="Todo List"
                onClick={() => handleProjectClick(0)}
              />
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          {activeProject !== null && (
            <div className={styles.projectSummary}>
              {projectSummaries[activeProject]}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </body>
  );
}

export default Projects;
