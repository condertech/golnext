import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
});

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GolNext | Reserva de Quadras Esportivas",
    template: "%s | GolNext",
  },
  description:
    "Encontre a quadra, veja horários livres e reserve em 30 segundos. Futebol, beach tennis, vôlei e muito mais, tudo num app só.",
  keywords: [
    "reserva de quadras",
    "alugar quadra",
    "quadra society",
    "futsal",
    "beach tennis",
    "vôlei",
    "padel",
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
      "Sua próxima partida começa aqui. Encontre a quadra, veja horários livres e reserve em 30 segundos.",
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
      "Sua próxima partida começa aqui. Reserve quadras em 30 segundos.",
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
      className={`${manrope.variable} ${spaceGrotesk.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
