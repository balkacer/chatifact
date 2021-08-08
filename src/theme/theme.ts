import { ColorSchemeName } from "react-native-appearance";

enum Colors {
    BG_DARK = "#0F0F0F",
    BG_LIGHT = "#fff",
    CARD_BG_DARK = "#1B2021",
    CARD_BG_LIGHT = "#f3f3f4",
    PLACEHOLDER_DARK = "#545454",
    PLACEHOLDER_LIGTH = "#B4B4B4",
    ONLINE_DARK = "#4CB963",
    ONLINE_LIGHT = "#16C72E",
    OFFLINE_DARK = "#545454",
    OFFLINE_LIGHT = "#B4B4B4",
    SECONDARY_TEXT_DARK = "#8A897C",
    SECONDARY_TEXT_LIGHT = "#8A897C",
};

function Theme(scheme: ColorSchemeName) {
    return {
        avatars: {
            normal: {
                h: 50,
                w: 50,
                r: 50
            }
        },
        colors: {
            background: Colors[scheme == "dark" ? "BG_DARK" : "BG_LIGHT"],
            card: Colors[scheme == "dark" ? "CARD_BG_DARK" : "CARD_BG_LIGHT"],
            title: Colors[scheme == "dark" ? "BG_LIGHT" : "BG_DARK"],
            placeholder: Colors[scheme == "dark" ? "PLACEHOLDER_DARK" : "PLACEHOLDER_LIGTH"],
            text: Colors[scheme == "dark" ? "BG_LIGHT" : "BG_DARK"],
            online: Colors[scheme == "dark" ? "ONLINE_DARK" : "ONLINE_LIGHT"],
            offline: Colors[scheme == "dark" ? "OFFLINE_DARK" : "OFFLINE_LIGHT"],
            secondaryText: Colors[scheme == "dark" ? "SECONDARY_TEXT_DARK" : "SECONDARY_TEXT_LIGHT"]
        }
    }
};

export default Theme;
