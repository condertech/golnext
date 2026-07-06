import Image from "next/image";
import Link from "next/link";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GolNext",
  description:
    "Plataforma de reserva de quadras esportivas. Conecta jogadores e donos de quadra.",
  url: process.env.URL || "https://golnext.netlify.app",
  logo: `${process.env.URL || "https://golnext.netlify.app"}/golnext-icon.png`,
  email: "suporte@golnext.com",
  areaServed: "BR",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="bg-petroleo-900 rounded-b-3xl">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Image
            src="/golnext-logo.png"
            alt="GolNext"
            width={280}
            height={43}
            priority
            className="mx-auto brightness-0 invert"
          />
          <h1 className="mt-10 font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white">
            Menos burocracia, <span className="text-mint">mais jogo.</span>
          </h1>
          <p className="mt-6 text-lg text-petroleo-100 max-w-2xl mx-auto">
            A GolNext transforma a reserva de quadras numa experiência rápida,
            clara e feita para quem só quer entrar em campo. Reserve. Jogue.
            Repita.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-6 md:grid-cols-3 w-full">
        <div className="rounded-2xl border border-petroleo-50 bg-petroleo-50/50 p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-petroleo-900">
            Reserve em segundos
          </h2>
          <p className="mt-3 text-ink-soft">
            Encontre quadras perto de você, escolha o horário e confirme o
            pagamento sem sair do app.
          </p>
        </div>
        <div className="rounded-2xl border border-petroleo-50 bg-petroleo-50/50 p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-petroleo-900">
            Para donos de quadra
          </h2>
          <p className="mt-3 text-ink-soft">
            Gerencie horários, reservas e faturamento num painel simples, sem
            planilha e sem telefone tocando.
          </p>
        </div>
        <div className="rounded-2xl border border-petroleo-50 bg-petroleo-50/50 p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-petroleo-900">
            Comunidade em campo
          </h2>
          <p className="mt-3 text-ink-soft">
            Avaliações reais de jogadores para você escolher a melhor quadra da
            região.
          </p>
        </div>
      </section>

      <footer className="mt-auto border-t border-petroleo-50">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
          <span>
            © {new Date().getFullYear()} GolNext - Reserva de quadras
            esportivas
          </span>
          <nav className="flex items-center gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-petroleo-700 font-semibold hover:text-petroleo-900"
            >
              Política de Privacidade
            </Link>
            <a
              href="mailto:suporte@golnext.com"
              className="hover:text-petroleo-900"
            >
              suporte@golnext.com
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
