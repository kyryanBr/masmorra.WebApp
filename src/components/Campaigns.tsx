import React, { useState } from "react";
import { View, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme, Button } from "react-native-paper";
import { Link, router } from "expo-router";
import { useGameStore } from "../storage/game.store"; 
import RenderHTML, { defaultSystemFonts } from "react-native-render-html";

interface ICampanha {
  id: number;
  nome: string;
  descricao: string;
}

interface IProps {
  campanhas: ICampanha[] | null;
}

export default function Campaigns({ campanhas }: IProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [visibleId, setVisibleId] = useState<number | null>(null);
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const systemFonts = [ ...defaultSystemFonts, "IMFellEnglish_400Regular" ];

  return (
    <View style={{ width: "30%", gap: 1 }}>
      {campanhas?.map((campanha) => {
        const isOpen = openId === campanha.id;

        return (
          <View
            key={campanha.id}
            style={{
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 8,
              backgroundColor: colors.primary
            }}
          >
            {/* 🔘 BOTÃO */}
            <TouchableOpacity
              onPress={() => {
                if (isOpen) {
                  setOpenId(null);
                } else {
                  setOpenId(campanha.id);
                  setVisibleId(campanha.id);
                }
              }}
              style={{ padding: 14 }}
            >
              <Text style={{ 
                color: "white", 
                fontSize: 18, 
                fontFamily: "IMFellEnglish_400Regular" 
                }}>
                {campanha.nome}
              </Text>
            </TouchableOpacity>

            {/* ⭐ ÁREA EXPANDIDA */}
            {visibleId === campanha.id && (
              <Animatable.View
                animation={isOpen ? "fadeInDown" : "fadeOutUp"}
                duration={300}
                onAnimationEnd={() => {
                  if (!isOpen) setVisibleId(null);
                }}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: 12,
                }}
              >
                <RenderHTML contentWidth={width} systemFonts={systemFonts} // ✔️ FONTE REGISTRADA 
                  baseStyle={{ 
                    fontFamily: "IMFellEnglish_400Regular" , // 🔥 para texto fora de tags 
                    fontSize: 20 
                  }} 
                  tagsStyles={{ 
                    p: { fontFamily: "IMFellEnglish_400Regular" }, 
                    h1: { fontFamily: "IMFellEnglish_400Regular" }, 
                    h2: { fontFamily: "IMFellEnglish_400Regular" }, 
                    h3: { fontFamily: "IMFellEnglish_400Regular" }, 
                    span: { fontFamily: "IMFellEnglish_400Regular" }, 
                  }} 
                  source={{ html: campanha.descricao }} />
                <Link href="/game" asChild> 
                  <Button 
                    onPress={() => { useGameStore.getState().setCampanhaSelecionada(campanha.id); 
                    router.push("/game"); }} mode="contained" > 
                    Iniciar 
                  </Button>
                </Link>
              </Animatable.View>
            )}
          </View>
        );
      })}
    </View>
  );
}
