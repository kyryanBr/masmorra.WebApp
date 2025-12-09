
import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

import CampanhaService from "../src/services/campanhaService"

import { Button } from 'react-native-paper';
import Campaign from "@/src/components/Campaigns";
import { CampanhaAllAtivo } from "@/src/models/Campanha";

export default function HomeScreen() {

const [_campanhas, setCampanhas] = useState<[CampanhaAllAtivo] | null>(null);

   useEffect(() => {
      load();
    }, []);

  async function load() {
    const campanhas = await CampanhaService.getAllAtivos();
    if(campanhas)
      setCampanhas(campanhas);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 20,
      }}
    >
      {/* <Text style={{ fontSize: 28, fontWeight: "bold" }}>Home</Text> */}

      {/* <Link href="/game" asChild>
        <Button mode="contained">Iniciar campanha a Floresta da Destruição</Button>
      </Link>
       */}
        <Campaign campanhas={_campanhas ?? null}></Campaign>
    </View>
  );
}