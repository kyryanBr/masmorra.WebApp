import React from "react";
import { Button, ButtonProps } from "react-native-paper";

/**
 * Um botão totalmente compatível com o react-native-paper.
 * Pode ser importado com qualquer nome e aceita TODOS os props
 * do Button nativo.
 */
export default function CustomButton(props: ButtonProps) {
  return <Button {...props} />;
}