import styles from '../../styles/terminos.module.css';
import Header from '../../components/landing/Header';
import Footer from '../../components/shared/Footer';

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Términos y Condiciones de Uso</h1>
        <p className={styles.intro}>
          Bienvenido a Digital Business Cards. Al utilizar nuestros servicios, aceptas
          estos términos y condiciones. Por favor, léelos detenidamente.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Uso de la Plataforma</h2>
          <p>
            Digital Business Cards proporciona una plataforma para crear y gestionar tarjetas
            de negocios digitales. Eres responsable de la información que subas y de su
            precisión. Te comprometes a no usar la plataforma para fines ilegales o
            prohibidos por estos términos.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Cuentas de Usuario</h2>
          <p>
            Para usar ciertas funciones de la plataforma, debes registrar una cuenta. Eres
            responsable de mantener la confidencialidad de tu información de inicio de sesión.
            El registro es gratuito, pero ciertos servicios tienen costo, como se detalla
            en nuestra página de precios.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, diseño y funcionalidad de la plataforma (incluidos logotipos,
            banners y código) es propiedad de Digital Business Cards y está protegido por
            derechos de autor.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Servicios Freemium y Premium</h2>
          <p>
            Ofrecemos un plan gratuito con funcionalidades limitadas y servicios
            adicionales de pago único, como diseños de QR y plantillas personalizadas.
            También se planea un servicio de suscripción mensual con funciones avanzadas.
           
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Exclusión de Garantías</h2>
          <p>
            La plataforma se proporciona "tal cual" y sin garantías de ningún tipo. No
            garantizamos que el servicio sea ininterrumpido o libre de errores.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la jurisdicción en la que opera el
            servicio.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}