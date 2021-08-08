import React from "react";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chats, Profile, Contacts, Settings } from "./src/screens";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Theme from "./src/theme/theme";

const Stack = createNativeStackNavigator();

const App = () => {
  let scheme = useColorScheme();
  let theme = Theme(scheme);
  let invertedScheme = scheme == "dark" ? "light" : "dark" as StatusBarStyle;
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Chats"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Chats" component={Chats}/>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar style={invertedScheme} backgroundColor={theme.colors.background} />
    </AppearanceProvider>
  );
};

export default App;
