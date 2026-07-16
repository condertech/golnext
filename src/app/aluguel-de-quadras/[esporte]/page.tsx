import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { encontrarEsporte, esportes } from "@/data/esportes";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

type Props = { params: Promise<{ esporte: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return esportes.map((esporte) => ({ esporte: esporte.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { esporte: slug } = await params;
  const esporte = encontrarEsporte(slug);
  if (!esporte) return {};

  const title = `Aluguel de Quadra de ${esporte.nome}`;
  const canonical = `/aluguel-de-quadras/${esporte.slug}`;

  return {
    title,
    description: esporte.descricao,
    alternates: { canonical },
    openGraph: {
      title: `${title} | GolNext`,
      description: esporte.descricao,
      url: canonical,
      type: "website",
      images: [{ url: "/golnext-hero-players.png", width: 1200, height: 630, alt: `Quadra de ${esporte.nome}` }],
    },
  };
}

export default async function EsportePage({ params }: Props) {
  const { esporte: slug } = await params;
  const esporte = encontrarEsporte(slug);
  if (!esporte) notFound();

  const pageUrl = `${siteUrl}/aluguel-de-quadras/${esporte.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Aluguel de quadra de ${esporte.nome}`,
        serviceType: "Reserva de quadra esportiva",
        url: pageUrl,
        description: esporte.descricao,
        provider: { "@type": "Organization", name: "GolNext", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Aluguel de quadras", item: `${siteUrl}/aluguel-de-quadras` },
          { "@type": "ListItem", position: 3, name: esporte.nome, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="bg-deep px-5 py-16 text-white sm:py-20 md:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Navegação estrutural" className="sg text-sm text-sage">
              <Link href="/" className="hover:text-white">Início</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/aluguel-de-quadras" className="hover:text-white">Aluguel de quadras</Link>
              <span aria-hidden="true"> / </span>
              <span>{esporte.nome}</span>
            </nav>
            <h1 className="wm mt-6 max-w-4xl text-[clamp(42px,10vw,78px)]">
              Aluguel de quadra de <span className="text-mint">{esporte.nome}</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{esporte.descricao}</p>
            <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row">
              <Link href="/baixar-app" className="wm rounded-full bg-mint px-8 py-4 text-center text-lg text-deep transition hover:bg-white">
                Baixar e reservar
              </Link>
              <Link href="/como-funciona" className="sg rounded-full border border-white/30 px-7 py-4 text-center font-semibold transition hover:bg-white/10">
                Como funciona
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="wm text-[clamp(34px,8vw,56px)] text-ink">Reserve pelo celular.</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
                Na GolNext você consulta disponibilidade para {esporte.modalidade}, compara opções e mantém os detalhes da reserva em um só lugar.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Horários disponíveis", "Reserva online", "Confirmação no app"].map((item) => (
                  <div key={item} className="rounded-2xl border border-pale bg-white p-5">
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-mint font-bold text-deep">✓</span>
                    <h3 className="wm text-lg text-ink">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl bg-deep p-6 text-white sm:p-8">
              <h2 className="wm text-3xl">Outras modalidades</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {esportes.filter((item) => item.slug !== esporte.slug).map((item) => (
                  <Link key={item.slug} href={`/aluguel-de-quadras/${item.slug}`} className="sg rounded-full border border-white/15 px-4 py-2 text-sm text-mist transition hover:border-mint hover:text-mint">
                    {item.nome}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
