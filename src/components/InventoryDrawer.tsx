import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Drawer, IconButton, Button } from "react-native-paper";

interface ItemInventario {
  id: number;
  nome: string;
  quantidade: number;
}

interface InventoryDrawerProps {
  visible: boolean;
  onClose: () => void;
  inventario: ItemInventario[];
  style?: object;
}

export default function InventoryDrawer({
  visible,
  onClose,
  inventario,
  style
}: InventoryDrawerProps) {
  if (!visible) return null; // não renderiza se não estiver visível

  return (
    <View style={styles.overlay}>
      <View style={styles.drawer}>
        <View style={styles.header}>
          <Text style={styles.title}>Inventário</Text>
          <IconButton icon="close" size={24} onPress={onClose} />
        </View>

        <ScrollView>
          <Drawer.Section>
            {inventario.map((item) => (
              <Drawer.Item
                key={item.id}
                label={`${item.nome} x${item.quantidade}`}
                onPress={() => console.log("Selecionou:", item.nome)}
              />
            ))}
          </Drawer.Section>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  drawer: {
    backgroundColor: "#fff",
    maxHeight: "70%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
