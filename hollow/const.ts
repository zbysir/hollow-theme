import {Article} from "@bysir/hollow";

export const defaultConfig = {
    logo: "Hollow Theme",
    stack: "Hollow"
}

export const defaultContents: Article[] =
    [{
        name: "Demo",
        getContent: () => {
            return "Demo"
        },
        meta: {
            tags: ["demo", "hello"]
        },
        content: "Demo",
        ext: "",
        is_dir: false,
    }]

