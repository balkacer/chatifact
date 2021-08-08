import { StyleSheet } from "react-native";
import { ColorSchemeName } from "react-native-appearance";

import Theme from "../theme/theme";

const GlobalStyle = (schema: ColorSchemeName = "dark", platform = "android") => {
    const theme = Theme(schema);

    return StyleSheet.create({
        screen: {
            backgroundColor: theme.colors.background,
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            margin: 0
        },
        toolbar: {
            width: "100%",
            height: 200,
            paddingHorizontal: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        toolbarTitle: {
            color: theme.colors.title,
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 10,
            marginLeft: 2
        },
        textInput: {
            width: "100%",
            paddingHorizontal: 20,
            paddingVertical: 16,
            backgroundColor: theme.colors.card,
            borderRadius: 10,
            fontSize: 16,
            color: theme.colors.text
        },
        card: {
            backgroundColor: theme.colors.card,
            padding: 10,
            borderRadius: 10,
            width: "100%"
        },
        cardTitle: {
            color: theme.colors.title,
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 4,
        },
        messageText: {
            color: theme.colors.secondaryText,
            fontSize: 12,
            marginTop: 4
        },
        avatarNormal: {
            backgroundColor: theme.colors.background,
            borderRadius: theme.avatars.normal.r,
            maxHeight: theme.avatars.normal.h,
            minHeight: theme.avatars.normal.h,
            maxWidth: theme.avatars.normal.w,
            minWidth: theme.avatars.normal.w
        }
    })
};

export default GlobalStyle;
