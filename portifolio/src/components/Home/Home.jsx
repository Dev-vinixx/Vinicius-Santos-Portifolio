import Footer from '../Footer/Footer' 
import Header from '../Header/Header'
import styles from '../Home/Home.module.css'
import IconLinks from '../IconsLinks/IconsLinks.jsx'

function Home() {

  const hrefs = ['https://github.com/Dev-vinixx','https://www.linkedin.com/in/vin%C3%ADcius-rodrigues-17a825280/'];

  console.log("hello")
  return (
    <body className={styles.body}>
      <Header />

      <main className={styles.main}>
        <section>
          <p className={styles.name}>
            Olá 👋, meu nome é <span>Vinicius Santos</span> e sou
          </p>
          <span className={styles.frontend}>
            Front-end
            <IconLinks hrefs={hrefs} /> 
          </span>
          <p className={styles.developer}>Desenvolvedor</p>
          <p className={styles.about}>
            estou estudando essa área há 9 meses, atualmente eu estou trabalhando como freelancer.
          </p>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Home;
