// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('pink.50', 'purple.800')(props),
                color: mode('black', 'white')(props)
            },
        }),
    }, })

export default theme