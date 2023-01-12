import Header from "../particle/Header";
import Footer, {Link} from "../particle/Footer";

interface Props {
    title: string
    page_data?: any
    logo: string
    stack: string,
    time?: string
    footer_links?: Link[]
    children?: any
    activeHeader?: string,
}

import hollow from "@bysir/hollow"
import {defaultConfig} from "../initial_data";

let params = hollow.getConfig() || defaultConfig;

function FontFamilyStyle({link, family, selector}) {
    if (!family) {
        return null
    }
    switch (family) {
        case 'LXGW WenKai':
            link = link || 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css'
            break
        case 'Noto Serif SC':
            link = link || 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;900&amp;display=swap'
            break
    }
    return <>
        {link ? <link rel="stylesheet" href={link}/> : null}
        <style dangerouslySetInnerHTML={{
            __html: `${selector} {
            font-family: ${family};
        }`
        }}></style>
    </>
}

const cssAssets = ['/theme/main.css', '/prism/prism.css'].concat(params.assets?.filter(i => i.endsWith('.css')))

const jsAssets = ['/prism/prism.js', '/theme/app/index.js',
    "https://unpkg.com/@popperjs/core@2", "https://unpkg.com/tippy.js@6"].concat(params.assets?.filter(i => i.endsWith('.js')))

export default function Index(props: Props) {
    return <html lang="zh">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"/>
        <title>{props.title || 'UnTitled'}</title>
        {
            params?.fonts?.map((i => {
                return <FontFamilyStyle {...i}></FontFamilyStyle>
            }))
        }
        {
            cssAssets.map(i => <link href={i} rel="stylesheet"/>)
        }
    </head>
    <body className="
    t-min-h-screen t-flex t-flex-col
    language-plain">
    <Header name={props.logo} active={props.activeHeader}></Header>
    <div className="flex-1">
        {
            props.children
        }

    </div>

    <Footer name={props.logo} stack={props.stack} footer_links={props.footer_links}></Footer>
    <div>
        {props.time}
    </div>

    {
        jsAssets.map(i => <script src={i}></script>)
    }

    </body>
    </html>
}
