import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : '';
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/dashboard">
          <span className={styles.logoText}>KAIZEN</span>
        </Link>
      </div>
      
      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>MENU PRINCIPAL</h3>
        <nav className={styles.menu}>
          <Link href="/dashboard" className={`${styles.menuItem} ${isActive('/dashboard')}`}>
            <span className={styles.icon}>🏠</span>
            <span className={styles.text}>Nova</span>
          </Link>
          <Link href="/tasks" className={`${styles.menuItem} ${isActive('/tasks')}`}>
            <span className={styles.icon}>📋</span>
            <span className={styles.text}>Minhas tarefas</span>
          </Link>
          <Link href="/calendar" className={`${styles.menuItem} ${isActive('/calendar')}`}>
            <span className={styles.icon}>📅</span>
            <span className={styles.text}>Calendário</span>
          </Link>
          <Link href="/statistics" className={`${styles.menuItem} ${isActive('/statistics')}`}>
            <span className={styles.icon}>📊</span>
            <span className={styles.text}>Estatísticas</span>
          </Link>
          <Link href="/suggestions" className={`${styles.menuItem} ${isActive('/suggestions')}`}>
            <span className={styles.icon}>💡</span>
            <span className={styles.text}>Sugestões</span>
          </Link>
          <Link href="/settings" className={`${styles.menuItem} ${isActive('/settings')}`}>
            <span className={styles.icon}>⚙️</span>
            <span className={styles.text}>Configurações</span>
          </Link>
        </nav>
      </div>

      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>FORMULÁRIOS</h3>
        <nav className={styles.menu}>
          <Link href="/task-creation" className={`${styles.menuItem} ${isActive('/task-creation')}`}>
            <span className={styles.icon}>➕</span>
            <span className={styles.text}>Cadastro de Tarefa</span>
          </Link>
          <Link href="/task-execution" className={`${styles.menuItem} ${isActive('/task-execution')}`}>
            <span className={styles.icon}>▶️</span>
            <span className={styles.text}>Execução de Tarefa</span>
          </Link>
          <Link href="/progress-review" className={`${styles.menuItem} ${isActive('/progress-review')}`}>
            <span className={styles.icon}>📈</span>
            <span className={styles.text}>Revisão de Progresso</span>
          </Link>
          <Link href="/habit-creation" className={`${styles.menuItem} ${isActive('/habit-creation')}`}>
            <span className={styles.icon}>🔄</span>
            <span className={styles.text}>Cadastro de Hábito</span>
          </Link>
          <Link href="/ai-suggestion" className={`${styles.menuItem} ${isActive('/ai-suggestion')}`}>
            <span className={styles.icon}>🤖</span>
            <span className={styles.text}>Sugestão de IA</span>
          </Link>
          <Link href="/user-profile" className={`${styles.menuItem} ${isActive('/user-profile')}`}>
            <span className={styles.icon}>👤</span>
            <span className={styles.text}>Perfil do Usuário</span>
          </Link>
          <Link href="/ai-config" className={`${styles.menuItem} ${isActive('/ai-config')}`}>
            <span className={styles.icon}>⚙️</span>
            <span className={styles.text}>Configuração de IA</span>
          </Link>
          <Link href="/category-management" className={`${styles.menuItem} ${isActive('/category-management')}`}>
            <span className={styles.icon}>🏷️</span>
            <span className={styles.text}>Cadastro de Categoria</span>
          </Link>
          <Link href="/rewards" className={`${styles.menuItem} ${isActive('/rewards')}`}>
            <span className={styles.icon}>🏆</span>
            <span className={styles.text}>Sistema de Recompensas</span>
          </Link>
          <Link href="/challenges" className={`${styles.menuItem} ${isActive('/challenges')}`}>
            <span className={styles.icon}>🎯</span>
            <span className={styles.text}>Conquistas</span>
          </Link>
        </nav>
      </div>

      <div className={styles.userSection}>
        <div className={styles.userAvatar}>
          <span>👤</span>
        </div>
        <div className={styles.userName}>
          usuario_nome
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
