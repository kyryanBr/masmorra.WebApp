import { View,  ScrollView} from "react-native";
import { useEffect, useState } from "react";
import { Text,  Provider as PaperProvider} from 'react-native-paper';

import _CampanhaService from "../../src/services/campanhaService"
import _PersonagemService from "../../src/services/personagemService"

import { PersonagemPostResponse } from "../../src/models/Personagem";

import EnemyList from "../../src/components/EnemyList"
import BattleDescription from "../../src/components/BattleDescription"
import { ResultBatalha } from "../models/Batalha";

interface BattleScreenProps {
  personagem: PersonagemPostResponse;
}

export default function BattleScreen({ personagem }: BattleScreenProps) {
const [_loading, setLoading] = useState<boolean>(false);
const [_personagem, setPersonagem] = useState<PersonagemPostResponse>(personagem);
const [_batalha, setBattle] = useState<ResultBatalha | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
   
  }

     async function Batalhar(item: any) {
    if (!_personagem) return;
    setLoading(true)
    const post = await _PersonagemService.postBatalhar(_personagem?.id, item.id)
    if(post){
      setPersonagem({ ...post.personagem});
      setBattle({ ...post.batalha});
    }
    setLoading(false)
  }

  return (

        <View
          style={{
            width: '100%',
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 20,
            gap: 20,
           }}
        >
        <ScrollView
            contentContainerStyle={{
                padding: 20,
                alignItems: "center",
            }}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>Batalha</Text>
                <BattleDescription description={_batalha?.descricao || ""} speed={25}></BattleDescription>
                <EnemyList
                    enemies={_personagem.cena.inimigos}
                    onSelect={(item) => Batalhar(item)}
                    loading={_loading}
                />
        </ScrollView>
        </View>
  );
}