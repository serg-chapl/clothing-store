import * as React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript, DocumentContext,
} from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link
                    rel="stylesheet"
                    href=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const materialUiServerStyleSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
            originalRenderPage( {
                enhanceApp: (App) => (props) =>
                    materialUiServerStyleSheets.collect(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                materialUiServerStyleSheets.getStyleElement(),
            ],
        }


}

export default MyDocument