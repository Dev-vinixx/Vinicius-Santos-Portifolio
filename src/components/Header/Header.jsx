import styles from './Header.module.css'

function Header() {

 

 

 return (

  <header className={styles.header}>
   
   <nav className={styles.menuNav}>
    <ul className={styles.menuList}>
     <li><a href="/Vinicius-Santos-Portifolio">Inicio</a></li>
     <li><a href="/AboutMe">Sobre</a></li>
     <li><a href="/Projects">Projetos</a></li>
    </ul>
   </nav>

  </header>

 )

}

export default Header