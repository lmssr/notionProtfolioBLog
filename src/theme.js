import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    primaryDark: '#202023',
    primaryGray: '#1C1C1C',
    primaryLight: '#f0e7db',
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Noto Serif", serif',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'primaryDark' : 'gray.50',
        color: props.colorMode === 'dark' ? 'primaryLight' : 'primaryDark',
        minHeight: '100vh',
      },
      body: {
        paddingBottom: '3rem',
      },
    }),
  },
});

export default theme;
