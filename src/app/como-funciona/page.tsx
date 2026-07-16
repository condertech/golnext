import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Como funciona a reserva de quadras",
  description:
    "Veja como reservar uma quadra esportiva pelo GolNext em 3 passos: encontre quadras perto de você, escolha o horário livre e pague pelo app com Pix ou cartão.",
  alternates: { canonical: "/como-funciona" },
};

const etapas = [
  {
    numero: "1",
    titulo: "Encontre quadras perto de você",
    texto:
      "Ao abrir o app e permitir a localização, a GolNext mostra as quadras disponíveis na sua região. Cada quadra tem fotos, endereço, preço por hora, comodidades (vestiário, estacionamento, iluminação, lanchonete) e avaliações de jogadores que já estiveram lá.",
  },
  {
    numero: "2",
    titulo: "Escolha o dia e o horário",
    texto:
      "A agenda de cada quadra é atualizada em tempo real. Você vê exatamente quais horários estão livres, escolhe o que encaixa no seu racha e confirma. Sem ligação, sem espera e sem risco de horário duplicado.",
  },
  {
    numero: "3",
    titulo: "Pague pelo app e jogue",
    texto:
      "O pagamento é feito direto no app, com Pix ou cartão, processado pelo Mercado Pago. A reserva fica confirmada na hora, com comprovante no seu histórico. No dia do jogo é só chegar e entrar em campo.",
  },
  {
    numero: "4",
    titulo: "Avalie a experiência",
    texto:
      "Depois da partida, você avalia a quadra com nota e comentário. Sua avaliação ajuda outros jogadores a escolher bem e incentiva os donos a manter a estrutura em dia.",
  },
];

export default function ComoFunciona() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <header className="bg-petroleo-900">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
              Como funciona a <span className="text-mint">GolNext</span>
            </h1>
            <p className="mt-4 text-petroleo-100 text-lg">
              Da busca ao apito inicial em poucos toques. Veja o passo a passo
              de uma reserva.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-16 space-y-10">
          {etapas.map((e) => (
            <article key={e.numero} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-petroleo-900 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-mint">
                {e.numero}
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-ink">
                  {e.titulo}
                </h2>
                <p className="mt-3 text-ink-soft leading-relaxed">{e.texto}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
          <div className="rounded-3xl bg-petroleo-50/70 border border-petroleo-100 px-8 py-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-petroleo-900">
              Pronto para a próxima partida?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/baixar-app"
                className="rounded-xl bg-petroleo-900 px-6 py-3.5 font-bold text-white hover:bg-petroleo-800 transition"
              >
                Baixar o app
              </Link>
              <Link
                href="/faq"
                className="rounded-xl border-2 border-petroleo-900 px-6 py-3.5 font-bold text-petroleo-900 hover:bg-petroleo-900 hover:text-white transition"
              >
                Tirar dúvidas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
