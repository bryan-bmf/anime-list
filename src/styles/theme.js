import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const myTheme = extendTheme({
    colors: {
        primary: "#fba12c",
        secondary: "#00b0a9",
        highlight: "#a763ff"
    },
    styles: {
        global: (props) => ({
          body: {
            bg: mode('primary')(props),
          }
        })
    }
})