import React, { useState } from "react";
import styles from "./Nav.module.css"; // CSS Modules (opcional: puedes usar inline styles o Sass)

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo (puedes reemplazar con una imagen) */}
      <div className={styles.logo}>
        <a href="/">F1</a>
      </div>

      {/* Menú para desktop */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <a href="/drivers">Pilotos</a>
        </li>
        <li>
          <a href="/teams">Equipos</a>
        </li>
        <li>
          <a href="/races">Calendario</a>
        </li>
        <li>
          <a href="/standings">Clasificaciones</a>
        </li>
        <li>
          <a href="/history">Historial</a>
        </li>
      </ul>

      {/* Botón para móvil */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Nav;