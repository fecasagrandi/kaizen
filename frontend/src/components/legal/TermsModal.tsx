import React from 'react';
import Modal from '../ui/Modal';
import styles from './Legal.module.css';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Termos de Uso">
      <div className={styles.legalContent}>
        <h3>1. Aceitação dos Termos</h3>
        <p>
          Ao acessar e usar a plataforma Kaizen, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
          Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nossos serviços.
        </p>

        <h3>2. Descrição do Serviço</h3>
        <p>
          O Kaizen é uma plataforma de gestão de hábitos e produtividade que combina gamificação e inteligência artificial 
          para ajudar os usuários a desenvolverem e manterem hábitos positivos, gerenciarem tarefas e aumentarem sua produtividade.
        </p>

        <h3>3. Conta de Usuário</h3>
        <p>
          Para utilizar completamente nossos serviços, você precisa criar uma conta. Você é responsável por manter a 
          confidencialidade de suas credenciais de login e por todas as atividades que ocorrem em sua conta.
        </p>

        <h3>4. Uso Aceitável</h3>
        <p>
          Você concorda em usar o Kaizen apenas para fins legais e de acordo com estes Termos. Você não deve:
        </p>
        <ul>
          <li>Violar quaisquer leis aplicáveis</li>
          <li>Enviar ou armazenar material que viole direitos de propriedade intelectual</li>
          <li>Enviar material que contenha vírus ou outros códigos maliciosos</li>
          <li>Interferir ou comprometer a integridade ou segurança do sistema</li>
          <li>Coletar dados de outros usuários sem seu consentimento</li>
        </ul>

        <h3>5. Propriedade Intelectual</h3>
        <p>
          Todo o conteúdo, recursos e funcionalidades disponíveis no Kaizen são propriedade da empresa ou de seus 
          licenciadores e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
        </p>

        <h3>6. Modificações do Serviço</h3>
        <p>
          Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do serviço a qualquer momento, 
          com ou sem aviso prévio.
        </p>

        <h3>7. Limitação de Responsabilidade</h3>
        <p>
          Em nenhuma circunstância a equipe Kaizen será responsável por quaisquer danos indiretos, incidentais, especiais, 
          consequenciais ou punitivos decorrentes do uso ou incapacidade de usar o serviço.
        </p>

        <h3>8. Lei Aplicável</h3>
        <p>
          Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de seus conflitos 
          de princípios legais.
        </p>

        <h3>9. Alterações nos Termos</h3>
        <p>
          Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente 
          após a publicação dos Termos atualizados. O uso contínuo do serviço após tais alterações constitui sua aceitação 
          dos novos Termos.
        </p>

        <h3>10. Contato</h3>
        <p>
          Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através do e-mail: contato@kaizen.com
        </p>
      </div>
    </Modal>
  );
};

export default TermsModal;
