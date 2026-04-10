import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Trind-AI | Pipelines de Dados com Auto-Cura",
  description:
    "Arquitetura ETL resiliente impulsionada por Sistemas Multiagentes e algoritmos de Auto-Cura. Automatize processos de extração, transformação e carga com agentes autónomos que se recuperam de falhas automaticamente.",
  keywords: [
    "ETL",
    "Pipeline de Dados",
    "Sistemas Multiagentes",
    "Auto-Cura",
    "Docker",
    "Inteligência Artificial",
    "Data Engineering",
  ],
  authors: [{ name: "Asafe Tork" }],
  openGraph: {
    title: "Trind-AI | Pipelines de Dados com Auto-Cura",
    description:
      "Arquitetura ETL resiliente com agentes autónomos e capacidade de auto-cura.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
