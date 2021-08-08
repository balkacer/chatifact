import Chat from "components/chat";
import { Screen } from "components/generics";
import chats from "data/chats";
import Theme from "theme/theme";
import React, { useState } from "react";
import { FlatList, Platform, Text, TextInput, View } from "react-native";
import { useColorScheme } from "react-native-appearance";
import GlobalStyle from "styles/global-style";

const ChatsScreen = () => {
  const screenName = "Contacts";

  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  const theme = Theme(colorScheme);

  const [chatList, setChatList] = useState(chats);

  return (
    <Screen>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>{screenName}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search a chat..."
          placeholderTextColor={theme.colors.placeholder}
          onChangeText={(txt) => {
            setChatList(
              chats.filter(
                (c) =>
                  c.chat.contact.name
                    .toLowerCase()
                    .includes(txt.toLocaleLowerCase()) ||
                  c.chat.messages.filter((a) =>
                    (a.content as string)
                      .toLowerCase()
                      .includes(txt.toLowerCase())
                  )
              )
            );
          }}
        />
      </View>
      <FlatList
        style={{ width: "100%", paddingHorizontal: 10 }}
        data={chatList}
        renderItem={({ item, index }) => {
          const { contact, lastMessage, lastTime, isOnline } = item.chat;
          contact.avatarUrl = "https://random.imagecdn.app/150/150";
          return (
            <Chat
              key={index}
              contact={contact}
              lastMessage={lastMessage}
              lastTime={lastTime}
              isOnline={isOnline}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View style={{height: 64, width: "100%"}}>
        
      </View>
    </Screen>
  );
};

export default ChatsScreen;
