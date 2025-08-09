import styles from '../../styles/privacidad.module.css';
import Header from '../../components/landing/Header';
import Footer from '../../components/shared/Footer';

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.intro}>
          En Digital Business Cards, nos tomamos muy en serio tu privacidad. Esta política
          describe cómo recopilamos, usamos y protegemos tu información personal.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente al crear tu tarjeta
            digital, como tu nombre, dirección de correo electrónico, número de teléfono,
            enlaces a redes sociales y cualquier otra información que decidas incluir.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Uso de la Información</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul>
            <li>Crear y gestionar tu tarjeta de negocios digital.</li>
            <li>Mejorar y personalizar la experiencia del usuario en nuestra plataforma.</li>
            <li>Comunicarnos contigo sobre tu cuenta y nuestros servicios.</li>
            <li>Analizar el uso de la plataforma para mejorar nuestras funcionalidades.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Compartir Información</h2>
          <p>
            No vendemos ni alquilamos tu información personal a terceros. Podemos compartir
            datos con proveedores de servicios de confianza que nos ayudan a operar
            la plataforma (por ejemplo, para generar códigos QR) o a analizar
            el uso del servicio, siempre bajo estrictos acuerdos de confidencialidad.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información contra
            el acceso no autorizado, la alteración, la divulgación o la destrucción.
            Sin embargo, no podemos garantizar la seguridad absoluta de los datos
            en el entorno en línea.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Tus Derechos</h2>
          <p>
            Tienes el derecho a acceder, corregir o eliminar tu información personal
            en cualquier momento. Puedes ejercer estos derechos contactándonos a
            través de nuestro formulario de soporte.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Cambios en la Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad en
            cualquier momento. Te notificaremos de cualquier cambio publicando la
            nueva política en esta página.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}