import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o GolNext coleta, usa, armazena e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-petroleo-900 mt-12 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-ink mt-6 mb-2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-petroleo-500 font-bold shrink-0">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="flex-1">
      <header className="bg-petroleo-900 rounded-b-3xl">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <Link href="/">
            <Image
              src="/golnext-logo.png"
              alt="GolNext"
              width={200}
              height={31}
              priority
              className="brightness-0 invert"
            />
          </Link>
          <h1 className="mt-8 font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
            Política de <span className="text-mint">Privacidade</span>
          </h1>
          <p className="mt-4 text-petroleo-100">
            Última atualização: 19 de maio de 2026
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-20">
        <Section id="introducao" title="1. Introdução">
          <p>
            Bem-vindo ao <strong className="text-ink">GolNext</strong>. Esta
            Política de Privacidade descreve como coletamos, usamos,
            armazenamos e protegemos suas informações pessoais quando você usa
            nosso aplicativo móvel.
          </p>
          <p>
            Ao usar o GolNext, você concorda com a coleta e uso de informações
            de acordo com esta política.
          </p>
        </Section>

        <Section id="informacoes" title="2. Informações que Coletamos">
          <Sub title="2.1 Informações fornecidas por você">
            <ul className="space-y-2">
              <Check>
                <strong className="text-ink">Conta e perfil:</strong> nome,
                email, senha (criptografada), telefone, data de nascimento e
                foto de perfil
              </Check>
              <Check>
                <strong className="text-ink">Pagamentos:</strong> dados de
                pagamento processados pelo Mercado Pago (não armazenamos dados
                de cartão)
              </Check>
              <Check>
                <strong className="text-ink">Conteúdo:</strong> fotos de
                quadras, avaliações e comentários
              </Check>
            </ul>
          </Sub>
          <Sub title="2.2 Informações coletadas automaticamente">
            <ul className="space-y-2">
              <Check>
                <strong className="text-ink">Localização:</strong> usada, com
                sua permissão, para mostrar quadras próximas a você
              </Check>
              <Check>
                <strong className="text-ink">Dispositivo:</strong> tipo de
                dispositivo, sistema operacional e versão do app
              </Check>
              <Check>
                <strong className="text-ink">Uso:</strong> quadras
                visualizadas, reservas feitas e buscas realizadas
              </Check>
            </ul>
          </Sub>
          <Sub title="2.3 Permissões do app">
            <ul className="space-y-2">
              <Check>
                <strong className="text-ink">Localização (GPS):</strong> para
                encontrar quadras próximas
              </Check>
              <Check>
                <strong className="text-ink">Câmera:</strong> para tirar fotos
                de quadras e do perfil
              </Check>
              <Check>
                <strong className="text-ink">Galeria/Fotos:</strong> para
                escolher fotos da galeria
              </Check>
              <Check>
                <strong className="text-ink">Internet:</strong> para
                comunicação com nossos servidores
              </Check>
            </ul>
          </Sub>
        </Section>

        <Section id="uso" title="3. Como Usamos Suas Informações">
          <ul className="space-y-2">
            <Check>Processar reservas e pagamentos</Check>
            <Check>Mostrar quadras próximas à sua localização</Check>
            <Check>Enviar confirmações e notificações de reservas</Check>
            <Check>Melhorar nossos serviços</Check>
            <Check>Prevenir fraudes e abusos</Check>
            <Check>Fornecer suporte ao cliente</Check>
            <Check>Enviar atualizações importantes sobre o serviço</Check>
          </ul>
          <p className="rounded-xl bg-petroleo-50 border border-petroleo-100 p-4 text-petroleo-900 font-semibold">
            Não vendemos ou compartilhamos seus dados pessoais com terceiros
            para fins de marketing.
          </p>
        </Section>

        <Section id="compartilhamento" title="4. Compartilhamento de Informações">
          <p>Compartilhamos informações apenas quando necessário:</p>
          <Sub title="4.1 Prestadores de serviços">
            <ul className="space-y-2">
              <Check>
                <strong className="text-ink">Supabase:</strong> armazenamento
                de dados e autenticação
              </Check>
              <Check>
                <strong className="text-ink">Mercado Pago:</strong>{" "}
                processamento de pagamentos
              </Check>
              <Check>
                <strong className="text-ink">Google Play Services:</strong>{" "}
                localização e serviços do Android
              </Check>
            </ul>
          </Sub>
          <Sub title="4.2 Proprietários de quadras">
            <p>Quando você faz uma reserva, compartilhamos:</p>
            <ul className="space-y-2">
              <Check>Seu nome e telefone (para contato)</Check>
              <Check>Data e horário da reserva</Check>
              <Check>Status do pagamento</Check>
            </ul>
          </Sub>
          <Sub title="4.3 Requisitos legais">
            <p>
              Podemos divulgar informações se exigido por lei, ordem judicial
              ou processo legal.
            </p>
          </Sub>
        </Section>

        <Section id="seguranca" title="5. Armazenamento e Segurança">
          <Sub title="5.1 Onde armazenamos">
            <p>
              Seus dados são armazenados em servidores seguros do Supabase,
              localizados em centros de dados certificados.
            </p>
          </Sub>
          <Sub title="5.2 Medidas de segurança">
            <ul className="space-y-2">
              <Check>Criptografia de senha (hashing bcrypt)</Check>
              <Check>Conexões HTTPS/TLS</Check>
              <Check>Autenticação de dois fatores (quando disponível)</Check>
              <Check>
                Regras de segurança no nível do banco de dados (RLS)
              </Check>
              <Check>Backups regulares</Check>
            </ul>
          </Sub>
          <Sub title="5.3 Retenção de dados">
            <p>
              Mantemos seus dados enquanto sua conta estiver ativa. Após a
              exclusão da conta, dados pessoais são removidos em até 30 dias,
              exceto quando exigido por lei.
            </p>
          </Sub>
        </Section>

        <Section id="direitos" title="6. Seus Direitos">
          <ul className="space-y-2">
            <Check>
              <strong className="text-ink">Acessar</strong> seus dados pessoais
            </Check>
            <Check>
              <strong className="text-ink">Corrigir</strong> informações
              incorretas
            </Check>
            <Check>
              <strong className="text-ink">Excluir</strong> sua conta e dados
            </Check>
            <Check>
              <strong className="text-ink">Exportar</strong> seus dados
              (portabilidade)
            </Check>
            <Check>
              <strong className="text-ink">Revogar</strong> permissões
              (localização, câmera, etc.)
            </Check>
            <Check>
              <strong className="text-ink">Cancelar</strong> notificações não
              essenciais
            </Check>
          </ul>
          <Sub title="Como exercer seus direitos">
            <p>
              <strong className="text-ink">Excluir conta:</strong> abra o app,
              vá em Perfil, toque em &quot;Excluir Minha Conta&quot; e confirme
              a exclusão.
            </p>
            <p>
              <strong className="text-ink">Outras solicitações:</strong> entre
              em contato pelo email{" "}
              <a
                href="mailto:suporte@golnext.com"
                className="text-petroleo-700 font-semibold underline underline-offset-2"
              >
                suporte@golnext.com
              </a>
              .
            </p>
          </Sub>
        </Section>

        <Section id="criancas" title="7. Privacidade de Crianças">
          <p>
            O GolNext não é destinado a menores de 13 anos. Não coletamos
            intencionalmente informações de crianças. Se você acredita que
            coletamos dados de uma criança, entre em contato conosco para
            remoção imediata.
          </p>
        </Section>

        <Section id="cookies" title="8. Cookies e Tecnologias Similares">
          <p>Usamos tecnologias similares a cookies para:</p>
          <ul className="space-y-2">
            <Check>Manter você conectado</Check>
            <Check>Lembrar preferências</Check>
            <Check>Analisar uso do app (analytics anônimos)</Check>
          </ul>
          <p>
            Você pode limpar os dados do app nas configurações do dispositivo.
          </p>
        </Section>

        <Section id="alteracoes" title="9. Alterações nesta Política">
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Notificaremos sobre mudanças significativas através de notificação
            no app e do email cadastrado.
          </p>
          <p>
            A data da última atualização é sempre exibida no topo deste
            documento.
          </p>
        </Section>

        <Section id="legislacao" title="10. Legislação Aplicável">
          <p>Esta política é regida pelas leis do Brasil, incluindo:</p>
          <ul className="space-y-2">
            <Check>
              <strong className="text-ink">LGPD</strong> - Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018)
            </Check>
            <Check>
              <strong className="text-ink">Marco Civil da Internet</strong>{" "}
              (Lei nº 12.965/2014)
            </Check>
            <Check>
              <strong className="text-ink">
                Código de Defesa do Consumidor
              </strong>
            </Check>
          </ul>
        </Section>

        <Section id="transferencia" title="11. Transferência Internacional de Dados">
          <p>
            Seus dados podem ser transferidos e armazenados em servidores fora
            do Brasil (Supabase/AWS). Garantimos que esses provedores mantêm
            padrões adequados de proteção de dados.
          </p>
        </Section>

        <Section id="contato" title="12. Contato">
          <p>
            Para dúvidas sobre esta Política de Privacidade ou sobre seus
            dados, fale com nosso time responsável pela proteção de dados:
          </p>
          <p className="rounded-xl bg-petroleo-50 border border-petroleo-100 p-4">
            <strong className="text-ink">Email:</strong>{" "}
            <a
              href="mailto:suporte@golnext.com"
              className="text-petroleo-700 font-semibold underline underline-offset-2"
            >
              suporte@golnext.com
            </a>
          </p>
        </Section>

        <div className="mt-16 rounded-2xl border border-petroleo-100 bg-petroleo-50/60 p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-petroleo-900 mb-6">
            Resumo simplificado
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-ink-soft">
            <div>
              <h3 className="font-semibold text-ink mb-2">O que coletamos</h3>
              <ul className="space-y-1">
                <Check>Email, nome e telefone</Check>
                <Check>Localização (com sua permissão)</Check>
                <Check>Fotos que você envia</Check>
                <Check>Histórico de reservas</Check>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">Como usamos</h3>
              <ul className="space-y-1">
                <Check>Para processar suas reservas</Check>
                <Check>Mostrar quadras perto de você</Check>
                <Check>Melhorar o serviço</Check>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">
                Compartilhamos com
              </h3>
              <ul className="space-y-1">
                <Check>Supabase (banco de dados)</Check>
                <Check>Mercado Pago (pagamentos)</Check>
                <Check>Proprietário da quadra (ao reservar)</Check>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">Seus direitos</h3>
              <ul className="space-y-1">
                <Check>Ver seus dados</Check>
                <Check>Corrigir informações</Check>
                <Check>Excluir sua conta</Check>
                <Check>Exportar seus dados</Check>
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-petroleo-50 pt-8 text-sm text-ink-muted text-center">
          <p>GolNext - Aplicativo de Reserva de Quadras Esportivas</p>
          <p className="mt-2">
            Esta Política de Privacidade é fornecida em conformidade com a LGPD
            e os requisitos da Google Play Store.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-petroleo-700 font-semibold hover:text-petroleo-900"
          >
            ← Voltar para o início
          </Link>
        </footer>
      </article>
    </main>
  );
}
