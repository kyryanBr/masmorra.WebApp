export interface Campanha {
  id: number;
  nome: string;
  descricao: string;
  historia: string;
  dataPublicacao: string | null;
}

export interface CampanhaAllAtivo {
  id: number;
  nome: string;
  descricao: string;
  dataPublicacao: string | null;
}