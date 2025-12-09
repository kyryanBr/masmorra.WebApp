import AsyncStorage from "@react-native-async-storage/async-storage";

const personagemStorage = {
  async save(id: number) {
    try {
      await AsyncStorage.setItem("personagemId", String(id));
    } catch (error) {
      console.error("Erro ao salvar personagemId:", error);
    }
  },


  async get(): Promise<number | null> {
    const value = await AsyncStorage.getItem("personagemId");
    return value ? Number(value) : null;
  },

async clear() {
  try {
    await AsyncStorage.removeItem("personagemId");
  } catch (error) {
    console.error("Erro ao limpar personagemId:", error);
  }
}
};

export default personagemStorage;