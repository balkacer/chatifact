import React from "react";
import { Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const ContactsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>This is top text.</Text>
      <Text>Profile</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
};

export default ContactsScreen;
