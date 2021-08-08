import React from "react";
import { Platform } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "styles/global-style";

const Screen = (props: { children: any }) => {
  const { children } = props;
  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;
