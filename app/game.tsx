import { View,  ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';

import _CampanhaService from "../src/services/campanhaService"
import _PersonagemService from "../src/services/personagemService"

import { Campanha } from "../src/models/Campanha";
import { PersonagemPostResponse } from "../src/models/Personagem";

import Typography from "../src/components/Typography"
import Divider from "../src/components/Divider"
import ChoicesList from "../src/components/ChoicesList"
import Hud from "../src/components/HUD"

import BattleScreen from "../src/screens/BattleScreen"

import PersonagemStorage from "../src/storage/personagemStorage"
import { useGameStore } from "../src/storage/game.store"


import {TipoCenaEnum} from "../src/enums/TipoCenaEnum"
import InventoryDrawer from "@/src/components/InventoryDrawer";


export default function Game() {
const [_campanha, setCampanha] = useState<Campanha | null>(null);
const [_personagem, setPersonagem] = useState<PersonagemPostResponse | null>(null);
const [_goToBattle, setGoToBatlle] = useState<boolean>(false);
const [_isLoading, setLoading] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
   const inventario = [
    { id: 1, nome: "Espada", quantidade: 1 , descricao: "Descrição do item aqui 1"},
    { id: 2, nome: "Poção de Vida", quantidade: 5, descricao: "Descrição do item aqui 2" },
    { id: 3, nome: "Escudo", quantidade: 1 , descricao: "Descrição do item aqui 3"},
  ];

const idCampanha = Number(useGameStore((state) => state.campanhaSelecionada));

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const _idPersonagem = await PersonagemStorage.get();
    if(!_idPersonagem)
    {
      const data = await _CampanhaService.get(idCampanha ?? null);
      setCampanha(data);
    }
    else{
      debugger;
      const data = await _PersonagemService.getCenaByIdPersonagem(_idPersonagem);
      setPersonagem(data);
    }
  }

  async function iniciarCampanha() {
    setLoading(true);
    const add = await _PersonagemService.post(idCampanha)
    if(add){
      setPersonagem(add);
      await PersonagemStorage.save(add.id);
    }
    setLoading(false);
  }

  async function limparStoragePersonagem() {
    await PersonagemStorage.clear();
    setPersonagem(null);
  }

    async function irCenaDestino() {
    setLoading(true);
      if(_personagem){
        const post = await _PersonagemService.postDestinoCena(_personagem?.id)
        if(post){
          setPersonagem(post);
        }
      }
    setLoading(false);
    }

    async function GoToBattle() {
      setGoToBatlle(true)
    }

   async function escolher(item: any) {
    if (!_personagem) return;
    const post = await _PersonagemService.postEscolha(_personagem?.id, item.id)
    if(post)
      setPersonagem(post);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        gap: 20,
      }}
    >
      <View style={{
        width: "100%"
      }}>
        {_personagem &&
          <Hud campanha={'Nome da campanha aqui'} hpAtual={_personagem?.hpAtual ?? 0} hpTotal={_personagem?.hpTotal ?? 0} onOpenInventory={() => setDrawerVisible(true)} ></Hud>
        }
      </View>
      <ScrollView
      contentContainerStyle={{
        padding: 20,
        alignItems: "center",
      }}
      >
      {
        !_personagem ? (
          <>
           <Typography font="narrativa" variant="body">
              { _campanha?.historia}
            </Typography>

            <Divider></Divider>
            
            <Button 
            mode="contained"
            loading={_isLoading}
            disabled={_isLoading}
            onPress={() => iniciarCampanha()}>
              Iniciar Campanha
            </Button>    
          </>
        ) : (
          <> 
        {
          !_goToBattle && (
            <>
            <Typography font="narrativa" variant="body">
              { _personagem.cena.descricao}
            </Typography>

            <Divider></Divider>  
            <ChoicesList items={_personagem.cena.escolhas} displayKey="descricao" onSelect={(item) => escolher(item)} />

            {
              _personagem.cena.tipo == TipoCenaEnum.Narrativa &&  
                <Button style={{
                  width: "100%"
                }}
                  mode="contained"
                  loading={_isLoading}
                  disabled={_isLoading}
                  onPress={() => irCenaDestino()}>
                  Proximo
              </Button> 
            }

            {
               _personagem.cena.tipo == TipoCenaEnum.Batalha &&  (
               <>
                <h1>Batalha</h1>

                <Button
                mode="contained"
                onPress={() => GoToBattle()}
                >
                  Batalhar
               </Button>
               </>
               )
            }
            </>
          )
        }
            

            {/* Batalhaaaa */}
            {
              _goToBattle && <BattleScreen personagem={_personagem} />
            }
            
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
             <Button 
              onPress={() => limparStoragePersonagem()}>
                  reiniciar
              </Button>            
          </>
        )
      }
     
</ScrollView>
 <InventoryDrawer
              visible={drawerVisible}
              onClose={() => setDrawerVisible(false)}
              inventario={inventario}
            />
    </View>
  );
}