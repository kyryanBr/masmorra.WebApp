import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";


export default function Divider() {
   const { colors } = useTheme();
  return (
    <View
      style={{
        width: "100%",     
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={["transparent", colors.primary, "transparent"]}
        style={{ flex: 1, height: 2 }}
      />

      <View
        style={{
          width: 10,
          height: 10,
          marginHorizontal: 16,
          backgroundColor: colors.primary,//"rgba(75, 75, 255, 0.5)",
          transform: [{ rotate: "45deg" }],
        }}
      />

      <LinearGradient
        colors={["transparent", colors.primary, "transparent"]}
        style={{ flex: 1, height: 2 }}
      />
    </View>
  );
}
