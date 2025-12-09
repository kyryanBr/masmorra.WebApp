export interface PersonagemPostResponse {
  id: number;
  idCampanha: number;
  hpAtual : number;
  hpTotal : number;
  cena: {
    id: number;
    idCampanha: number;
    cena: number;
    descricao: string;
    tipo: number;
    escolhas: {
      id: number;
      descricao: string;
    }[],
    inimigos: {
      id: number;
      descricao: string;
      hp: number;
      hpAtual: number;
      dificuldade: number;
    }[]
  }
}