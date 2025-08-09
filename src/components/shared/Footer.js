
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/landing/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
            {/* Contenedor para los dos logos apilados */}
            <div className={styles.logoStack}>
          <Link href="/">
              <Image
                src="/logoDigitalWeb-1.png"
                alt="Logo superior"
                width={117}
                height={40}
                priority
              />
                </Link>
              <Image
                src="/LOGO-13.png"
                alt="Logo inferior"
                width={120}
                height={120}
                priority
              />
            </div>
        </div>
                <div className={styles.links}>
          <div className={styles.section}>
            <h3>Navegación</h3>
            <ul>
              <li>
                <Link href="#features">Características</Link>
              </li>
              <li>
                <Link href="#pricing">Precios</Link>
              </li>
              <li>
                <Link href="/signup">Regístrate</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Información</h3>
            <ul>
              <li>
                <Link href="/terminos">Términos y Condiciones</Link>
              </li>
              <li>
                <Link href="/privacidad">Política de Privacidad</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Contacto</h3>
            <ul>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
              <li>
                <Link href="/support">Soporte</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h3>Síguenos</h3>
          <div className={styles.socialIcons}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* Icono de Twitter */}
              <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {/* Icono de Facebook */}
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              {/* Icono de LinkedIn */}
              <Image src="/tiktok.svg" alt="Tik-Tok" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Digital Card. designed by Rueda La Rola Media and Arkanica Tec.
      </div>
    </footer>
  );
}