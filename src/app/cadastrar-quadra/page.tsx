import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cadastrar Quadra e Gerenciar sua Arena",
  description:
    "Cadastre sua quadra na GolNext e gerencie agenda, reservas, mesas, PDV, cardápio online, estoque, caixa e pagamentos com repasse diário.",
  alternates: { canonical: "/cadastrar-quadra" },
  openGraph: {
    title: "Cadastre e gerencie sua quadra com a GolNext",
    description:
      "Sistema completo para quadras e arenas: reservas, PDV, mesas, cardápio online, financeiro e repasse diário.",
    url: "/cadastrar-quadra",
    type: "website",
    images: [
      {
        url: "/IMG_1813.PNG",
        width: 1536,
        height: 1024,
        alt: "Painel de gestão de quadras GolNext",
      },
    ],
  },
};

const modulos = [
  ["Dashboard", "Visão geral de reservas, vendas, ocupação e resultados da arena."],
  ["Quadras", "Gerencie várias quadras, modalidades, preços e disponibilidade."],
  ["Agenda", "Visualize horários, bloqueios e recorrências em um calendário centralizado."],
  ["Reservas", "Acompanhe novas reservas, confirmações, alterações e cancelamentos."],
  ["Financeiro", "Acompanhe recebimentos, taxas, repasses e fluxo de caixa."],
  ["Pedidos", "Organize pedidos do balcão, mesas e comandas em tempo real."],
  ["PDV", "Registre vendas, pagamentos e produtos diretamente no ponto de venda."],
  ["Mesas", "Controle mesas, comandas abertas, consumo e fechamento da conta."],
  ["Cardápio online", "Produtos, adicionais, preços e disponibilidade acessíveis por QR Code."],
  ["Estoque", "Controle entradas, saídas, consumo e alertas de produtos com baixo estoque."],
  ["Caixa", "Registre abertura, movimentações, sangrias e fechamento do caixa."],
  ["Pagamentos", "Consulte transações, formas de pagamento e situação de cada recebimento."],
  ["Funcionários", "Cadastre a equipe e organize níveis de acesso ao painel da arena."],
  ["Relatórios", "Analise faturamento, ocupação, vendas, produtos e desempenho da operação."],
  ["Impressão", "Prepare comandas, pedidos, fechamentos e comprovantes para impressão."],
] as const;

const dadosCadastro = [
  "Nome da arena, CPF ou CNPJ e dados de contato",
  "Endereço completo e localização das quadras",
  "Chave Pix ou conta bancária para os repasses",
  "Modalidades, quantidade de quadras e estrutura disponível",
  "Horários de funcionamento, duração e preço das reservas",
  "Fotos da arena, regras de uso e política de cancelamento",
  "Produtos e cardápio, caso utilize o PDV da GolNext",
] as const;

const faq = [
  {
    pergunta: "Posso cadastrar mais de uma quadra?",
    resposta:
      "Sim. A arena pode ter várias quadras, modalidades, tabelas de preço e agendas independentes no mesmo painel.",
  },
  {
    pergunta: "Como funciona o repasse diário?",
    resposta:
      "Os valores elegíveis de reservas e vendas processadas pela plataforma são organizados para repasse diário à conta cadastrada, com o histórico disponível no financeiro.",
  },
  {
    pergunta: "O PDV também controla mesas e comandas?",
    resposta:
      "Sim. É possível abrir mesas ou comandas, registrar produtos, acompanhar pedidos e fechar o pagamento no caixa.",
  },
  {
    pergunta: "Preciso usar o cardápio online?",
    resposta:
      "Não. O cardápio e o PDV são módulos para arenas que também vendem bebidas, alimentos, locações ou outros produtos.",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Cadastro e gestão de quadras GolNext",
      serviceType: "Sistema de gestão e reservas para arenas esportivas",
      url: `${siteUrl}/cadastrar-quadra`,
      description:
        "Gestão de quadras, agenda, reservas, PDV, mesas, cardápio, estoque, caixa e pagamentos.",
      provider: { "@type": "Organization", name: "GolNext", url: siteUrl },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: { "@type": "Answer", text: item.resposta },
      })),
    },
  ],
};

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function CadastrarQuadraPage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="overflow-hidden bg-deep px-5 py-16 text-white sm:py-20 md:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative z-10">
              <nav aria-label="Navegação estrutural" className="sg text-sm text-sage">
                <Link href="/" className="hover:text-white">Início</Link>
                <span aria-hidden="true"> / </span>
                <span>Cadastrar quadra</span>
              </nav>
              <h1 className="wm mt-6 text-[clamp(42px,10vw,76px)]">
                Sua arena inteira em <span className="text-mint">um só lugar.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                Cadastre suas quadras e gerencie agenda, reservas, mesas, PDV, cardápio, estoque, caixa e pagamentos pelo painel da GolNext.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap">
                <a
                  href="mailto:suporte@golnext.com?subject=Quero%20cadastrar%20minha%20quadra"
                  className="wm rounded-full bg-mint px-8 py-4 text-center text-lg text-deep transition hover:bg-white"
                >
                  Cadastrar minha quadra
                </a>
                <a
                  href="#sistema"
                  className="sg rounded-full border border-white/30 px-7 py-4 text-center font-semibold transition hover:bg-white/10"
                >
                  Conhecer o sistema
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[680px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/IMG_1813.PNG"
                  alt="Gestor utilizando o painel de quadras, agenda e reservas GolNext"
                  fill
                  sizes="(min-width: 1024px) 620px, calc(100vw - 40px)"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mint px-5 py-5 text-deep md:px-10">
          <div className="sg mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 text-center text-sm font-bold sm:text-base">
            <span>Repasse diário</span>
            <span aria-hidden="true">•</span>
            <span>Reservas 24 horas</span>
            <span aria-hidden="true">•</span>
            <span>PDV integrado</span>
            <span aria-hidden="true">•</span>
            <span>Gestão completa</span>
          </div>
        </section>

        <section id="sistema" className="scroll-mt-24 bg-petroleo-50 px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <aside className="rounded-3xl bg-petroleo-900 p-5 text-white lg:sticky lg:top-24 lg:self-start" aria-label="Módulos do sistema">
              <p className="sg px-3 pb-3 text-xs font-bold uppercase tracking-[0.18em] text-mint">Painel da arena</p>
              <ul className="space-y-1">
                {modulos.map(([titulo], index) => (
                  <li key={titulo} className={`sg flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${index === 0 ? "bg-white/10 text-mint" : "text-mist"}`}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                    {titulo}
                  </li>
                ))}
              </ul>
            </aside>

            <div>
              <h2 className="wm max-w-3xl text-[clamp(36px,7vw,60px)] text-ink">
                Tudo que sua quadra precisa para operar melhor.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Da reserva ao consumo no bar, cada operação fica conectada e registrada no mesmo sistema.
              </p>
              <div className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {modulos.map(([titulo, texto], index) => (
                  <article key={titulo} className="border-b border-pale py-6">
                    <div className="flex items-start gap-4">
                      <span className="wm flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-deep">{index + 1}</span>
                      <div>
                        <h3 className="wm text-2xl text-ink">{titulo}</h3>
                        <p className="mt-2 leading-relaxed text-ink-soft">{texto}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-deep px-5 py-16 text-white sm:py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="wm text-[clamp(36px,7vw,60px)]">
                PDV, mesas e cardápio <span className="text-mint">trabalhando juntos.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-mist">
                Registre vendas, abra comandas, envie pedidos e atualize o cardápio sem separar a operação da arena em vários aplicativos.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Cardápio online por QR Code com preços e adicionais",
                  "Pedidos vinculados a mesas, clientes ou comandas",
                  "Baixa automática e alertas de estoque",
                  "Abertura, sangria e fechamento de caixa",
                  "Relatórios de vendas e produtos mais vendidos",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-mist">
                    <span className="mt-0.5 shrink-0 text-mint"><Check /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-deepest p-5 shadow-[0_30px_70px_rgba(0,0,0,0.3)] sm:p-7" aria-label="Exemplo do painel de PDV">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="sg block text-xs uppercase tracking-widest text-sage">PDV GolNext</span>
                  <span className="wm mt-1 block text-2xl">Comanda 12</span>
                </div>
                <span className="sg rounded-full bg-mint px-3 py-1.5 text-xs font-bold text-deep">Mesa 04</span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["2× Água mineral", "R$ 12,00"],
                  ["1× Porção da casa", "R$ 38,00"],
                  ["1× Isotônico", "R$ 9,00"],
                  ["1× Locação de raquete", "R$ 20,00"],
                ].map(([item, valor]) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                    <span className="text-mist">{item}</span>
                    <span className="sg font-semibold text-white">{valor}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="sg text-sage">Total</span>
                <span className="wm text-3xl text-mint">R$ 79,00</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mint px-5 py-16 text-deep sm:py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="wm text-[clamp(38px,8vw,64px)]">Venda hoje. Receba todos os dias.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-deep-soft">
                Reservas e vendas processadas pela plataforma ficam organizadas no financeiro, com repasse diário dos valores elegíveis para a conta cadastrada.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["01", "O cliente paga", "Reserva, pedido ou consumo é registrado no sistema."],
                ["02", "A GolNext organiza", "Taxas e movimentações ficam detalhadas no financeiro."],
                ["03", "Você recebe", "O repasse diário vai para a conta informada no cadastro."],
              ].map(([numero, titulo, texto]) => (
                <div key={numero} className="flex gap-4 border-b border-deep/15 py-4">
                  <span className="wm text-3xl text-petroleo-700">{numero}</span>
                  <div>
                    <h3 className="wm text-xl">{titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-deep-soft">{texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="wm text-[clamp(36px,7vw,56px)] text-ink">O que precisamos para cadastrar.</h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Com estas informações, a equipe prepara a arena, as agendas e os recebimentos corretamente.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {dadosCadastro.map((item) => (
                <li key={item} className="flex gap-3 border-b border-pale py-4 text-ink-soft">
                  <span className="mt-0.5 shrink-0 text-petroleo-700"><Check /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-16 sm:py-20 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="wm text-center text-[clamp(36px,7vw,56px)] text-ink">Dúvidas antes de cadastrar?</h2>
            <div className="mt-10 divide-y divide-pale border-y border-pale">
              {faq.map((item) => (
                <details key={item.pergunta} className="group py-5">
                  <summary className="wm flex cursor-pointer list-none items-center justify-between gap-5 text-xl text-ink">
                    {item.pergunta}
                    <span className="text-petroleo-700 transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{item.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep px-5 py-16 text-center text-white sm:py-20 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="wm text-[clamp(40px,9vw,70px)]">Pronto para organizar e vender mais?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist">
              Fale com a GolNext para cadastrar sua estrutura e configurar o painel da sua arena.
            </p>
            <a
              href="mailto:suporte@golnext.com?subject=Cadastro%20de%20quadra%20na%20GolNext"
              className="wm mt-8 inline-flex rounded-full bg-mint px-8 py-4 text-lg text-deep transition hover:bg-white"
            >
              Começar meu cadastro
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
