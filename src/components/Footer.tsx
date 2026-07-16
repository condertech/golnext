import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/components/StoreBadges";

export function Footer() {
  return (
    <footer className="mt-auto overflow-hidden bg-deep text-sage">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-5 sm:pt-8 md:px-10">
        <div className="group relative isolate min-h-[560px] overflow-hidden rounded-[24px] bg-deep-soft min-[390px]:min-h-[500px] sm:min-h-[600px] sm:rounded-[28px] lg:min-h-[440px] lg:rounded-[36px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(29,233,182,0.22),transparent_34%),radial-gradient(circle_at_30%_70%,rgba(38,166,154,0.2),transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent via-45% to-transparent lg:bg-gradient-to-r lg:from-deep/55 lg:via-transparent lg:via-42% lg:to-transparent" />
          <div className="absolute inset-x-1 top-3 h-[280px] sm:inset-x-8 sm:top-5 sm:h-[360px] lg:bottom-5 lg:left-[36%] lg:right-4 lg:top-4 lg:h-auto">
            <Image
              src="/IMG_1808.PNG"
              alt="Atletas de futebol, vôlei e beach tennis em ação"
              fill
              sizes="(min-width: 1024px) 680px, calc(100vw - 56px)"
              className="object-contain object-top drop-shadow-[0_18px_16px_rgba(0,18,15,0.38)] transition-transform duration-700 ease-out group-hover:scale-[1.015] lg:object-right lg:drop-shadow-[0_22px_18px_rgba(0,18,15,0.42)]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-4 p-5 sm:gap-5 sm:p-8 lg:inset-0 lg:justify-end lg:p-10">
            <div className="max-w-[460px]">
              <p className="wm text-[32px] leading-[1.02] text-white sm:text-5xl lg:text-[52px]">
                Baixe agora e reserve sua quadra
              </p>
            </div>
            <StoreBadges />
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/golnext-logo-light.png"
              alt="GolNext"
              width={150}
              height={27}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed">
              A plataforma que conecta jogadores à sua próxima partida.
              Reserve. Jogue. Repita.
            </p>
          </div>
          <div>
            <div className="sg mb-3.5 text-xs uppercase tracking-widest text-white">
              Produto
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/como-funciona" className="hover:text-mint">
                Como funciona
              </Link>
              <Link href="/aluguel-de-quadras" className="hover:text-mint">
                Aluguel de quadras
              </Link>
              <Link href="/baixar-app" className="hover:text-mint">
                Baixar aplicativo
              </Link>
              <Link href="/faq" className="hover:text-mint">
                Perguntas frequentes
              </Link>
            </div>
          </div>
          <div>
            <div className="sg mb-3.5 text-xs uppercase tracking-widest text-white">
              Empresa
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/para-donos-de-quadra" className="hover:text-mint">
                Para arenas
              </Link>
              <Link href="/cadastrar-quadra" className="hover:text-mint">
                Cadastrar quadra
              </Link>
              <a href="mailto:suporte@golnext.com" className="hover:text-mint">
                Contato
              </a>
            </div>
          </div>
          <div>
            <div className="sg mb-3.5 text-xs uppercase tracking-widest text-white">
              Legal
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/termos-de-uso" className="hover:text-mint">
                Termos
              </Link>
              <Link href="/politica-de-privacidade" className="hover:text-mint">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} GolNext. Todos os direitos reservados.</span>
          <span>Feito para quem só quer jogar.</span>
        </div>
      </div>
    </footer>
  );
}
