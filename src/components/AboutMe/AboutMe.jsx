import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import styles from "../AboutMe/AboutMe.module.css"

function AboutMe() {

 return (

  <body className={styles.body}>

   <Header />
   
   <main className={styles.main}>
    <section className={styles.section}>
    <p><span className={styles.h1}>Quem sou eu:</span><br />Oi eu me chamo Vinicius e sou um <span className={styles.bold}>programador front-end</span>, eu trabalho atualmente focando no front dos sites mas tmbm tenho um breve conhecimento no <span className={styles.bold}>back-end</span>, aprendo rapido e sempre faço o meu melhor.</p>
    <p><span className={styles.h1}>Tecnologias e Linguagens:</span><br />Minhas principais linguagens e tecnologias são: <span className={styles.tecnologias}>React, Php, JavaScript, Bootstrap, Nodejs</span>  alem dessas eu tmbm sei: <span className={styles.tecnologias}>Sqlite, Html, Phyton, Tailwind Css</span>.</p>

    <p><span className={styles.h1}>Mais sobre mim:</span><br /> Gosto muito de lasanha e jogos de plataforma como: Brawlhalla e Mario Word nas minhas horas vagas eu gosto de ler, jogar e ir a academia.</p>
    </section>
   </main>

   <Footer />

  </body>

  )

}

export default AboutMe