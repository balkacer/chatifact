import React from "react";
import { Platform, Text } from "react-native";
import { useColorScheme } from "react-native-appearance";
import GlobalStyle from "../styles/global-style";
import Screen from "../components/screen";

const HomeScreen = () => {
  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  return (
    <Screen>
      <Text>hOL H</Text>
      <Text>hOL H</Text>
    </Screen>
  );
};

export default HomeScreen;
