import React from 'react';
import styles from './EmptyTaskList.module.css';

interface EmptyTaskListProps {
  onAddTask: () => void;
}

const EmptyTaskList: React.FC<EmptyTaskListProps> = ({ onAddTask }) => {
  return (
    <div className={styles.emptyTaskContainer}>
      <div className={styles.emptyTaskCard}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>📋</span>
        </div>
        <h3 className={styles.title}>Adicione sua primeira tarefa</h3>
        <p className={styles.description}>
          Clique no botão "Novo" no menu lateral para começar a adicionar suas tarefas e iniciar sua jornada Kaizen.
        </p>
        <button className={styles.addTaskButton} onClick={onAddTask}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
};

export default EmptyTaskList;
