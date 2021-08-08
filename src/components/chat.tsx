import { MessageModel, ContactModel } from "models";
import GlobalStyle from "styles/global-style";
import Theme from "theme/theme";
import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { Card } from "./generics";

const Chat = (props: {
  contact: ContactModel;
  lastMessage: MessageModel;
  lastTime: string;
  isOnline: boolean;
}) => {
  const { lastMessage, contact, isOnline, lastTime } = props;
  const { name, avatarUrl } = contact;
  const { content } = lastMessage;
  let colorScheme = useColorScheme();
  const styles = GlobalStyle(colorScheme, Platform.OS);
  const theme = Theme(colorScheme);
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
    >
      <View style={{ marginRight: 10 }}>
        <Image
          source={{ uri: avatarUrl }}
          style={styles.avatarNormal}
        />
      </View>
      <View style={{width: "100%"}}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.messageText}>{content as string}</Text>
      </View>
        <Text
          style={{
            fontSize: 10,
            fontStyle: "italic",
            color: theme.colors.secondaryText,
            position: "absolute",
            right: 15,
            top: 10,
          }}
        >
          {lastTime}
        </Text>
        <View
          style={{
            width: 8,
            height: 8,
            backgroundColor: theme.colors[isOnline ? "online" : "offline"],
            borderRadius: 10,
            position: "absolute",
            right: 10,
            bottom: 10,
          }}
        ></View>
    </Card>
  );
};

export default Chat;
