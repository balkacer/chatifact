import React from "react";
import { Platform, Text, TextInput, View } from "react-native";
import { useColorScheme } from "react-native-appearance";
import GlobalStyle from "../styles/global-style";
import Screen from "../components/screen";
import Theme from "../theme/theme";

const ChatsScreen = () => {
  const screenName = "Chats";
  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  return (
    <Screen>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>{screenName}</Text>
        <TextInput style={styles.textInput} placeholder="Search a chat..." placeholderTextColor={Theme(colorScheme).colors.placeholder} />
      </View>
    </Screen>
  );
};

export default ChatsScreen;
