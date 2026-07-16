import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { esportes } from "@/data/esportes";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export const metadata: Metadata = {
  title: "Aluguel de Quadras Esportivas",
  description:
    "Encontre quadras esportivas para alugar. Consulte horários de futebol, beach tennis, vôlei, basquete, tênis e padel.",
  alternates: { canonical: "/aluguel-de-quadras" },
  openGraph: {
    title: "Aluguel de quadras esportivas | GolNext",
    description: "Encontre horários livres e reserve sua quadra online.",
    url: "/aluguel-de-quadras",
    type: "website",
    images: [{ url: "/golnext-hero-players.png", width: 1200, height: 630, alt: "Esportes e quadras na GolNext" }],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Aluguel de quadras esportivas",
  url: `${siteUrl}/aluguel-de-quadras`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: esportes.map((esporte, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Aluguel de quadra de ${esporte.nome}`,
      url: `${siteUrl}/aluguel-de-quadras/${esporte.slug}`,
    })),
  },
};

export default function AluguelDeQuadrasPage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <section className="bg-deep px-5 py-16 text-white sm:py-20 md:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Navegação estrutural" className="sg text-sm text-sage">
              <Link href="/" className="hover:text-white">Início</Link>
              <span aria-hidden="true"> / </span>
              <span>Aluguel de quadras</span>
            </nav>
            <h1 className="wm mt-6 max-w-4xl text-[clamp(42px,10vw,78px)]">
              Aluguel de quadras sem complicação.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              Escolha a modalidade, encontre horários livres e organize sua próxima partida pela GolNext.
            </p>
            <Link
              href="/baixar-app"
              className="wm mt-8 inline-flex rounded-full bg-mint px-8 py-4 text-lg text-deep transition hover:bg-white"
            >
              Baixar o app
            </Link>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="wm max-w-2xl text-[clamp(34px,8vw,56px)] text-ink">
              Escolha seu esporte.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {esportes.map((esporte, index) => (
                <Link
                  key={esporte.slug}
                  href={`/aluguel-de-quadras/${esporte.slug}`}
                  className="group rounded-2xl border border-pale bg-white p-6 shadow-[0_12px_28px_rgba(0,53,44,0.05)] transition hover:-translate-y-1 hover:border-petroleo-300"
                >
                  <span className="wm text-4xl text-petroleo-300">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="wm mt-5 text-3xl text-ink group-hover:text-petroleo-700">{esporte.nome}</h2>
                  <p className="sg mt-2 text-sm font-medium uppercase tracking-wide text-ink-muted">{esporte.modalidade}</p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{esporte.descricao}</p>
                  <span className="sg mt-6 inline-flex font-semibold text-petroleo-700">Ver quadras →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
