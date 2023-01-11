import Container from "../component/Container";

interface FriendLink {
    url: string
    name: string
    info?: string
}

interface Props {
    links: FriendLink[]
}

export interface GalleryItem {
    text: string
    thumb?: string // 缩略图
    url: string
}

export interface Gallery {
    title: string
    items: GalleryItem[]
}

import hollow from "@bysir/hollow"
import {defaultConfig} from "../initial_data";
import GalleryGrid from "../component/GalleryGrid";

let params = hollow.getConfig() || defaultConfig;
let gallery: Gallery = params?.gallery

export default function Gallery() {
    return <div className="t-container t-mx-auto t-max-w-2xl t-py-6 t-px-5 md:t-py-12">
        <h3 className="t-text-3xl xl:t-text-5xl t-font-bold dark:t-text-white t-text-center">{gallery.title}</h3>

        <div
            id="gallery-box"
            data-json={JSON.stringify(gallery)}
        >
            <GalleryGrid gallery={gallery}></GalleryGrid>
        </div>
    </div>
}