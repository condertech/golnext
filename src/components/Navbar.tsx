import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-petroleo-50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="GolNext - página inicial">
          <Image
            src="/golnext-logo.png"
            alt="GolNext"
            width={140}
            height={22}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink-soft">
          <Link href="/como-funciona" className="hover:text-petroleo-900">
            Como funciona
          </Link>
          <Link
            href="/para-donos-de-quadra"
            className="hover:text-petroleo-900"
          >
            Para donos de quadra
          </Link>
          <Link href="/faq" className="hover:text-petroleo-900">
            Dúvidas
          </Link>
        </div>
        <a
          href="#baixar"
          className="rounded-xl bg-petroleo-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-petroleo-800 transition-colors"
        >
          Baixar o app
        </a>
      </div>
    </nav>
  );
}
