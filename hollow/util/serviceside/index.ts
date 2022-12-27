import {md} from "@bysir/hollow";

interface Anchor {
    title: string
    content: string
    content_md: string
}

function htmlEncode(value) {
    return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

export function anchor(text: string, as: Record<string, Anchor>) {
    if (!as){
        return text
    }
    const a = new RegExp(`\\b(${Object.keys(as).join("|")})\\b`, 'g')
    // 使用正则替换
    return text.replace(a, (a) => {
        let a1 = as[a];
        if (!a1){
            return a
        }
        if (a1.content_md) {
            a1.content = md(a1.content_md)
        }
        return `<span class="underline decoration-wavy" data-anchor="${htmlEncode(JSON.stringify(a1))}">${a}</span>`
    })
}
