import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useFonts, IMFellEnglish_400Regular } from "@expo-google-fonts/im-fell-english";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Colors } from "../constants/theme";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    accent: '#ff9800',
  },

};

export default function Layout() {
  const [fontsLoaded] = useFonts({
    IMFellEnglish_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  );
}
