import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anuncie sua quadra e lote sua agenda",
  description:
    "Cadastre sua quadra esportiva no GolNext: agenda em tempo real, pagamentos automáticos via Mercado Pago, relatórios de receita e divulgação para jogadores da sua região.",
  alternates: { canonical: "/para-donos-de-quadra" },
};

const beneficios = [
  {
    titulo: "Agenda sem conflito",
    texto:
      "Horários livres e reservados atualizados em tempo real. Bloqueie horários para manutenção ou eventos quando precisar.",
  },
  {
    titulo: "Receba sem correr atrás",
    texto:
      "O jogador paga pelo app na hora da reserva, via Pix ou cartão, com processamento do Mercado Pago.",
  },
  {
    titulo: "Faturamento na palma da mão",
    texto:
      "Painel com receita do mês, reservas do dia, taxa de ocupação e histórico completo.",
  },
  {
    titulo: "Divulgação automática",
    texto:
      "Sua quadra aparece para todos os jogadores da região que buscam horário. Fotos, comodidades e avaliações à vista.",
  },
  {
    titulo: "Lanchonete integrada",
    texto:
      "Cadastre o cardápio da sua lanchonete e venda para quem já está na quadra.",
  },
  {
    titulo: "Sem mensalidade para começar",
    texto:
      "Cadastre sua quadra gratuitamente. Você só participa quando as reservas acontecem.",
  },
];

const passos = [
  {
    numero: "1",
    titulo: "Cadastre-se no app",
    texto: "Crie sua conta gratuita com email e telefone.",
  },
  {
    numero: "2",
    titulo: "Anuncie sua quadra",
    texto:
      "Adicione fotos, endereço, preço por hora, comodidades e horários de funcionamento.",
  },
  {
    numero: "3",
    titulo: "Aprovação e publicação",
    texto:
      "Nossa equipe revisa o anúncio e sua quadra entra no ar para jogadores da região.",
  },
  {
    numero: "4",
    titulo: "Gerencie e fature",
    texto:
      "Acompanhe reservas e receita pelo painel do proprietário, em tempo real.",
  },
];

export default function ParaDonosDeQuadra() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <header className="bg-petroleo-900">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
              Sua quadra cheia, <span className="text-mint">sem dor de cabeça</span>
            </h1>
            <p className="mt-4 text-petroleo-100 text-lg">
              A GolNext cuida da agenda, dos pagamentos e da divulgação. Você
              cuida do jogo.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900 text-center">
            Por que anunciar na GolNext
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-petroleo-50 p-6"
              >
                <span className="text-petroleo-500 font-bold">✓</span>
                <h3 className="mt-2 font-semibold text-ink">{b.titulo}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-petroleo-50/50">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-petroleo-900 text-center">
              Comece em 4 passos
            </h2>
            <div className="mt-12 space-y-8">
              {passos.map((p) => (
                <article key={p.numero} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-petroleo-900 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-mint">
                    {p.numero}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-ink">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-ink-soft">{p.texto}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-petroleo-900 px-8 py-14 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
              Quer conversar antes? <span className="text-mint">Fale com a gente.</span>
            </h2>
            <p className="mt-4 text-petroleo-100">
              Nossa equipe ajuda você a colocar sua quadra no ar.
            </p>
            <a
              href="mailto:suporte@golnext.com?subject=Quero%20anunciar%20minha%20quadra"
              className="mt-8 inline-block rounded-xl bg-mint px-8 py-4 font-bold text-petroleo-900 hover:brightness-95 transition"
            >
              suporte@golnext.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
