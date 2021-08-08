import { ColorSchemeName } from "react-native-appearance";

enum Colors {
    PRIMARY_DARK = "#A72608",
    PRIMARY_LIGHT = "#A72608",
    SECONDARY_DARK = "#FF9770",
    SECONDARY_LIGHT = "#FF9770",
    BG_DARK = "#060606",
    BG_LIGHT = "#fff",
    CARD_BG_DARK = "#242424",
    CARD_BG_LIGHT = "#f3f3f4",
    PLACEHOLDER_DARK = "#545454",
    PLACEHOLDER_LIGTH = "#B4B4B4"
};

function Theme(scheme: ColorSchemeName) {
    return {
        colors: {
            primary: Colors[scheme == "dark" ? "PRIMARY_DARK" : "PRIMARY_LIGHT"],
            background: Colors[scheme == "dark" ? "BG_DARK" : "BG_LIGHT"],
            card: Colors[scheme == "dark" ? "CARD_BG_DARK" : "CARD_BG_LIGHT"],
            secondary: Colors[scheme == "dark" ? "SECONDARY_DARK" : "SECONDARY_LIGHT"],
            title: Colors[scheme == "dark" ? "BG_LIGHT" : "BG_DARK"],
            placeholder: Colors[scheme == "dark" ? "PLACEHOLDER_DARK" : "PLACEHOLDER_LIGTH"],
            text: Colors[scheme == "dark" ? "BG_LIGHT" : "BG_DARK"],
        }
    }
};

export default Theme;
