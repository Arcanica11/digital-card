import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"; // Ruta corregida

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tarjetas de Negocios Digitales",
  description: "Crea y comparte tu tarjeta de negocios digital de forma fácil y moderna.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}