import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GolNext | Reserva de Quadras Esportivas",
    template: "%s | GolNext",
  },
  description:
    "Reserve quadras de futebol society, futsal e beach tennis perto de você em segundos. A GolNext conecta jogadores e donos de quadra numa experiência rápida e sem burocracia.",
  keywords: [
    "reserva de quadras",
    "alugar quadra",
    "quadra society",
    "futsal",
    "beach tennis",
    "agendamento de quadras",
    "quadras esportivas",
    "GolNext",
  ],
  authors: [{ name: "GolNext" }],
  creator: "GolNext",
  publisher: "GolNext",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "GolNext",
    title: "GolNext | Reserva de Quadras Esportivas",
    description:
      "Menos burocracia, mais jogo. Reserve quadras perto de você em segundos. Reserve. Jogue. Repita.",
    images: [
      {
        url: "/golnext-icon.png",
        width: 1024,
        height: 1024,
        alt: "GolNext - Reserva de Quadras Esportivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GolNext | Reserva de Quadras Esportivas",
    description:
      "Menos burocracia, mais jogo. Reserve quadras perto de você em segundos.",
    images: ["/golnext-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/golnext-icon.png", apple: "/golnext-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
