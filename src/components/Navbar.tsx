import Link from "next/link";

export function Wordmark({ className = "text-[26px]" }: { className?: string }) {
  return (
    <span className={`wm text-white ${className}`}>
      Gol<span className="text-mint">Next</span>
    </span>
  );
}

export function Navbar({ active = "jogadores" }: { active?: "jogadores" | "donos" }) {
  return (
    <header className="sticky top-0 z-50 bg-petroleo-900/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
        <Link href="/" aria-label="GolNext - página inicial">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-deep/50 p-1.5">
          <Link
            href="/"
            className={`sg whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition ${
              active === "jogadores"
                ? "bg-mint text-deep"
                : "text-mist hover:text-white"
            }`}
          >
            Para jogadores
          </Link>
          <Link
            href="/para-donos-de-quadra"
            className={`sg whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition ${
              active === "donos"
                ? "bg-mint text-deep"
                : "text-mist hover:text-white"
            }`}
          >
            Para donos de quadra
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="#como"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Como funciona
          </a>
          <a
            href="#recursos"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Recursos
          </a>
          <a
            href="#baixar"
            className="sg whitespace-nowrap rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-deep hover:brightness-95 transition"
          >
            Baixar app
          </a>
        </nav>
      </div>
    </header>
  );
}
