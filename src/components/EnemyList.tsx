import React from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View } from "react-native";

import HpBar from "../../src/components/HpBar"

export interface Enemy {
  id: number;
  descricao: string;
  hp: number;
  hpAtual: number;
  dificuldade: number;
}

interface EnemyListProps {
  enemies: Enemy[];
  displayKey?: keyof Enemy;
  loading: boolean,
  onSelect?: (enemy: Enemy) => void;
}

export const EnemyList: React.FC<EnemyListProps> = ({
  enemies,
  displayKey = "descricao",
  loading,
  onSelect,
}) => {
  return (
    <View style={{flexDirection: "row", gap: 10 }}>
      {enemies.map((enemy) => (
        <Card key={enemy.id}>
          <Card.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 10,
              elevation: 2,
              backgroundColor:
                enemy.hpAtual <= 0 ? "#ddd" : "#fafafa",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{alignItems:"center"}}>
                <Avatar.Image 
                  size={48}
                  source={{ uri: "https://img.icons8.com/?size=100&id=lY1qX5yHixET&format=png&color=000000" }}
                />
              </View>
              <Text
                variant="titleLarge"
                style={{
                  textDecorationLine:
                    enemy.hpAtual <= 0 ? "line-through" : "none",
                }}
              >
                {enemy[displayKey]}
              </Text>
               <HpBar atual={enemy.hpAtual} total={enemy.hp}/>
               <Text style={{textAlign:"center"}}>dif: {enemy.dificuldade}</Text>     
              <View style={{ padding: 10 }}>
               <Button
                mode="contained"
                onPress={() => onSelect?.(enemy)}
                disabled={enemy.hpAtual === 0 || loading} 
                loading={loading}
                >
                Atacar
               </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default EnemyList;
