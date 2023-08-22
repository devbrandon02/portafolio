import { extendTheme } from '@chakra-ui/react'

const themeCustom = extendTheme({
  initialColorMode: 'white',
  useSystemColorMode: true,
  colors: {
    primary: {
      50: "#8CDBD9",
      100: "#61C8C7",
      200: "#37B3B4",
      300: "#109B9D",
      400: "#0D797B",
      500: "#109B9D",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
    secondary: {
      50: "#60656E"
    }
  }
})

export default themeCustom