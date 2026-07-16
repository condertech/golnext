import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StoreBadges } from "@/components/StoreBadges";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export const metadata: Metadata = {
  title: "Baixar App para Reservar Quadras",
  description:
    "Baixe o app GolNext para encontrar horários livres, comparar quadras esportivas e fazer sua reserva online.",
  alternates: { canonical: "/baixar-app" },
  openGraph: {
    title: "Baixe o app GolNext",
    description: "Encontre e reserve sua próxima quadra pelo celular.",
    url: "/baixar-app",
    type: "website",
    images: [{ url: "/golnext-icon.png", width: 1024, height: 1024, alt: "Aplicativo GolNext" }],
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "GolNext",
  url: `${siteUrl}/baixar-app`,
  operatingSystem: "Android, iOS",
  applicationCategory: "SportsApplication",
  description:
    "Aplicativo para encontrar horários disponíveis e reservar quadras esportivas.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

export default function BaixarAppPage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />

        <section className="overflow-hidden bg-deep px-5 py-16 text-white sm:py-20 md:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10">
              <nav aria-label="Navegação estrutural" className="sg text-sm text-sage">
                <Link href="/" className="hover:text-white">Início</Link>
                <span aria-hidden="true"> / </span>
                <span>Baixar app</span>
              </nav>
              <h1 className="wm mt-6 text-[clamp(42px,11vw,76px)]">
                Baixe agora e reserve sua quadra.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                Veja horários livres, escolha seu esporte e confirme a reserva pelo celular, sem depender de ligações ou mensagens.
              </p>
              <StoreBadges className="mt-8" />
            </div>

            <div className="relative mx-auto h-[310px] w-full max-w-[620px] sm:h-[420px]">
              <div className="absolute inset-x-10 bottom-6 h-24 rounded-full bg-mint/20 blur-3xl" />
              <Image
                src="/IMG_1808.PNG"
                alt="Atletas de diferentes esportes disponíveis no GolNext"
                fill
                sizes="(min-width: 1024px) 620px, calc(100vw - 40px)"
                className="object-contain drop-shadow-[0_24px_20px_rgba(0,18,15,0.42)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="wm max-w-2xl text-[clamp(34px,8vw,56px)] text-ink">
              Sua partida em poucos passos.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["01", "Escolha o esporte", "Busque futebol, beach tennis, vôlei, basquete, tênis ou padel."],
                ["02", "Veja os horários", "Compare opções disponíveis e encontre a melhor para o seu time."],
                ["03", "Reserve online", "Confirme a quadra e mantenha os detalhes da partida no app."],
              ].map(([numero, titulo, texto]) => (
                <article key={numero} className="rounded-2xl border border-pale bg-white p-6 sm:p-7">
                  <span className="wm text-4xl text-petroleo-300">{numero}</span>
                  <h2 className="wm mt-4 text-2xl text-ink">{titulo}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{texto}</p>
                </article>
              ))}
            </div>
            <Link
              href="/aluguel-de-quadras"
              className="sg mt-10 inline-flex rounded-full bg-deep px-7 py-3.5 font-semibold text-white transition hover:bg-deepest"
            >
              Ver modalidades disponíveis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
