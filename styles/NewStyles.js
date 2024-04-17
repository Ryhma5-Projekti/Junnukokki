import { generateStyles } from "./Styles"

export const lightTheme = generateStyles({}) // default

export const darkTheme = generateStyles({
    PRIMARY_BG_COLOR: '#2b2b1b',
    SECONDARY_BG_COLOR: "#3b4b3b",
    SECONDARY_BG_HIGHLIGHT_COLOR: "#2b3b2b",
    PRIMARY_HEADING_COLOR: "#D2575C",
    PRIMARY_BORDER_COLOR: "#e4e4e4",
    SECONDARY_BORDER_COLOR: "#949494",
    BG_WHITE: "#1b1b1b",
    COLOR_WHITE: "white",
    COLOR_BLACK: "white",
    COLOR_GRAY: "#aaa",
    BORDER_BOTTOM_COLOR_LGRAY: "#999",
    DIMMING_OPACITY: 'rgba(0, 0, 0, 0.5)'
})

export const colorblindTheme = generateStyles({
    PRIMARY_BG_COLOR: 'white',
    SECONDARY_BG_COLOR: 'black',
    SECONDARY_BG_HIGHLIGHT_COLOR: "#6A9C89",
    PRIMARY_HEADING_COLOR: "#D2575C",
    PRIMARY_BORDER_COLOR: "#e4e4e4",
    SECONDARY_BORDER_COLOR: "#949494",
    BG_WHITE: "white",
    COLOR_WHITE: "white",
    COLOR_BLACK: "black",
    COLOR_GRAY: "gray",
    BORDER_BOTTOM_COLOR_LGRAY: "lightgrey",
    DIMMING_OPACITY: 'rgba(0, 0, 0, 0.5)'
})
