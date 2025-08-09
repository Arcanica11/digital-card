// src/app/page.js
import styles from "../styles/page.module.css";
import Header from '../components/landing/Header';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/landing/HeroSection';
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}