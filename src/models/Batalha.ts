export interface BatalhaPostResponse {
    batalha: {
          dadosInimigo:{
            Rolls: number;
            Total: number;
          }[],
          dadosPersonagem:{
            Rolls: number;
            Total: number;
          }[],
          descricao: string;
          isCritico: boolean;
          sucesso: boolean
        },
    isEndBatle: boolean
    personagem: {
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
      },
}

export interface ResultBatalha {
  dadosInimigo:{
    Rolls: number;
    Total: number;
  }[],
  dadosPersonagem:{
    Rolls: number;
    Total: number;
  }[],
  descricao: string;
  isCritico: boolean;
  sucesso: boolean
}

