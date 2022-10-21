import hollow from "@bysir/hollow"
import {defaultConfig} from "../const";

let params = hollow.getConfig() || defaultConfig;

export default function Link(props) {
    let base = params?.base || ''

    return <a {...props}
              href={base + props.href}>{props.children}</a>
}