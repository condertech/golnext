import Image from "next/image";
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-5 sm:px-5 sm:py-4 md:px-10">
        <Link href="/" aria-label="GolNext - página inicial">
          <Image
            src="/golnext-logo-light.png"
            alt="GolNext"
            width={150}
            height={27}
            priority
            className="h-6 w-auto md:h-7"
          />
        </Link>
        <nav className="flex items-center gap-x-6">
          <Link
            href="/#como"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Como funciona
          </Link>
          <Link
            href="/aluguel-de-quadras"
            className="sg hidden sm:block whitespace-nowrap text-sm text-mist hover:text-white"
          >
            Esportes
          </Link>
          <Link
            href="/baixar-app"
            className="sg whitespace-nowrap rounded-full bg-mint px-4 py-2.5 text-sm font-semibold text-deep transition hover:brightness-95 sm:px-5"
          >
            Baixar app
          </Link>
        </nav>
      </div>
    </header>
  );
}
