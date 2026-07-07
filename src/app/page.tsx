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
    "Encontre a quadra, veja horários livres e reserve em 30 segundos. Futebol, beach tennis, vôlei e muito mais, tudo num app só.",
  url: siteUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: {
    "@type": "Organization",
    name: "GolNext",
    email: "suporte@golnext.com",
    logo: `${siteUrl}/golnext-icon.png`,
  },
};

const passos = [
  {
    numero: "01",
    titulo: "Encontre",
    texto:
      "Busque quadras perto de você, filtre por esporte, preço e horário livre.",
  },
  {
    numero: "02",
    titulo: "Reserve",
    texto:
      "Escolha o horário e pague por Pix ou cartão. Confirmação na hora.",
  },
  {
    numero: "03",
    titulo: "Jogue",
    texto:
      "Check-in por QR Code na chegada. É só entrar em campo e jogar.",
  },
];

const recursos = [
  {
    titulo: "Agenda em tempo real",
    texto: "Veja exatamente quais horários estão livres, sem ligação nem espera.",
  },
  {
    titulo: "Pague como quiser",
    texto: "Pix, cartão ou carteira digital com cashback a cada reserva.",
  },
  {
    titulo: "Monte seu time",
    texto: "Convide amigos, ache jogadores e complete a pelada num toque.",
  },
  {
    titulo: "Campeonatos",
    texto: "Inscreva-se em torneios, acompanhe chaves e rankings em tempo real.",
  },
  {
    titulo: "Check-in por QR",
    texto: "Chegou, escaneou, jogou. Entrada rápida e sem burocracia.",
  },
  {
    titulo: "Cashback e pontos",
    texto: "Ganhe recompensas a cada jogo e troque por horários grátis.",
  },
];

const esportes = [
  { nome: "Futebol", tipos: "Society · Campo · Futsal" },
  { nome: "Beach Tennis", tipos: "Areia · Dupla" },
  { nome: "Vôlei", tipos: "Quadra · Praia" },
  { nome: "Basquete", tipos: "3x3 · 5x5" },
  { nome: "Tênis", tipos: "Saibro · Rápida" },
  { nome: "Padel", tipos: "Dupla" },
];

const depoimentos = [
  {
    texto:
      "Antes eu ligava pra três quadras pra achar horário. Agora reservo do sofá em meio minuto.",
    inicial: "R",
    nome: "Rafael M.",
    papel: "Joga futebol society",
  },
  {
    texto:
      "O cashback já me deu duas horas grátis de beach tennis. Uso toda semana.",
    inicial: "C",
    nome: "Camila S.",
    papel: "Joga beach tennis",
  },
  {
    texto:
      "Coloquei minha arena e a agenda encheu. O painel é simples e o pagamento cai certinho.",
    inicial: "A",
    nome: "Arena do Zé",
    papel: "Parceiro GolNext",
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

function Stars() {
  return <div className="text-mint tracking-wider" aria-hidden="true">★★★★★</div>;
}

function FieldLines() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="pointer-events-none absolute -top-28 -right-24 h-[560px] w-[560px] opacity-10"
      aria-hidden="true"
    >
      <rect x="70" y="70" width="360" height="360" rx="10" fill="none" stroke="#1DE9B6" strokeWidth="3" />
      <line x1="250" y1="70" x2="250" y2="430" stroke="#1DE9B6" strokeWidth="3" />
      <circle cx="250" cy="250" r="66" fill="none" stroke="#1DE9B6" strokeWidth="3" />
    </svg>
  );
}

function PhoneMock() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="gn-float relative h-[570px] w-[280px] rounded-[46px] bg-deep p-3.5 shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute left-1/2 top-6 z-10 h-6 w-[90px] -translate-x-1/2 rounded-full bg-deepest" />
        <div className="flex h-full flex-col overflow-hidden rounded-[34px] bg-gradient-to-br from-petroleo-800 to-petroleo-900">
          <div className="px-5 pb-4 pt-13">
            <div className="sg text-xs text-sage">Boa noite,</div>
            <div className="wm mt-0.5 text-[22px] text-white">Bora jogar?</div>
            <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-3">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1DE9B6" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
              <span className="sg text-xs text-mist">Buscar quadra perto de mim</span>
            </div>
          </div>
          <div className="flex-1 space-y-3 px-5">
            <div className="sg text-[11px] uppercase tracking-widest text-sage">
              Disponíveis hoje
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/10 p-3.5">
              <div className="flex items-center justify-between">
                <span className="sg rounded-full bg-mint/15 px-2.5 py-1 text-[10px] font-semibold text-mint">
                  Society
                </span>
                <span className="wm text-sm text-mint">R$120</span>
              </div>
              <div className="wm mt-2 text-[15px] text-white">Arena Central</div>
              <div className="sg mt-1 text-[11px] text-sage">19:00 · 1.2km</div>
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/10 p-3.5">
              <div className="flex items-center justify-between">
                <span className="sg rounded-full bg-mint/15 px-2.5 py-1 text-[10px] font-semibold text-mint">
                  Beach
                </span>
                <span className="wm text-sm text-mint">R$90</span>
              </div>
              <div className="wm mt-2 text-[15px] text-white">Praia Norte</div>
              <div className="sg mt-1 text-[11px] text-sage">20:30 · 2.4km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar active="jogadores" />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="relative overflow-hidden bg-petroleo-900 text-petroleo-50">
          <FieldLines />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:px-10">
            <div>
              <div className="sg inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/15 px-4 py-2 text-[13px] tracking-wide text-mint">
                <span className="inline-block h-[7px] w-[7px] rounded-full bg-mint" />
                +1.200 quadras já disponíveis
              </div>
              <h1 className="wm mt-6 text-[clamp(46px,7vw,86px)] text-white">
                Sua próxima
                <br />
                partida começa
                <br />
                <span className="text-mint">aqui.</span>
              </h1>
              <p className="mt-6 max-w-[480px] text-[clamp(17px,2.2vw,21px)] leading-normal text-mist">
                Encontre a quadra, veja horários livres e reserve em 30
                segundos. Futebol, beach tennis, vôlei e muito mais, tudo num
                app só.
              </p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="#baixar"
                  className="wm rounded-full bg-mint px-8 py-4 text-lg text-deep hover:brightness-95 transition"
                >
                  Reservar agora
                </a>
                <a
                  href="#como"
                  className="sg rounded-full border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver como funciona
                </a>
              </div>
              <div className="mt-11 flex gap-8">
                {[
                  ["30s", "pra reservar"],
                  ["1.200+", "quadras"],
                  ["50k+", "jogadores"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="wm text-[34px] text-mint">{n}</div>
                    <div className="sg mt-0.5 text-[13px] text-sage">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <PhoneMock />
          </div>
        </section>

        <section className="bg-deep px-5 py-7 text-sage md:px-10">
          <div className="sg mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span>
              Reserva com <strong className="text-mint">Pix</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="text-mint">Cartão</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>Confirmação automática</span>
            <span aria-hidden="true">·</span>
            <span>Cancelamento fácil</span>
          </div>
        </section>

        <section id="como" className="scroll-mt-20 bg-petroleo-50 px-5 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
              Três toques até o apito inicial
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

        <section id="recursos" className="scroll-mt-20 bg-white px-5 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Recursos</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
              Tudo pra nunca perder um jogo
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

        <section className="bg-petroleo-900 px-5 py-24 text-petroleo-50 md:px-10">
          <div className="mx-auto max-w-6xl">
            <Eyebrow dark>Esportes</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-white">
              Qualquer quadra, qualquer esporte
            </h2>
            <p className="mt-4 max-w-xl text-mist">
              De futebol society a beach tennis, a GolNext conecta você a todos
              os tipos de quadra da sua cidade.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {esportes.map((e) => (
                <div
                  key={e.nome}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-mint/40"
                >
                  <div className="wm text-lg text-white">{e.nome}</div>
                  <div className="sg mt-1.5 text-[11px] text-sage">{e.tipos}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Para arenas</Eyebrow>
              <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
                Tem uma quadra? Lote a agenda com a GolNext.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Coloque sua arena no app, receba reservas 24h por dia e
                gerencie tudo por um painel simples. Sem mensalidade pra
                começar.
              </p>
              <ul className="mt-6 space-y-3 text-ink-soft">
                {[
                  "Painel de gestão de horários",
                  "Pagamento garantido e antecipado",
                  "Mais visibilidade, menos horário ocioso",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00796B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/para-donos-de-quadra"
                className="wm mt-8 inline-block rounded-full bg-petroleo-900 px-8 py-4 text-lg text-white hover:bg-petroleo-800 transition"
              >
                Cadastrar minha arena
              </Link>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_50px_rgba(0,53,44,0.1)]" aria-hidden="true">
              <div className="sg text-xs uppercase tracking-widest text-ink-muted">
                Faturamento do mês
              </div>
              <div className="wm mt-2 text-[44px] text-petroleo-700">
                +R$ 18.400
              </div>
              <div className="mt-6 space-y-3">
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
          </div>
        </section>

        <section className="bg-white px-5 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Quem já joga</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(32px,4.5vw,52px)] text-ink">
              O time aprova
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {depoimentos.map((d) => (
                <figure
                  key={d.nome}
                  className="rounded-3xl border border-pale bg-petroleo-50/50 p-7"
                >
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed text-ink-soft">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="wm flex h-11 w-11 items-center justify-center rounded-full bg-petroleo-900 text-mint">
                      {d.inicial}
                    </span>
                    <span>
                      <span className="block font-bold text-ink">{d.nome}</span>
                      <span className="sg block text-xs text-ink-muted">
                        {d.papel}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="baixar" className="scroll-mt-20 bg-mint px-5 py-24 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="wm text-[clamp(38px,6vw,68px)] text-deep">
              Seu próximo gol começa aqui.
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-lg text-deep-soft">
              Baixe grátis, encontre uma quadra perto de você e reserve sua
              primeira partida agora.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <a
                href="#"
                className="flex items-center gap-3 rounded-2xl bg-deep px-6 py-3.5 text-white hover:bg-deepest transition"
              >
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#1DE9B6" aria-hidden="true">
                  <path d="M17.05 12.5c0-1.9 1.55-2.8 1.62-2.85-.88-1.3-2.26-1.47-2.75-1.49-1.17-.12-2.28.69-2.87.69-.59 0-1.5-.67-2.47-.65-1.27.02-2.44.74-3.09 1.87-1.32 2.29-.34 5.67.95 7.53.63.91 1.38 1.93 2.36 1.89.95-.04 1.31-.61 2.46-.61 1.14 0 1.47.61 2.47.59 1.02-.02 1.66-.93 2.28-1.84.72-1.06 1.02-2.08 1.03-2.13-.02-.01-1.97-.76-1.97-3zM15.2 6.3c.52-.63.87-1.51.77-2.39-.75.03-1.66.5-2.2 1.13-.48.55-.9 1.44-.79 2.29.84.06 1.69-.42 2.22-1.03z" />
                </svg>
                <span className="text-left">
                  <span className="sg block text-[11px] opacity-80">Baixe na</span>
                  <span className="block font-[family-name:var(--font-archivo)] text-base font-extrabold">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-2xl bg-deep px-6 py-3.5 text-white hover:bg-deepest transition"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#1DE9B6" aria-hidden="true">
                  <path d="M3.6 2.3 13.7 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zm11.5 8.3 2.6-2.5 3.4 1.9c.8.5.8 1.5 0 2l-3.4 1.9-2.6-2.5-.4-.4.4-.4zM5.3 1.9l9.3 8.7-2.3 2.2L5.3 1.9zm0 20.2 7-10.9 2.3 2.2-9.3 8.7z" />
                </svg>
                <span className="text-left">
                  <span className="sg block text-[11px] opacity-80">
                    Disponível no
                  </span>
                  <span className="block font-[family-name:var(--font-archivo)] text-base font-extrabold">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
            <p className="sg mt-6 text-sm text-deep-soft">
              Sem mensalidade pra começar
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
