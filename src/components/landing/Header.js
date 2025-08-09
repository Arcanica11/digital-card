'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/landing/header.module.css'; // Ruta de importación corregida

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/logoDigitalWeb-1.png"
              alt="Digital Card Logo"
              width={174}
              height={60}
              priority
            />
          </Link>
        </div>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link href="#features" onClick={toggleMenu}>
              Características
            </Link>
          </li>
          <li>
            <Link href="#pricing" onClick={toggleMenu}>
              Precios
            </Link>
          </li>
          <li>
            <Link href="/login" onClick={toggleMenu}>
              Iniciar Sesión
            </Link>
          </li>
          <li className={styles.ctaButton}>
            <Link href="/signup" className={styles.buttonPrimary} onClick={toggleMenu}>
              Empezar
            </Link>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>
    </header>
  );
}