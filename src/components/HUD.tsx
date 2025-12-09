import * as React from "react";
import { View, TouchableOpacity, Image  } from "react-native";
import { Card, Text, useTheme } from 'react-native-paper';

import HpBar from "../../src/components/HpBar"

interface IProps {
  campanha: string;
  hpAtual: number;
  hpTotal: number;
  onOpenInventory: () => void; // nova prop para abrir o inventário
}
export default function HUD({ campanha, hpAtual, hpTotal, onOpenInventory }: IProps) {
  
  const { colors } = useTheme();

  return (
    <View>
      <View style={{
          width: "100%",
          paddingHorizontal: 100,
          flexDirection: "column"
      }}>
          <Card>
            <Card.Content>
              <Text style={{
                  textAlign: "center",
              }}>{campanha}
              </Text>
              <View style={{
                flexDirection: "row"
              }}>
                <View style={{
                  flex: 1,
                  marginRight: 8
                }}>
                  <HpBar atual={hpAtual} total={hpTotal}></HpBar> 
                </View>
                  <TouchableOpacity onPress={onOpenInventory}>
                    <Image
                    source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/rucksack.png" }}
                    style={{ 
                      width: 35, 
                      height: 35,
                      backgroundColor: colors.primary,
                      borderRadius: 20
                    }}
                  />
                  </TouchableOpacity>             
              </View> 
            </Card.Content>
          </Card>      
      </View>
    </View>
  );
}
