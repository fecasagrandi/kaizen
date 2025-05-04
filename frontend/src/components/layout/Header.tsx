import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>Kaizen</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/dashboard">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/habits">
              <span>Hábitos</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tasks">
              <span>Tarefas</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/challenges">
              <span>Desafios</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/profile">
              <span>Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>
        <Link href="/login">
          <span className={styles.loginButton}>Login</span>
        </Link>
        <Link href="/register">
          <span className={styles.registerButton}>Cadastrar</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
