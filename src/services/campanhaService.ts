import { api } from "./api";
import { Campanha, CampanhaAllAtivo } from "../models/Campanha";

const CampanhaService = {
   get: async (id: number): Promise<Campanha | null> => {
    try{
      const response = await api.get(`/campanha/get/${id}`);
      return response.data;
    }
    catch{
      console.log('erro ao buscar campanha')
      return null;
    }
  },
     getAllAtivos: async (): Promise<[CampanhaAllAtivo] | null> => {
    try{
      const response = await api.get(`/campanha/GetAllAtivos`);
      return response.data;
    }
    catch{
      console.log('erro ao buscar campanha')
      return null;
    }
  },
}

export default CampanhaService;