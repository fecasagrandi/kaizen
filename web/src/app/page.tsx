'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const typedEl = useRef<HTMLSpanElement>(null);

  // Inicializar Typed.js
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['hábitos', 'resultados'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">KAIZEN</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
              Recursos
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-primary-400 transition-colors">
              Como funciona
            </Link>
            <Link href="#benefits" className="text-gray-300 hover:text-primary-400 transition-colors">
              Benefícios
            </Link>
            <div className="flex items-center space-x-4 ml-8">
              <Link 
                href="/login" 
                className="px-5 py-2 rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500/10 transition-colors"
              >
                Entrar
              </Link>
              <Link 
                href="/register" 
                className="px-5 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Começar Grátis
              </Link>
            </div>
          </nav>
          
          <button className="md:hidden flex flex-col space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme seus <span className="relative">
                <span ref={typedEl} className="text-primary-400"></span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-primary-500/30 -z-10"></span>
              </span> em <span className="text-primary-400">resultados</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Kaizen combina gamificação e inteligência artificial para ajudar você a construir hábitos consistentes, 
              aumentar sua produtividade e alcançar seus objetivos pessoais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Começar Jornada
              </Link>
              <Link 
                href="/dashboard" 
                className="px-8 py-4 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-colors text-center"
              >
                Ver Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-dark-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Poderosos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ferramentas intuitivas que transformam o gerenciamento de tarefas e hábitos em uma experiência motivadora
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                ),
                title: 'Gestão de Hábitos',
                description: 'Crie, acompanhe e mantenha hábitos positivos com lembretes personalizados e visualização de progresso.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                  </svg>
                ),
                title: 'Sistema de Gamificação',
                description: 'Ganhe XP, suba de nível e desbloqueie conquistas enquanto cumpre suas metas e desenvolve novos hábitos.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0 1.36-1.35 2.04-3.11 2.04-4.88h2c0 1.98-0.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-0.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-0.72 1.21L11 13V8h1.5z"/>
                  </svg>
                ),
                title: 'IA Personalizada',
                description: 'Receba recomendações adaptadas ao seu comportamento e padrões para otimizar sua rotina e produtividade.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                  </svg>
                ),
                title: 'Análise de Progresso',
                description: 'Visualize seu progresso com gráficos detalhados e métricas que mostram sua evolução ao longo do tempo.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-dark-700 p-8 rounded-xl border border-dark-600 hover:border-primary-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary-500/10 rounded-2xl text-primary-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Um processo simples para transformar sua produtividade e criar hábitos duradouros
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Defina seus objetivos',
                description: 'Estabeleça metas claras e crie hábitos alinhados com seus objetivos pessoais e profissionais.'
              },
              {
                number: '2',
                title: 'Acompanhe diariamente',
                description: 'Registre seu progresso diário e mantenha a consistência com lembretes personalizados.'
              },
              {
                number: '3',
                title: 'Receba insights',
                description: 'Nossa IA analisa seus padrões e oferece recomendações para otimizar sua rotina e produtividade.'
              },
              {
                number: '4',
                title: 'Evolua e conquiste',
                description: 'Ganhe recompensas, suba de nível e celebre seu progresso enquanto transforma seus hábitos.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-dark-800 rounded-xl">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-500/10 text-primary-500 text-2xl font-bold rounded-full mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-dark-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o Kaizen?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Benefícios que fazem a diferença na sua jornada de desenvolvimento pessoal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Motivação Constante',
                description: 'O sistema de gamificação mantém você engajado e motivado a cumprir suas metas diárias.'
              },
              {
                title: 'Personalização Inteligente',
                description: 'Algoritmos de IA adaptam a experiência às suas necessidades específicas e estilo de vida.'
              },
              {
                title: 'Resultados Comprovados',
                description: 'Baseado em princípios científicos de formação de hábitos e psicologia comportamental.'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-dark-700 p-8 rounded-xl border border-dark-600 hover:border-primary-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-400">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece sua transformação hoje</h2>
          <p className="text-xl text-gray-300 mb-10">
            Junte-se a milhares de pessoas que estão melhorando seus hábitos e aumentando sua produtividade com o Kaizen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-dark-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Criar Conta Gratuita
            </Link>
            <Link 
              href="/dashboard" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explorar Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4">KAIZEN</div>
              <p className="text-gray-400">Transformando hábitos em resultados</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Recursos</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Preços</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Sobre nós</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacidade</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-700 mt-12 pt-8 text-center text-gray-500">
            <p> 2025 Kaizen. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
