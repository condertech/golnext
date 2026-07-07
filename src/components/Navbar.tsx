import Link from "next/link";

export function Wordmark({ className = "text-[26px]" }: { className?: string }) {
  return (
    <span className={`wm text-white ${className}`}>
      Gol<span className="text-mint">Next</span>
    </span>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-petroleo-900/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 md:px-10">
        <Link href="/" aria-label="GolNext - página inicial">
          <Wordmark />
        </Link>
        <nav className="flex items-center gap-x-6">
          <Link
            href="/#como"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Como funciona
          </Link>
          <Link
            href="/#esportes"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Esportes
          </Link>
          <Link
            href="/#comece"
            className="sg whitespace-nowrap rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-deep hover:brightness-95 transition"
          >
            Começar
          </Link>
        </nav>
      </div>
    </header>
  );
}
