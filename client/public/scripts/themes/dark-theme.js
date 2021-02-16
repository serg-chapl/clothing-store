import { createMuiTheme} from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'

const primaryGreen = green[500]
const accentGreen = green.A200
const darkGreen = green[900]
const primaryPurple =red[500]
const accentPurple = red.A200
const darkPurple = red[900]

export default createMuiTheme( {
    name: 'Dark Theme',
    palette: {
        type: 'dark',
        primary: {
            light: accentPurple,
            main: primaryPurple,
            dark: darkPurple,
            contrastText: '#fff',
        },
        secondary: {
            light: accentGreen,
            main: primaryGreen,
            dark: darkGreen,
            contrastText: '#fff',
        },
    },
})