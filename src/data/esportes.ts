export const esportes = [
  {
    slug: "futebol",
    nome: "Futebol",
    modalidade: "society, campo e futsal",
    descricao: "Encontre quadras de futebol, compare horários e reserve society, campo ou futsal pelo app.",
  },
  {
    slug: "beach-tennis",
    nome: "Beach tennis",
    modalidade: "areia, dupla e aula",
    descricao: "Alugue quadras de beach tennis para jogos, aulas e partidas em dupla com reserva online.",
  },
  {
    slug: "volei",
    nome: "Vôlei",
    modalidade: "quadra e praia",
    descricao: "Ache quadras de vôlei disponíveis, escolha o melhor horário e confirme sua reserva online.",
  },
  {
    slug: "basquete",
    nome: "Basquete",
    modalidade: "3x3 e 5x5",
    descricao: "Encontre quadras de basquete para jogos 3x3 ou 5x5 e organize sua próxima partida.",
  },
  {
    slug: "tenis",
    nome: "Tênis",
    modalidade: "saibro e rápida",
    descricao: "Reserve quadras de tênis de saibro ou piso rápido sem ligações e com confirmação online.",
  },
  {
    slug: "padel",
    nome: "Padel",
    modalidade: "duplas e torneios",
    descricao: "Alugue quadras de padel para duplas, aulas e torneios com horários disponíveis no app.",
  },
] as const;

export type Esporte = (typeof esportes)[number];

export function encontrarEsporte(slug: string) {
  return esportes.find((esporte) => esporte.slug === slug);
}
