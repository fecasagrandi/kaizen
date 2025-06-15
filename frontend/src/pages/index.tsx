import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const typedEl = useRef<HTMLSpanElement>(null);

  // Inicializar Typed.js
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['seus hábitos', 'em resultados'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaizen - Transforme seus hábitos, eleve sua produtividade</title>
        <meta name="description" content="Kaizen é uma plataforma de gestão de hábitos e produtividade com gamificação e inteligência artificial para maximizar sua motivação e resultados." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>KAIZEN</span>
          </div>
          <nav className={styles.nav}>
            <Link href="#features">
              <span className={styles.navLink}>Recursos</span>
            </Link>
            <Link href="#how-it-works">
              <span className={styles.navLink}>Como funciona</span>
            </Link>
            <Link href="#benefits">
              <span className={styles.navLink}>Benefícios</span>
            </Link>
            <div className={styles.authButtons}>
              <Link href="/login">
                <span className={styles.loginButton}>Entrar</span>
              </Link>
              <Link href="/register">
                <span className={styles.registerButton}>Começar Grátis</span>
              </Link>
            </div>
          </nav>
          <div className={styles.mobileMenuButton}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Transforme <span className={styles.highlight}><span ref={typedEl}></span></span>  
            </h1>
            <p className={styles.heroDescription}>
              Kaizen combina gamificação e inteligência artificial para ajudar você a construir hábitos consistentes, 
              aumentar sua produtividade e alcançar seus objetivos pessoais.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/register">
                <span className={styles.primaryButton}>Começar Jornada</span>
              </Link>
              <Link href="/dashboard">
                <span className={styles.secondaryButton}>Ver Demo</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection} id="features">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recursos Poderosos</h2>
            <p className={styles.sectionDescription}>
              Ferramentas intuitivas que transformam o gerenciamento de tarefas e hábitos em uma experiência motivadora
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Gestão de Hábitos</h3>
              <p className={styles.featureDescription}>
                Crie, acompanhe e mantenha hábitos positivos com lembretes personalizados e visualização de progresso.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Sistema de Gamificação</h3>
              <p className={styles.featureDescription}>
                Ganhe XP, suba de nível e desbloqueie conquistas enquanto cumpre suas metas e desenvolve novos hábitos.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0 1.36-1.35 2.04-3.11 2.04-4.88h2c0 1.98-0.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-0.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-0.72 1.21L11 13V8h1.5z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>IA Personalizada</h3>
              <p className={styles.featureDescription}>
                Receba recomendações adaptadas ao seu comportamento e padrões para otimizar sua rotina e produtividade.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Análise de Progresso</h3>
              <p className={styles.featureDescription}>
                Visualize seu progresso com gráficos detalhados e métricas que mostram sua evolução ao longo do tempo.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection} id="how-it-works">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Como Funciona</h2>
            <p className={styles.sectionDescription}>
              Um processo simples para transformar sua produtividade e criar hábitos duradouros
            </p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Defina seus objetivos</h3>
              <p className={styles.stepDescription}>
                Estabeleça metas claras e crie hábitos alinhados com seus objetivos pessoais e profissionais.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Acompanhe diariamente</h3>
              <p className={styles.stepDescription}>
                Registre seu progresso diário e mantenha a consistência com lembretes personalizados.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Receba insights</h3>
              <p className={styles.stepDescription}>
                Nossa IA analisa seus padrões e oferece recomendações para otimizar sua rotina e produtividade.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Evolua e conquiste</h3>
              <p className={styles.stepDescription}>
                Ganhe recompensas, suba de nível e celebre seu progresso enquanto transforma seus hábitos.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection} id="benefits">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Por que escolher o Kaizen?</h2>
            <p className={styles.sectionDescription}>
              Benefícios que fazem a diferença na sua jornada de desenvolvimento pessoal
            </p>
          </div>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Motivação Constante</h3>
              <p className={styles.benefitDescription}>
                O sistema de gamificação mantém você engajado e motivado a cumprir suas metas diárias.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Personalização Inteligente</h3>
              <p className={styles.benefitDescription}>
                Algoritmos de IA adaptam a experiência às suas necessidades específicas e estilo de vida.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Resultados Comprovados</h3>
              <p className={styles.benefitDescription}>
                Baseado em princípios científicos de formação de hábitos e psicologia comportamental.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Comece sua transformação hoje</h2>
            <p className={styles.ctaDescription}>
              Junte-se a milhares de pessoas que estão melhorando seus hábitos e aumentando sua produtividade com o Kaizen.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/register">
                <span className={styles.primaryButton}>Criar Conta Gratuita</span>
              </Link>
              <Link href="/dashboard">
                <span className={styles.secondaryButton}>Explorar Demo</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>KAIZEN</span>
            <p className={styles.footerTagline}>Transformando hábitos em resultados</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkColumn}>
              <h3 className={styles.footerLinkTitle}>Plataforma</h3>
              <Link href="/features"><span className={styles.footerLink}>Recursos</span></Link>
              <Link href="/pricing"><span className={styles.footerLink}>Preços</span></Link>
              <Link href="/faq"><span className={styles.footerLink}>FAQ</span></Link>
            </div>
            <div className={styles.footerLinkColumn}>
              <h3 className={styles.footerLinkTitle}>Empresa</h3>
              <Link href="/about"><span className={styles.footerLink}>Sobre nós</span></Link>
              <Link href="/blog"><span className={styles.footerLink}>Blog</span></Link>
              <Link href="/contact"><span className={styles.footerLink}>Contato</span></Link>
            </div>
            <div className={styles.footerLinkColumn}>
              <h3 className={styles.footerLinkTitle}>Legal</h3>
              <Link href="/terms"><span className={styles.footerLink}>Termos de Uso</span></Link>
              <Link href="/privacy"><span className={styles.footerLink}>Privacidade</span></Link>
              <Link href="/cookies"><span className={styles.footerLink}>Cookies</span></Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}> 2025 Kaizen. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
