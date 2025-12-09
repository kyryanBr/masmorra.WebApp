export interface GetCenaDto {
  id: number;
  idCampanha: number;
  cena: number;
  descricao: string;
  tipo: number;
  escolhas: {
    id: number;
    descricao: string;
  }
}