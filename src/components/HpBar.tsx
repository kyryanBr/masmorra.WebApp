import * as React from "react";
import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function HpBar({ atual, total }: { atual: number; total: number }) {
  const progress = atual / total;

  return (
    <View style={{
        width: "100%"
    }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>HP</Text>
            <Text>{atual} / {total}</Text>
        </View>
        <ProgressBar  
        progress={progress} 
        color="#4caf50" style={{ height: 10, borderRadius: 4}} />       
    </View>
  );
}
