import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso do aplicativo GolNext: contas, reservas, pagamentos, cancelamentos e responsabilidades de jogadores e proprietários de quadras.",
  alternates: { canonical: "/termos-de-uso" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-petroleo-900 mt-12 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermosDeUso() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <header className="bg-petroleo-900">
          <div className="mx-auto max-w-3xl px-6 py-14">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
              Termos de <span className="text-mint">Uso</span>
            </h1>
            <p className="mt-4 text-petroleo-100">
              Última atualização: 3 de julho de 2026
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 pb-20">
          <Section title="1. Aceitação dos termos">
            <p>
              Ao criar uma conta ou usar o aplicativo GolNext, você concorda
              com estes Termos de Uso e com a nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-petroleo-700 font-semibold underline underline-offset-2"
              >
                Política de Privacidade
              </Link>
              . Se não concordar, não utilize o serviço.
            </p>
          </Section>

          <Section title="2. O serviço">
            <p>
              O GolNext é uma plataforma que conecta jogadores a quadras
              esportivas, permitindo buscar quadras, fazer reservas e realizar
              pagamentos, e que oferece a proprietários ferramentas de gestão
              de agenda e recebimentos.
            </p>
            <p>
              O GolNext atua como intermediador. As quadras são de propriedade
              e responsabilidade dos respectivos proprietários.
            </p>
          </Section>

          <Section title="3. Cadastro e conta">
            <p>
              Para usar o serviço é necessário criar uma conta com informações
              verdadeiras e mantê-las atualizadas. Você é responsável por
              manter a confidencialidade da sua senha e por toda atividade
              realizada na sua conta.
            </p>
            <p>
              O serviço não é destinado a menores de 13 anos.
            </p>
          </Section>

          <Section title="4. Reservas e pagamentos">
            <p>
              As reservas são confirmadas após a aprovação do pagamento,
              processado pelo Mercado Pago. Os valores exibidos são definidos
              pelos proprietários das quadras.
            </p>
            <p>
              Cancelamentos e reembolsos seguem as condições informadas no
              momento da reserva, podendo variar conforme a antecedência e a
              política da quadra.
            </p>
          </Section>

          <Section title="5. Responsabilidades do usuário">
            <p>Ao usar o GolNext, você se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras no cadastro e nos anúncios;</li>
              <li>Comparecer às reservas confirmadas ou cancelar com antecedência;</li>
              <li>Zelar pelas instalações das quadras utilizadas;</li>
              <li>Publicar avaliações honestas, sem conteúdo ofensivo;</li>
              <li>Não utilizar a plataforma para fins ilícitos ou fraudulentos.</li>
            </ul>
          </Section>

          <Section title="6. Responsabilidades do proprietário">
            <p>Ao anunciar uma quadra, o proprietário se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anunciar apenas quadras que possui ou administra legalmente;</li>
              <li>Manter fotos, preços e horários fiéis à realidade;</li>
              <li>Honrar as reservas confirmadas pela plataforma;</li>
              <li>Manter as instalações em condições adequadas de uso e segurança.</li>
            </ul>
          </Section>

          <Section title="7. Limitação de responsabilidade">
            <p>
              O GolNext não se responsabiliza por danos, acidentes ou lesões
              ocorridos durante a prática esportiva, nem pelas condições
              físicas das quadras, que são de responsabilidade dos
              proprietários. Empenhamo-nos em manter a plataforma disponível e
              segura, mas não garantimos operação ininterrupta.
            </p>
          </Section>

          <Section title="8. Suspensão e encerramento">
            <p>
              Podemos suspender ou encerrar contas que violem estes termos,
              pratiquem fraude ou prejudiquem outros usuários. Você pode
              excluir sua conta a qualquer momento pelo app, na área Perfil.
            </p>
          </Section>

          <Section title="9. Alterações">
            <p>
              Estes termos podem ser atualizados periodicamente. Mudanças
              significativas serão comunicadas pelo app ou pelo email
              cadastrado. O uso continuado do serviço após as alterações
              representa concordância com os novos termos.
            </p>
          </Section>

          <Section title="10. Legislação e contato">
            <p>
              Estes termos são regidos pelas leis brasileiras, incluindo o
              Código de Defesa do Consumidor e o Marco Civil da Internet.
            </p>
            <p>
              Dúvidas? Fale com a gente:{" "}
              <a
                href="mailto:suporte@golnext.com"
                className="text-petroleo-700 font-semibold underline underline-offset-2"
              >
                suporte@golnext.com
              </a>
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}
