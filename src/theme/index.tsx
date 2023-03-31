import { createTheme } from "@mui/material";

const THEME = createTheme({
  palette: {
    primary: {
      main: '#270055',
      light: '#f2f5f7',
      dark: '#010101'
    },
    common: {
      black: 'rgba(0, 0, 0, 0.3)'
    }
  },
  typography: {
    h3: {
      fontSize: '2.5rem',
    }
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            height: '10vh',
            justifyContent: 'center',
          }
        }
      ]
    }
  }
})

export default THEME