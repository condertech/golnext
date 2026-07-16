"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { esportes } from "@/data/esportes";

const rotas = [
  { href: "/", label: "Início" },
  { href: "/baixar-app", label: "Baixar app" },
  { href: "/aluguel-de-quadras", label: "Aluguel de quadras" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/para-donos-de-quadra", label: "Para donos de quadra" },
  { href: "/faq", label: "Perguntas frequentes" },
];

const rotasLegais = [
  { href: "/politica-de-privacidade", label: "Privacidade" },
  { href: "/termos-de-uso", label: "Termos de uso" },
];

export function Wordmark({ className = "text-[26px]" }: { className?: string }) {
  return (
    <span className={`wm text-white ${className}`}>
      Gol<span className="text-mint">Next</span>
    </span>
  );
}

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();
  const paginaInicial = pathname === "/";

  useEffect(() => {
    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuAberto(false);
    }

    window.addEventListener("keydown", fecharComEscape);
    return () => window.removeEventListener("keydown", fecharComEscape);
  }, []);

  function rotaAtiva(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-petroleo-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-5 md:px-10 md:py-4">
        {paginaInicial ? (
          <Link href="/" aria-label="GolNext - página inicial" onNavigate={() => setMenuAberto(false)}>
            <Image
              src="/golnext-logo-light.png"
              alt="GolNext"
              width={150}
              height={27}
              priority
              className="h-6 w-auto md:h-7"
            />
          </Link>
        ) : (
          <Link
            href="/"
            onNavigate={() => setMenuAberto(false)}
            aria-label="Voltar para a página inicial"
            className="sg inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-mint hover:text-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar
          </Link>
        )}

        <nav aria-label="Navegação principal" className="hidden items-center gap-x-6 md:flex">
          <Link href="/como-funciona" className="sg whitespace-nowrap text-sm text-mist hover:text-white">
            Como funciona
          </Link>
          <Link href="/aluguel-de-quadras" className="sg whitespace-nowrap text-sm text-mist hover:text-white">
            Esportes
          </Link>
          <Link href="/baixar-app" className="sg whitespace-nowrap rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-deep transition hover:brightness-95">
            Baixar app
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-mint hover:text-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              menuAberto ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              menuAberto ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              menuAberto ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden bg-deep transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          menuAberto
            ? "max-h-[calc(100dvh-69px)] border-t border-white/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Menu mobile"
          className="mx-auto max-h-[calc(100dvh-70px)] max-w-6xl overflow-y-auto px-5 py-5"
        >
          <div className="grid gap-1">
            {rotas.map((rota) => (
              <Link
                key={rota.href}
                href={rota.href}
                aria-current={rotaAtiva(rota.href) ? "page" : undefined}
                onNavigate={() => setMenuAberto(false)}
                className={`sg flex min-h-12 items-center justify-between rounded-xl px-4 py-3 font-semibold transition ${
                  rotaAtiva(rota.href)
                    ? "bg-mint text-deep"
                    : "text-white hover:bg-white/8 hover:text-mint"
                }`}
              >
                {rota.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="sg px-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sage">
              Modalidades
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {esportes.map((esporte) => {
                const href = `/aluguel-de-quadras/${esporte.slug}`;
                return (
                  <Link
                    key={esporte.slug}
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    onNavigate={() => setMenuAberto(false)}
                    className={`sg rounded-full border px-4 py-2.5 text-sm transition ${
                      pathname === href
                        ? "border-mint bg-mint text-deep"
                        : "border-white/15 text-mist hover:border-mint hover:text-mint"
                    }`}
                  >
                    {esporte.nome}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 px-1 pb-3 pt-5 text-sm text-sage">
            {rotasLegais.map((rota) => (
              <Link
                key={rota.href}
                href={rota.href}
                onNavigate={() => setMenuAberto(false)}
                className="hover:text-white"
              >
                {rota.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
