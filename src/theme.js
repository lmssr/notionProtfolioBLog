import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

// const theme = extendTheme({
//   config: {
//     initialColorMode: "light",
//     useSystemColorMode: true,
//   },
//   colors: {
//     primaryDark: '#202023',
//     primaryGray: '#1C1C1C',
//     primaryLight: '#f0e7db',
//   },
//   fonts: {
//     heading: '"Montserrat", sans-serif',
//     body: '"Noto Serif", serif',
//   },
//   styles: {
//     global: (props) => ({
//       'html, body': {
//         backgroundColor: props.colorMode === 'dark' ? 'primaryDark' : 'gray.50',
//         color: props.colorMode === 'dark' ? 'primaryLight' : 'primaryDark',
//         minHeight: '100vh',
//       },
//       body: {
//         paddingBottom: '3rem',
//       },
//     }),
//   },
// });

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        // textDecoration: 'underline',
        fontSize: 24,
        // textUnderlineOffset: 6,
        // textDecorationColor: '#525252',
        // textDecorationThickness: 4,
        marginTop: 100,
        marginBottom: 4
      }
    }
  },
  // Link: {
  //   baseStyle: props => ({
  //     color: mode('#3d7aed', '#ff63c3')(props),
  //     textUnderlineOffset: 3
  //   })
  // }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  primaryDark: '#202023',
  primaryGray: '#1C1C1C',
  primaryLight: '#f0e7db',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme;
