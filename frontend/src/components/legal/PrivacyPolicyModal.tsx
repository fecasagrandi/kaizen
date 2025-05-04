import React from 'react';
import Modal from '../ui/Modal';
import styles from './Legal.module.css';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Política de Privacidade">
      <div className={styles.legalContent}>
        <h3>1. Introdução</h3>
        <p>
          A Kaizen está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, 
          usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
        </p>

        <h3>2. Informações que Coletamos</h3>
        <p>
          Podemos coletar os seguintes tipos de informações:
        </p>
        <ul>
          <li><strong>Informações de Cadastro:</strong> Nome, e-mail, senha e outras informações fornecidas durante o registro.</li>
          <li><strong>Dados de Uso:</strong> Informações sobre como você utiliza a plataforma, incluindo hábitos, tarefas, metas e interações.</li>
          <li><strong>Dados de Dispositivo:</strong> Informações sobre seu dispositivo, navegador e como você acessa a plataforma.</li>
          <li><strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies e tecnologias similares para melhorar sua experiência.</li>
        </ul>

        <h3>3. Como Usamos Suas Informações</h3>
        <p>
          Utilizamos suas informações para:
        </p>
        <ul>
          <li>Fornecer, manter e melhorar nossos serviços</li>
          <li>Personalizar sua experiência na plataforma</li>
          <li>Processar suas transações</li>
          <li>Enviar notificações relacionadas à sua conta ou atividades</li>
          <li>Analisar tendências de uso e otimizar nossos serviços</li>
          <li>Detectar, prevenir e resolver problemas técnicos ou de segurança</li>
        </ul>

        <h3>4. Compartilhamento de Informações</h3>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
        </p>
        <ul>
          <li>Com seu consentimento explícito</li>
          <li>Para cumprir obrigações legais</li>
          <li>Para proteger nossos direitos, privacidade, segurança ou propriedade</li>
          <li>Com prestadores de serviços que nos auxiliam na operação da plataforma</li>
        </ul>

        <h3>5. Segurança de Dados</h3>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não 
          autorizado, alteração, divulgação ou destruição.
        </p>

        <h3>6. Seus Direitos</h3>
        <p>
          Você tem o direito de:
        </p>
        <ul>
          <li>Acessar, corrigir ou excluir suas informações pessoais</li>
          <li>Restringir ou se opor ao processamento de seus dados</li>
          <li>Solicitar a portabilidade de seus dados</li>
          <li>Retirar seu consentimento a qualquer momento</li>
        </ul>

        <h3>7. Retenção de Dados</h3>
        <p>
          Mantemos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados, cumprir 
          nossas obrigações legais ou conforme necessário para nossos interesses legítimos.
        </p>

        <h3>8. Crianças</h3>
        <p>
          Nossos serviços não são destinados a menores de 13 anos, e não coletamos intencionalmente informações 
          pessoais de crianças menores de 13 anos.
        </p>

        <h3>9. Alterações nesta Política</h3>
        <p>
          Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações 
          significativas publicando a nova Política de Privacidade em nossa plataforma.
        </p>

        <h3>10. Contato</h3>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: privacidade@kaizen.com
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;
