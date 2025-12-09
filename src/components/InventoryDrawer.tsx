import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import { Drawer, IconButton, Card,Button, Tooltip } from "react-native-paper";
import * as Animatable from "react-native-animatable";

interface ItemInventario {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
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
      <Animatable.View
        animation="slideInLeft" // entra da esquerda
        duration={300}
        style={styles.drawer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Inventário</Text>
          <IconButton icon="close" size={24} onPress={onClose} />
        </View>

        <ScrollView>
          <Drawer.Section>
            {inventario.map((item) => (<>
              <Card>
                <Card.Content style={{
                }}>
                <View style={{
                    flexDirection: "row",
                }}>
                    <View style={{
                        flexDirection: "column",
                        marginHorizontal: 8
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                            }}>{item.nome}
                        </Text>
                        <Text style={{
                            fontWeight: "light"
                            }}>{item.descricao}
                        </Text>
                    </View>
                    <Tooltip title="Usar">
                        <TouchableOpacity onPress={() => console.log('teste')}>
                            <Image
                            source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/rucksack.png" }}
                            style={{ 
                            width: 35, 
                            height: 35,
                            //   backgroundColor: colors.primary,
                            borderRadius: 20
                            }}
                        />
                        </TouchableOpacity>   
                    </Tooltip>
                    <Tooltip title="Visualizar" leaveTouchDelay={30}>
                        <TouchableOpacity onPress={() => console.log('teste')}>
                            <Image
                            source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/rucksack.png" }}
                            style={{ 
                            width: 35, 
                            height: 35,
                            //   backgroundColor: colors.primary,
                            borderRadius: 20
                            }}
                        />
                        </TouchableOpacity>   
                    </Tooltip>
                </View>
                </Card.Content>
              </Card>
            </>
            ))}
          </Drawer.Section>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}


const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",       // importante para drawer lateral
    justifyContent: "flex-start", // drawer na direita
  },
  drawer: {
    width: "30%",               // ocupa 70% da largura da tela
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});