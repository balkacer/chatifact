import GlobalStyle from "styles/global-style";
import React from "react";
import { Platform, StyleProp, TextStyle, View } from "react-native";
import { useColorScheme } from "react-native-appearance";

const Card = (props: { children: any, style?: StyleProp<TextStyle> }) => {
  const { children, style } = props;
  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  return <View style={[styles.card, style || {}]}>{children}</View>;
};

export default Card;