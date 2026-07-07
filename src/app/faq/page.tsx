import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Tire suas dúvidas sobre o GolNext: como reservar quadra, formas de pagamento, cancelamento, cadastro de quadras e segurança dos seus dados.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    pergunta: "O GolNext é gratuito?",
    resposta:
      "Sim. Baixar o app, criar conta e buscar quadras é gratuito. Você paga apenas o valor da reserva da quadra que escolher.",
  },
  {
    pergunta: "Como faço para reservar uma quadra?",
    resposta:
      "Abra o app, permita a localização, escolha uma quadra perto de você, selecione o dia e o horário livre na agenda e confirme o pagamento. A reserva é confirmada na hora.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "Pix e cartão de crédito, processados com segurança pelo Mercado Pago. Não armazenamos os dados do seu cartão.",
  },
  {
    pergunta: "Posso cancelar uma reserva?",
    resposta:
      "Sim. O cancelamento pode ser feito pelo app na área Minhas Reservas. As condições de reembolso dependem da antecedência do cancelamento e da política da quadra.",
  },
  {
    pergunta: "Tenho uma quadra. Como coloco ela no GolNext?",
    resposta:
      "Crie sua conta no app e use a opção Anunciar Quadra, adicionando fotos, endereço, preço e comodidades. Nossa equipe revisa o anúncio e, após a aprovação, sua quadra fica visível para os jogadores da região.",
  },
  {
    pergunta: "Como recebo o dinheiro das reservas da minha quadra?",
    resposta:
      "Os pagamentos dos jogadores são processados pelo Mercado Pago e repassados para a conta cadastrada do proprietário.",
  },
  {
    pergunta: "Meus dados estão seguros?",
    resposta:
      "Sim. Usamos conexões criptografadas (HTTPS), senhas protegidas com hashing e regras de acesso no banco de dados, em conformidade com a LGPD. Veja os detalhes na nossa Política de Privacidade.",
  },
  {
    pergunta: "Em quais cidades o GolNext está disponível?",
    resposta:
      "O GolNext está em expansão. A disponibilidade de quadras depende da sua região, e novas quadras entram na plataforma toda semana.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.pergunta,
    acceptedAnswer: { "@type": "Answer", text: f.resposta },
  })),
};

export default function Faq() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <header className="bg-petroleo-900">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
              Perguntas <span className="text-mint">frequentes</span>
            </h1>
            <p className="mt-4 text-petroleo-100 text-lg">
              Dúvidas de jogadores e donos de quadra, respondidas.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-16 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.pergunta}
              className="group rounded-2xl border border-petroleo-50 p-6 open:border-petroleo-100 open:bg-petroleo-50/40"
            >
              <summary className="cursor-pointer list-none font-semibold text-ink flex items-center justify-between gap-4">
                {f.pergunta}
                <span className="text-petroleo-500 transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink-soft leading-relaxed">{f.resposta}</p>
            </details>
          ))}
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
          <p className="text-ink-muted">
            Não achou sua resposta? Fale com a gente em{" "}
            <a
              href="mailto:suporte@golnext.com"
              className="font-bold text-petroleo-700 hover:text-petroleo-900"
            >
              suporte@golnext.com
            </a>
          </p>
          <Link
            href="/"
            className="mt-6 inline-block font-bold text-petroleo-700 hover:text-petroleo-900"
          >
            ← Voltar para o início
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
