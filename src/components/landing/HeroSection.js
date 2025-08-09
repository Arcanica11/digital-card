'use client';

import Image from 'next/image';
import styles from '../../styles/landing/heroSection.module.css';
import DarkVeil from '../card/banners/DarkVeil';
import RotatingText from '../card/titles/RotatingText';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.darkVeilBackground}>
        <DarkVeil />
      </div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.brandTitle}>
              <span className={styles.highlightText}>Digital</span>
            </h1>
            <h1 className={styles.brandTitle}>
              <div className={styles.rotatingTextContainer}>
                <RotatingText
                  texts={['Business', 'Cards', 'Cool!']}
                  staggerFrom={'last'}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName={styles.rotatingTextWord}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </h1>
          </div>
          <p className={styles.slogan}>
            Crea tu tarjeta de presentación digital moderna y comparte tu información de contacto fácilmente.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/hero-support-image.png"
              alt="Imagen de soporte de Digital Business Cards"
              width={500}
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}