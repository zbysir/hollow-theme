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

let params = hollow.getConfig()|| defaultConfig;

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

export default function Index(props: Props) {
    let routerBase = params?.base || ''

    return <html lang="zh">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"/>
        <title>{props.title || 'UnTitled'}</title>
        <link href={routerBase + '/main.css'}
              rel="stylesheet"/>
        <link href={routerBase + '/prism/prism.css'}
              rel="stylesheet"/>
        {
            params?.fonts?.map((i => {
                return <FontFamilyStyle {...i}></FontFamilyStyle>
            }))
        }
    </head>
    <body className="
    bg-gray-50 dark:bg-black
    text-black
    dark:text-white
    min-h-screen language-plain flex flex-col">
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

    <script src={routerBase + '/prism/prism.js'}></script>
    <script src={routerBase + '/app/index.js'}></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>

    </body>
    </html>
}
