import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface RpgButtonProps {
  children: string;
  onPress?: () => void;
  disabled?: boolean;
  width?: number | `${number}%`;
  height?: number | `${number}%`; 
  fontSize?: number; 
}

export default function RpgButton({ children, onPress, disabled, width = "80%", height, fontSize = 20}: RpgButtonProps) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      disabled={disabled}
       contentStyle={[styles.content, height ? { height } : {}]}
       labelStyle={[styles.label, { fontSize }]}
      style={[styles.button, { width }]} 
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderRadius: 12,
    backgroundColor: "#d6b98b", // pergaminho claro
    borderWidth: 2,
    borderColor: "#5a3a10", // marrom medieval
    elevation: 6,
  },

  content: {
    paddingVertical: 10,
    paddingHorizontal: 0
  },

  label: {
    fontSize: 20,
    fontFamily: "InterBold", // ou a fonte medieval que você quiser depois
    color: "#3b2203",
  },
});
