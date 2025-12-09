import { api } from "./api";
import  {PersonagemPostResponse}  from "../models/Personagem";
import  {BatalhaPostResponse}  from "../models/Batalha";

const PersonagemService = {
  post: async (idCampanha: number): Promise<PersonagemPostResponse | null> => {
    try{
      const response = await api.post(`/personagem/${idCampanha}`);
      return response.data;
    }
    catch{
      console.log('erro ao inserir personagem')
      return null;
    }
  },
  postEscolha: async (idPersonagem: number, idEscolha: number): Promise<PersonagemPostResponse | null> => {
    try{
      const response = await api.post(`/personagem/postEscolha/${idPersonagem}/${idEscolha}`);
      return response.data;
    }
    catch{
      console.log('erro ao inserir personagem')
      return null;
    }
  },
  postDestinoCena: async (idPersonagem: number): Promise<PersonagemPostResponse | null> => {
    try{
      const response = await api.post(`/personagem/postDestinoCena/${idPersonagem}`);
      return response.data;
    }
    catch{
      console.log('erro ao inserir personagem')
      return null;
    }
  },

  getCenaByIdPersonagem: async (idPersonagem: number): Promise<PersonagemPostResponse | null> => {
    try{
      const response = await api.get(`/personagem/getCena/${idPersonagem}`);
      return response.data;
    }
    catch{
      console.log('erro ao inserir personagem')
      return null;
    }
  },

    postBatalhar: async (idPersonagem: number, idInimigo: number): Promise<BatalhaPostResponse | null> => {
    try{
      const response = await api.post(`/personagem/batalhar/${idPersonagem}/${idInimigo}`);
      return response.data;
    }
    catch{
      console.log('erro ao inserir personagem')
      return null;
    }
  },
}

export default PersonagemService;