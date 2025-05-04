import React, { ReactNode } from 'react';
import Header from './Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Kaizen &copy; {new Date().getFullYear()} - Transformando hábitos em resultados</p>
      </footer>
    </div>
  );
};

export default Layout;
