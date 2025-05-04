import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/Auth.module.css';
import TermsModal from '@/components/legal/TermsModal';
import PrivacyPolicyModal from '@/components/legal/PrivacyPolicyModal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementação futura da lógica de login
    console.log('Login com:', { email, password });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Entrar | Kaizen</title>
        <meta name="description" content="Faça login na plataforma Kaizen" />
      </Head>

      <div className={styles.authCard}>
        <div className={styles.closeButton}>
          <Link href="/">
            <span>×</span>
          </Link>
        </div>

        <h1 className={styles.title}>Entrar</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail ou nome de usuário"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            ENTRAR →
          </button>
        </form>

        <div className={styles.divider}>
          <span>ou</span>
        </div>

        <button className={styles.googleButton}>
          <img src="/google-icon.svg" alt="Google" className={styles.googleIcon} />
          GOOGLE
        </button>

        <div className={styles.termsText}>
          Ao entrar no Kaizen, você concorda com nossos{' '}
          <span className={styles.link} onClick={() => setIsTermsModalOpen(true)}>
            Termos
          </span>{' '}
          e{' '}
          <span className={styles.link} onClick={() => setIsPrivacyModalOpen(true)}>
            Política de Privacidade
          </span>
        </div>

        <div className={styles.registerLink}>
          Não tem uma conta?{' '}
          <Link href="/register">
            <span className={styles.link}>Criar conta</span>
          </Link>
        </div>
      </div>

      {/* Modais de Termos e Política de Privacidade */}
      <TermsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </div>
  );
};

export default Login;
