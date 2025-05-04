import React, { useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/layout/DashboardLayout';
import EmptyTaskList from '@/components/tasks/EmptyTaskList';
import styles from '@/styles/Dashboard.module.css';

const Dashboard = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [hasTasks, setHasTasks] = useState(false);

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  return (
    <>
      <Head>
        <title>Dashboard | Kaizen</title>
        <meta name="description" content="Gerencie suas tarefas e hábitos com o Kaizen" />
      </Head>

      <DashboardLayout>
        <div className={styles.dashboardContent}>
          <div className={styles.welcomeMessage}>
            <h1 className={styles.pageTitle}>Sua jornada para maior produtividade e crescimento pessoal começa aqui.</h1>
            <p className={styles.pageDescription}>
              Selecione um formulário no menu lateral ou adicione sua primeira tarefa.
            </p>
          </div>

          {!hasTasks && (
            <EmptyTaskList onAddTask={handleAddTask} />
          )}

          {showAddTaskModal && (
            <div className={styles.addTaskModal}>
              <div className={styles.addTaskModalContent}>
                <div className={styles.addTaskModalHeader}>
                  <h2>Adicione sua primeira tarefa</h2>
                  <button 
                    className={styles.closeButton}
                    onClick={() => setShowAddTaskModal(false)}
                  >
                    ×
                  </button>
                </div>
                <div className={styles.addTaskModalBody}>
                  <p>
                    Clique no botão "Novo" no menu lateral para começar a adicionar suas tarefas e iniciar sua jornada Kaizen.
                  </p>
                  <button 
                    className={styles.addTaskButton}
                    onClick={() => {
                      setShowAddTaskModal(false);
                      setHasTasks(true);
                    }}
                  >
                    Adicionar Tarefa
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
