import React from "react";
import { View, Text } from "react-native";

type TypographyProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  font?: "default" | "narrativa";
  color?: string;
  align?: "left" | "center" | "right";
  style?: any;
  containerStyle?: any;
};

const variants = {
  h1: { fontSize: 32, fontWeight: "700" },
  h2: { fontSize: 26, fontWeight: "700" },
  h3: { fontSize: 20, fontWeight: "500" },
  body: { fontSize: 18, lineHeight: 28 },
  caption: { fontSize: 14, lineHeight: 20 },
};

export default function Typography({
  children,
  variant = "body",
  font = "default",
  color = "#000",
  align,
  style,
  containerStyle,
}: TypographyProps) {

  const isLongText = variant === "body" || variant === "caption";

  const autoContainerStyle = isLongText
    ? {
        maxWidth: 700,
        width: "100%",
        alignSelf: "center",
        marginVertical: 40,
        paddingHorizontal: 28,
      }
    : {};

  const textProcessed =
    typeof children === "string"
      ? children.replace(/<p>/g, "       ")
      : children;

  const paragraphs =
    typeof textProcessed === "string"
      ? textProcessed.split("\n\n")
      : [textProcessed];

  return (
    <View style={[autoContainerStyle, containerStyle]}>
      {paragraphs.map((p, i) => (
        <Text
          key={i}
          style={[
            {
              fontFamily:
                font === "narrativa"
                  ? "IMFellEnglish_400Regular"
                  : variant === "h1" || variant === "h2" || variant === "h3"
                  ? "Inter_700Bold"
                  : "Inter_400Regular",

              color,
              textAlign: align ?? (isLongText ? "left" : "center"),
              ...variants[variant],

              marginBottom: paragraphs.length > 1 ? 16 : 0,
            },
            style,
          ]}
        >
          {p}
        </Text>
      ))}
    </View>
  );
}
