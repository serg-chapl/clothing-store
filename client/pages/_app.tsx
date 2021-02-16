import { themes } from '../.storybook/preview'

import '../public/styles/global.sass'
import 'sanitaze.css'
import {useEffect} from "react";
import {AppProps} from "next/app";
import {ThemeProvider} from "@material-ui/styles";

const MyApp = ({ Component, pageProps}: AppProps): JSX.Element => {
    useEffect( () => {
        const jssStyles: any = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentsElement.removeChild(jssStyles)
        }
    }, [])

    return (
            <ThemeProvider theme={themes[0]}>
                <Component {...pageProps} />
            </ThemeProvider>
    )
}

export default MyApp


