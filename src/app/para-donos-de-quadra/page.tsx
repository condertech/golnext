import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lote a agenda da sua quadra",
  description:
    "Coloque sua arena no app da GolNext, receba reservas 24h por dia com pagamento antecipado e acabe com o horário ocioso. Sem mensalidade pra começar.",
  alternates: { canonical: "/para-donos-de-quadra" },
};

const passos = [
  {
    numero: "01",
    titulo: "Cadastre a arena",
    texto:
      "Adicione fotos, esportes, quadras e preços. Leva menos de 10 minutos.",
  },
  {
    numero: "02",
    titulo: "Defina a agenda",
    texto:
      "Configure horários, valores por período e regras de cancelamento.",
  },
  {
    numero: "03",
    titulo: "Receba e fature",
    texto:
      "Reservas caem direto na agenda com pagamento antecipado. O repasse é automático.",
  },
];

const recursos = [
  {
    titulo: "Agenda inteligente",
    texto:
      "Múltiplas quadras, bloqueios e reservas recorrentes num calendário só.",
  },
  {
    titulo: "Relatórios de receita",
    texto:
      "Acompanhe faturamento, ocupação e horários de pico em tempo real.",
  },
  {
    titulo: "Pagamento antecipado",
    texto:
      "O jogador paga na reserva. Você recebe via Pix, sem calote nem no-show.",
  },
  {
    titulo: "Preço dinâmico",
    texto:
      "Cobre mais nos horários de pico e preencha os vazios com promoções.",
  },
  {
    titulo: "Mais visibilidade",
    texto:
      "Apareça pra milhares de jogadores buscando quadra perto de você.",
  },
  {
    titulo: "Sedie campeonatos",
    texto:
      "Hospede torneios da GolNext e atraia novos jogadores para a arena.",
  },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`sg text-[13px] font-semibold uppercase tracking-[0.14em] ${
        dark ? "text-mint" : "text-petroleo-700"
      }`}
    >
      {children}
    </div>
  );
}

function PainelMock() {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-[0_30px_70px_rgba(0,0,0,0.3)]" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="wm text-lg text-ink">
          Painel <span className="text-petroleo-700">Arena</span>
        </span>
        <span className="sg rounded-full bg-pale px-3 py-1 text-[11px] font-semibold text-ink-soft">
          Hoje
        </span>
      </div>
      <div className="sg mt-5 text-xs uppercase tracking-widest text-ink-muted">
        Faturamento do mês
      </div>
      <div className="wm mt-1 text-[40px] text-petroleo-700">+R$ 18.400</div>
      <div className="mt-5 space-y-3">
        {[
          ["19:00 · Quadra 1", "Reservada", true],
          ["20:00 · Quadra 2", "Reservada", true],
          ["21:00 · Quadra 1", "Livre", false],
        ].map(([hora, status, on]) => (
          <div
            key={hora as string}
            className="flex items-center justify-between rounded-xl border border-pale px-4 py-3"
          >
            <span className="sg text-sm text-ink-soft">{hora}</span>
            <span
              className={`sg rounded-full px-3 py-1 text-[11px] font-semibold ${
                on ? "bg-mint/20 text-petroleo-700" : "bg-pale text-ink-muted"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ParaDonosDeQuadra() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-petroleo-900 text-petroleo-50">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:px-10 md:pb-24 md:pt-20">
            <div>
              <h1 className="wm text-[clamp(42px,6vw,72px)] text-white">
                Lote a agenda
                <br />
                da sua <span className="text-mint">quadra.</span>
              </h1>
              <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-mist">
                Coloque sua arena no app da GolNext, receba reservas 24h por
                dia com pagamento antecipado e acabe com o horário ocioso.
              </p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="mailto:suporte@golnext.com?subject=Quero%20cadastrar%20minha%20arena"
                  className="wm rounded-full bg-mint px-8 py-4 text-lg text-deep hover:brightness-95 transition"
                >
                  Cadastrar minha arena
                </a>
                <a
                  href="#recursos"
                  className="sg rounded-full border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver recursos
                </a>
              </div>
              <div className="mt-11 flex flex-wrap gap-8">
                {[
                  ["+38%", "ocupação média"],
                  ["24h", "recebendo reservas"],
                  ["0", "mensalidade inicial"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="wm text-[34px] text-mint">{n}</div>
                    <div className="sg mt-0.5 text-[13px] text-sage">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <PainelMock />
          </div>
        </section>

        <section className="bg-deep px-5 py-7 text-sage md:px-10">
          <div className="sg mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="text-white">Você recebe</span>
            <span>
              <strong className="text-mint">Pagamento antecipado</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>Repasse via Pix</span>
            <span aria-hidden="true">·</span>
            <span>Zero no-show</span>
            <span aria-hidden="true">·</span>
            <span>Suporte dedicado</span>
          </div>
        </section>

        <section id="como" className="scroll-mt-20 bg-petroleo-50 px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
              Da inscrição à primeira reserva
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {passos.map((p) => (
                <div
                  key={p.numero}
                  className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(0,53,44,0.06)]"
                >
                  <div className="wm text-[42px] text-pale">{p.numero}</div>
                  <h3 className="wm mt-3 text-2xl text-ink">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recursos" className="scroll-mt-20 bg-white px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Recursos para arenas</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
              Gestão completa num painel só
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recursos.map((r) => (
                <div
                  key={r.titulo}
                  className="rounded-3xl border border-pale bg-petroleo-50/60 p-7 transition hover:border-petroleo-300"
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#00796B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <h3 className="wm mt-4 text-xl text-ink">{r.titulo}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                    {r.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-mint" aria-hidden="true">★★★★★</div>
            <blockquote className="wm mt-6 text-[clamp(22px,3vw,32px)] leading-snug text-ink">
              “Coloquei minhas 3 quadras na GolNext e em dois meses a ocupação
              nos fins de semana bateu 100%. O painel é simples e o dinheiro
              cai certinho.”
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="wm flex h-12 w-12 items-center justify-center rounded-full bg-petroleo-900 text-mint">
                Z
              </span>
              <span className="text-left">
                <span className="block font-bold text-ink">José Almeida</span>
                <span className="sg block text-xs text-ink-muted">
                  Dono da Arena do Zé · São Paulo
                </span>
              </span>
            </div>
          </div>
        </section>

        <section id="baixar" className="scroll-mt-20 bg-mint px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="wm text-[clamp(38px,6vw,68px)] text-deep">
              Cadastre sua arena hoje.
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-lg text-deep-soft">
              Sem mensalidade pra começar. Coloque sua quadra no ar e receba a
              primeira reserva ainda esta semana.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <a
                href="mailto:suporte@golnext.com?subject=Quero%20cadastrar%20minha%20arena"
                className="wm rounded-full bg-deep px-8 py-4 text-lg text-white hover:bg-deepest transition"
              >
                Quero cadastrar minha arena
              </a>
              <a
                href="mailto:suporte@golnext.com?subject=Falar%20com%20um%20consultor"
                className="sg rounded-full border-2 border-deep px-7 py-4 font-semibold text-deep hover:bg-deep hover:text-white transition"
              >
                Falar com um consultor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
