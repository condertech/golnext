import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "GolNext",
  operatingSystem: "ANDROID",
  applicationCategory: "SportsApplication",
  description:
    "Aplicativo de reserva de quadras esportivas. Encontre quadras perto de você, reserve em segundos e pague pelo app.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  publisher: {
    "@type": "Organization",
    name: "GolNext",
    email: "suporte@golnext.com",
    logo: `${siteUrl}/golnext-icon.png`,
  },
};

const dores = [
  {
    titulo: "Horário fechado por telefone",
    texto:
      "Liga pra quadra, ninguém atende, o horário que você queria já foi. Reserva não pode depender de ligação.",
  },
  {
    titulo: "Pagamento no aperto de mão",
    texto:
      "Combinado no fiado, racha desorganizado e ninguém sabe quem pagou. O dinheiro do jogo merece mais controle.",
  },
  {
    titulo: "Quadra desconhecida, surpresa na chegada",
    texto:
      "Foto antiga, gramado ruim e vestiário fechado. Sem avaliação de quem já jogou, é loteria.",
  },
];

const passos = [
  {
    numero: "1",
    titulo: "Encontre",
    texto:
      "Ative a localização e veja as quadras disponíveis perto de você, com fotos, preços e avaliações reais.",
  },
  {
    numero: "2",
    titulo: "Reserve",
    texto:
      "Escolha o dia e o horário livre direto na agenda da quadra e confirme em segundos.",
  },
  {
    numero: "3",
    titulo: "Jogue",
    texto:
      "Pague pelo app com Pix ou cartão e chegue com tudo confirmado. É só entrar em campo.",
  },
];

const recursos = [
  {
    titulo: "Quadras perto de você",
    texto: "Busca por localização mostra as melhores opções da sua região.",
  },
  {
    titulo: "Agenda em tempo real",
    texto: "Horários livres e ocupados sempre atualizados, sem conflito.",
  },
  {
    titulo: "Pagamento no app",
    texto: "Pix e cartão via Mercado Pago, com confirmação na hora.",
  },
  {
    titulo: "Avaliações reais",
    texto: "Notas e comentários de jogadores que já estiveram lá.",
  },
  {
    titulo: "Histórico de reservas",
    texto: "Suas partidas passadas e futuras organizadas num só lugar.",
  },
  {
    titulo: "Notificações",
    texto: "Lembretes de reserva e atualizações importantes do seu jogo.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <header className="bg-petroleo-900">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-block rounded-full border border-petroleo-700 bg-petroleo-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-mint">
                Reserva de quadras esportivas
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white leading-tight">
                Menos burocracia, <span className="text-mint">mais jogo.</span>
              </h1>
              <p className="mt-6 text-lg text-petroleo-100 leading-relaxed">
                A GolNext transforma a reserva de quadras numa experiência
                rápida, clara e feita para quem só quer entrar em campo.
                Reserve. Jogue. Repita.
              </p>
              <div id="baixar" className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-xl bg-mint px-6 py-3.5 font-bold text-petroleo-900 hover:brightness-95 transition"
                >
                  Em breve no Google Play
                </a>
                <Link
                  href="/para-donos-de-quadra"
                  className="rounded-xl border border-petroleo-700 px-6 py-3.5 font-bold text-white hover:bg-petroleo-800 transition"
                >
                  Tenho uma quadra
                </Link>
              </div>
            </div>
            <div className="mx-auto w-64 md:w-72" aria-hidden="true">
              <div className="rounded-[2.5rem] border-8 border-petroleo-800 bg-white p-4 shadow-2xl">
                <div className="rounded-xl bg-petroleo-900 px-4 py-3">
                  <div className="h-2 w-16 rounded bg-mint" />
                  <div className="mt-2 h-2 w-24 rounded bg-petroleo-700" />
                </div>
                <div className="mt-3 space-y-3">
                  <div className="rounded-xl border border-petroleo-50 p-3">
                    <div className="h-16 rounded-lg bg-petroleo-100" />
                    <div className="mt-2 h-2 w-20 rounded bg-petroleo-200" />
                    <div className="mt-1.5 h-2 w-14 rounded bg-petroleo-50" />
                    <div className="mt-2 h-6 w-24 rounded-lg bg-petroleo-900" />
                  </div>
                  <div className="rounded-xl border border-petroleo-50 p-3">
                    <div className="h-16 rounded-lg bg-petroleo-50" />
                    <div className="mt-2 h-2 w-24 rounded bg-petroleo-200" />
                    <div className="mt-1.5 h-2 w-16 rounded bg-petroleo-50" />
                    <div className="mt-2 h-6 w-24 rounded-lg bg-mint" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900 text-center">
            Marcar um jogo não devia ser difícil
          </h2>
          <p className="mt-4 text-center text-ink-muted max-w-2xl mx-auto">
            Todo jogador conhece esses perrengues. A GolNext existe para acabar
            com eles.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dores.map((d) => (
              <div
                key={d.titulo}
                className="rounded-2xl border border-petroleo-50 p-8"
              >
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-ink">
                  {d.titulo}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-petroleo-50/50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900 text-center">
              Como funciona
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {passos.map((p) => (
                <div key={p.numero} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-petroleo-900 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-mint">
                    {p.numero}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-ink">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/como-funciona"
                className="font-bold text-petroleo-700 hover:text-petroleo-900"
              >
                Ver em detalhes →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900 text-center">
            Tudo o que você precisa para jogar
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recursos.map((r) => (
              <div
                key={r.titulo}
                className="rounded-2xl border border-petroleo-50 bg-white p-6 hover:border-petroleo-100 transition"
              >
                <span className="text-petroleo-500 font-bold">✓</span>
                <h3 className="mt-2 font-semibold text-ink">{r.titulo}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {r.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-petroleo-900">
          <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                Tem uma quadra?{" "}
                <span className="text-mint">Lote sua agenda.</span>
              </h2>
              <p className="mt-5 text-petroleo-100 leading-relaxed">
                Painel completo para gerenciar horários, reservas, bloqueios e
                faturamento. Sem planilha, sem caderno e sem telefone tocando o
                dia inteiro.
              </p>
              <ul className="mt-6 space-y-3 text-petroleo-100">
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span> Agenda com
                  reservas em tempo real
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span> Recebimento
                  automático via Mercado Pago
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span> Relatório de
                  receita e ocupação
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span> Divulgação
                  para jogadores da sua região
                </li>
              </ul>
              <Link
                href="/para-donos-de-quadra"
                className="mt-8 inline-block rounded-xl bg-mint px-6 py-3.5 font-bold text-petroleo-900 hover:brightness-95 transition"
              >
                Anunciar minha quadra
              </Link>
            </div>
            <div
              className="rounded-2xl border border-petroleo-800 bg-petroleo-800/50 p-6"
              aria-hidden="true"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-petroleo-900 border border-petroleo-700 p-4">
                  <div className="h-2 w-16 rounded bg-petroleo-700" />
                  <div className="mt-3 h-6 w-20 rounded bg-mint" />
                </div>
                <div className="rounded-xl bg-petroleo-900 border border-petroleo-700 p-4">
                  <div className="h-2 w-16 rounded bg-petroleo-700" />
                  <div className="mt-3 h-6 w-14 rounded bg-white/80" />
                </div>
                <div className="col-span-2 rounded-xl bg-petroleo-900 border border-petroleo-700 p-4">
                  <div className="h-2 w-24 rounded bg-petroleo-700" />
                  <div className="mt-3 flex items-end gap-2">
                    <div className="h-8 w-6 rounded bg-petroleo-700" />
                    <div className="h-12 w-6 rounded bg-petroleo-500" />
                    <div className="h-10 w-6 rounded bg-petroleo-700" />
                    <div className="h-16 w-6 rounded bg-mint" />
                    <div className="h-12 w-6 rounded bg-petroleo-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900">
            Ficou com dúvida?
          </h2>
          <p className="mt-4 text-ink-muted">
            Reunimos as perguntas mais comuns de jogadores e donos de quadra.
          </p>
          <Link
            href="/faq"
            className="mt-8 inline-block rounded-xl border-2 border-petroleo-900 px-6 py-3.5 font-bold text-petroleo-900 hover:bg-petroleo-900 hover:text-white transition"
          >
            Ver perguntas frequentes
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl bg-petroleo-900 px-8 py-16 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
              Bora pro <span className="text-mint">jogo?</span>
            </h2>
            <p className="mt-4 text-petroleo-100 max-w-xl mx-auto">
              Baixe a GolNext e reserve sua próxima partida em segundos.
            </p>
            <a
              href="#baixar"
              className="mt-8 inline-block rounded-xl bg-mint px-8 py-4 font-bold text-petroleo-900 hover:brightness-95 transition"
            >
              Em breve no Google Play
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
