import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep text-sage mt-auto">
      <div className="mx-auto max-w-6xl px-5 md:px-10 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
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
              <Link href="/#recursos" className="hover:text-mint">
                Recursos
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
