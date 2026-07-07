import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-petroleo-900 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/golnext-logo.png"
            alt="GolNext"
            width={150}
            height={23}
            className="brightness-0 invert"
          />
          <p className="mt-4 text-sm text-petroleo-100 leading-relaxed">
            A plataforma que conecta jogadores à sua próxima partida. Reserve.
            Jogue. Repita.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Produto
          </h3>
          <ul className="space-y-2 text-sm text-petroleo-100">
            <li>
              <Link href="/como-funciona" className="hover:text-mint">
                Como funciona
              </Link>
            </li>
            <li>
              <Link href="/para-donos-de-quadra" className="hover:text-mint">
                Para donos de quadra
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-mint">
                Perguntas frequentes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-petroleo-100">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-mint">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-mint">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Suporte
          </h3>
          <ul className="space-y-2 text-sm text-petroleo-100">
            <li>
              <a href="mailto:suporte@golnext.com" className="hover:text-mint">
                suporte@golnext.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-petroleo-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-petroleo-100">
          © {new Date().getFullYear()} GolNext. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
