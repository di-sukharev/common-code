import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelActions: {
      root: {
        backgroundColor: grey[100],
      },
    },
    MuiExpansionPanel: {
      root: {
        '&:before': {
          content: '',
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: `translate(${1}rem, ${1.1}rem) scale(1)`,
      },
      shrink: {
        transform: `translate(${1}rem, ${0.5}rem) scale(0.75)`,
      },
    },
    MuiInput: {
      formControl: {
        marginTop: `${0} !important`,
      },
      root: {
        paddingTop: '1rem',
        borderRadius: '4px',
        backgroundColor: 'rgba(0, 0, 0, .1)',
      },
      input: {
        padding: `${0.5}rem ${1}rem`,
      },
      underline: {
        '&:before': {
          content: '',
        },
      },
    },
    MuiMenuItem: {
      root: {
        height: 'auto',
        padding: `${0.5}rem`,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 4,
      },
    },
  },
  typography: {
    // fontSize: 16,
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // display2: { fontWeight: 500 },
    // display3: { fontWeight: 600 },
  },
  palette: {
    // default: 'white',
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[800],
    },
    secondary: {
      light: red[300],
      main: red[800],
      dark: red[900],
    },
    staff: {
      light: grey[400],
      main: grey[800],
      dark: grey[900],
    },
  },
  spacing: {
    unit: 8, // don't touch
  },
  space: {
    mini: '.25rem', // 4px
    XXXsmall: '.5rem', // 8px
    XXsmall: '1rem', // 16px
    Xsmall: '1.5rem', // 24px
    small: '2rem', // 32px
    default: '2.5rem', // 40px
    medium: '3rem', // 48px
    big: '4rem', // 64px
    huge: '5rem', // 80px
    large: '6rem', // 96px
    Xlarge: '8rem', // 128px
    XXlarge: '12rem', // 192px
    XXXlarge: '15rem', // 240px
  },
});

export default theme;
