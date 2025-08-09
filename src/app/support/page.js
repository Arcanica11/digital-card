import styles from '../../styles/soporte.module.css';
import Header from '../../components/landing/Header';
import Footer from '../../components/shared/Footer';
import Link from 'next/link';

export default function SoportePage() {
  const faqs = [
    {
      question: '¿Cómo creo mi tarjeta digital?',
      answer: 'Una vez registrado, ve a tu panel de control y completa los campos con tu información. La tarjeta se generará automáticamente.'
    },
    {
      question: '¿Cómo actualizo mi información?',
      answer: 'Inicia sesión, navega a la sección "Mi Perfil" en tu panel de control y edita los campos que desees. Los cambios se guardarán al instante.'
    },
    {
      question: '¿Cómo consigo un QR personalizado con mi logo?',
      answer: 'Puedes solicitar este servicio premium desde tu panel de control. Te pediremos que subas tu logo y lo generaremos en un plazo de 24 horas.'
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Centro de Soporte</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes (FAQ)</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contáctanos</h2>
          <p className={styles.contactIntro}>
            Si no encuentras lo que buscas, usa el siguiente formulario para enviarnos tu
            consulta. Te responderemos lo antes posible.
          </p>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recursos Adicionales</h2>
          <p>
            Visita nuestra página de <Link href="/terminos" className={styles.link}>Términos y Condiciones</Link> o nuestra <Link href="/privacidad" className={styles.link}>Política de Privacidad</Link> para más información.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}