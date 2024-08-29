import "@/styles/globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createBreakpoints } from "@mui/system"
import { appWithTranslation } from 'next-i18next'
const breakpoints = createBreakpoints({})

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'Roboto Mono Italic'
    ].join(','),
    h1: {
      fontFamily: 'Roboto Mono',
      fontSize: '1.5rem',
      fontWeight: 700,
      [breakpoints.up("sm")]: {
        fontSize: "2.5rem"
      }
    },
    h2: {
      fontFamily: 'Roboto Mono',
      fontSize: '1.25rem',
      fontWeight: 700,
      [breakpoints.up("sm")]: {
        fontSize: "1.5rem"
      }
    },
    body1: {
      fontFamily: 'Roboto Mono',
      fontSize: '1rem',
      fontWeight: 400,
      [breakpoints.up("sm")]: {
        fontSize: "1.125rem"
      }
    },
    subtitle1: {
      fontFamily: 'Roboto Mono',
      fontSize: '1.125rem',
      fontWeight: 400,
      [breakpoints.up("sm")]: {
        fontSize: "1.25rem"
      }
    },
    button: {
      fontFamily: 'Roboto Mono',
      fontSize: '1rem',
      fontWeight: 500,
      [breakpoints.up("sm")]: {
        fontSize: "1.125rem"
      }
    },
  },
  palette: {
      primary: {
          main: '#E4E1F1',
          dark: '#A59CD1',
          contrastText: '#0C0A15'
      },
      secondary: {
          main: '#652F4F',
      },
  },
})

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
