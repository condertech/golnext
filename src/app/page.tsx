import Image from "next/image";
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
    "Encontre quadras esportivas, veja horários livres e reserve em poucos toques.",
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
    titulo: "Ache a quadra",
    texto:
      "Busque por esporte, bairro, preço e horário livre sem ligar para várias arenas.",
  },
  {
    numero: "02",
    titulo: "Feche o horário",
    texto:
      "Reserve pelo app, pague com segurança e receba confirmação na hora.",
  },
  {
    numero: "03",
    titulo: "Jogue ou receba",
    texto:
      "Jogadores chegam com tudo certo. Arenas mantêm agenda, pagamentos e ocupação sob controle.",
  },
];

const esportes = [
  { nome: "Futebol", tipos: "Society, campo e futsal", icon: "soccer" },
  { nome: "Beach tennis", tipos: "Areia, dupla e aula", icon: "racket" },
  { nome: "Vôlei", tipos: "Quadra e praia", icon: "volley" },
  { nome: "Basquete", tipos: "3x3 e 5x5", icon: "basket" },
  { nome: "Tênis", tipos: "Saibro e rápida", icon: "tennis" },
  { nome: "Padel", tipos: "Duplas e torneios", icon: "padel" },
];

const recursos = [
  {
    titulo: "Agenda viva",
    texto:
      "Horários livres, bloqueios, reservas recorrentes e confirmações em tempo real.",
  },
  {
    titulo: "Pagamento simples",
    texto:
      "Pix e cartão para o jogador, repasse organizado para quem administra a quadra.",
  },
  {
    titulo: "Mais jogo marcado",
    texto:
      "Convites, lista de jogadores, campeonatos e visibilidade para preencher horários vazios.",
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

function SportIcon({ type }: { type: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "racket" || type === "padel" || type === "tennis") {
    return (
      <svg {...common}>
        <ellipse cx="9" cy="8" rx="4.5" ry="6" />
        <path d="m12 13 6.5 6.5" />
        <path d="m16.5 18.5 2-2" />
        <path d="M7 5.5h4" />
        <path d="M6.5 8.5h5" />
        <path d="M7 11.5h4" />
      </svg>
    );
  }

  if (type === "basket") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4.5 9.5c4 1.4 8 1.4 15 0" />
        <path d="M4.5 14.5c4-1.4 8-1.4 15 0" />
        <path d="M12 4c-2 2.5-2 13 0 16" />
        <path d="M12 4c2 2.5 2 13 0 16" />
      </svg>
    );
  }

  if (type === "volley") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4c.8 3.6 3 5.5 7.5 6" />
        <path d="M4.6 9.2c3.2-.2 5.9 1 8.4 3.8" />
        <path d="M8.4 19c.5-3.2 2.4-5.6 5.8-7.2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8 6 4-2 4 2 1 4-3 3h-4l-3-3Z" />
      <path d="m10 13-2 6" />
      <path d="m14 13 2 6" />
      <path d="M7 10 4.5 12" />
      <path d="M17 10 19.5 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
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

function FieldAccent() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[520px] -translate-x-1/2 text-mint/20"
      aria-hidden="true"
    >
      <rect x="48" y="38" width="324" height="184" rx="12" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="210" y1="38" x2="210" y2="222" stroke="currentColor" strokeWidth="3" />
      <circle cx="210" cy="130" r="42" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="relative min-h-[760px] overflow-hidden bg-deepest text-white">
          <Image
            src="/golnext-hero-players.png"
            alt="Jogadores comemorando em uma quadra esportiva"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,25,0.96)_0%,rgba(0,53,44,0.86)_34%,rgba(0,53,44,0.38)_68%,rgba(0,31,25,0.16)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-deepest to-transparent" />
          <FieldAccent />
          <div className="relative mx-auto flex min-h-[760px] max-w-6xl items-center px-5 py-20 md:px-10">
            <div className="max-w-[620px]">
              <h1 className="wm text-[clamp(48px,8vw,92px)] text-white">
                Marque a quadra.
                <br />
                Chame o time.
                <br />
                <span className="text-mint">Jogue mais.</span>
              </h1>
              <p className="mt-6 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-relaxed text-petroleo-100">
                A GolNext conecta quem quer jogar com quem tem quadra para
                receber. Reserve horários, encontre esportes perto de você e
                ajude arenas a manter a agenda cheia.
              </p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="#comece"
                  className="wm rounded-full bg-mint px-8 py-4 text-lg text-deep hover:brightness-95 transition"
                >
                  Começar agora
                </a>
                <a
                  href="#esportes"
                  className="sg rounded-full border border-white/35 px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver esportes
                </a>
              </div>
              <div className="mt-10 grid max-w-[360px] grid-cols-2 gap-3">
                {[
                  ["30s", "pra reservar"],
                  ["24h", "agenda online"],
                ].map(([n, l]) => (
                  <div key={l} className="border-l border-mint/35 pl-4">
                    <div className="wm text-[30px] text-mint">{n}</div>
                    <div className="sg mt-0.5 text-[12px] text-sage">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="esportes" className="scroll-mt-24 bg-petroleo-50 px-5 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Esportes de quadra</Eyebrow>
                <h2 className="wm mt-3 text-[clamp(34px,5vw,58px)] text-ink">
                  Do racha ao torneio, tudo cabe aqui.
                </h2>
              </div>
              <p className="max-w-md text-ink-soft">
                Ícones rápidos para o jogador encontrar o que procura e para a
                arena mostrar tudo que oferece.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {esportes.map((e) => (
                <div
                  key={e.nome}
                  className="group rounded-2xl border border-pale bg-white p-5 shadow-[0_10px_24px_rgba(0,53,44,0.05)] transition hover:-translate-y-1 hover:border-petroleo-300"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-mint/18 text-petroleo-800 transition group-hover:bg-petroleo-900 group-hover:text-mint">
                    <SportIcon type={e.icon} />
                  </div>
                  <div className="wm mt-4 text-lg text-ink">{e.nome}</div>
                  <div className="sg mt-1.5 text-[12px] leading-snug text-ink-muted">
                    {e.tipos}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como" className="scroll-mt-24 bg-white px-5 py-22 md:px-10">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="wm mt-3 text-[clamp(34px,5vw,58px)] text-ink">
              Menos conversa, mais jogo marcado.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {passos.map((p) => (
                <div
                  key={p.numero}
                  className="rounded-2xl border border-pale bg-petroleo-50/70 p-7"
                >
                  <div className="wm text-[38px] text-petroleo-300">{p.numero}</div>
                  <h3 className="wm mt-3 text-2xl text-ink">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recursos" className="scroll-mt-24 bg-deep px-5 py-22 text-petroleo-50 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Eyebrow dark>Para jogadores e arenas</Eyebrow>
              <h2 className="wm mt-3 text-[clamp(34px,5vw,58px)] text-white">
                Uma plataforma para os dois lados da quadra.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-mist">
                Quem joga encontra horário. Quem administra vende melhor, reduz
                no-show e acompanha tudo sem depender de mensagens soltas.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {recursos.map((r) => (
                <div key={r.titulo} className="rounded-2xl border border-white/10 bg-white/6 p-6">
                  <div className="text-mint">
                    <CheckIcon />
                  </div>
                  <h3 className="wm mt-4 text-xl text-white">{r.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sage">{r.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-petroleo-50 px-5 py-22 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_36px_rgba(0,53,44,0.07)]">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
                  alt="Jogadores em atividade esportiva"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
              <Eyebrow>Quem joga</Eyebrow>
              <h2 className="wm mt-3 text-[clamp(30px,4vw,46px)] text-ink">
                Ache quadra sem perder a resenha.
              </h2>
              <ul className="mt-6 space-y-4 text-ink-soft">
                {[
                  "Horários livres por esporte e região",
                  "Pagamento online e confirmação automática",
                  "Convite para amigos e histórico de reservas",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 text-petroleo-700">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_36px_rgba(0,53,44,0.07)]">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80"
                  alt="Quadra esportiva preparada para receber jogadores"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
              <Eyebrow>Quem administra</Eyebrow>
              <h2 className="wm mt-3 text-[clamp(30px,4vw,46px)] text-ink">
                Coloque sua arena no fluxo do jogo.
              </h2>
              <ul className="mt-6 space-y-4 text-ink-soft">
                {[
                  "Agenda digital para múltiplas quadras",
                  "Reservas pagas antes do horário",
                  "Mais visibilidade para preencher horários vazios",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 text-petroleo-700">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="comece" className="scroll-mt-24 bg-mint px-5 py-22 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="wm text-[clamp(38px,6vw,68px)] text-deep">
              O próximo horário pode ser seu.
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-deep-soft">
              Entre na lista da GolNext para reservar quadras, cadastrar sua
              arena ou acompanhar o lançamento na sua cidade.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <a
                href="mailto:suporte@golnext.com?subject=Quero%20usar%20a%20GolNext"
                className="wm rounded-full bg-deep px-8 py-4 text-lg text-white hover:bg-deepest transition"
              >
                Quero jogar
              </a>
              <a
                href="mailto:suporte@golnext.com?subject=Quero%20cadastrar%20minha%20arena"
                className="sg rounded-full border-2 border-deep px-7 py-4 font-semibold text-deep hover:bg-deep hover:text-white transition"
              >
                Tenho uma arena
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
