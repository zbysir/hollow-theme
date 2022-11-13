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
import {defaultGallery} from "../initial_data";
import GalleryBox from "../component/GalleryBox";

let params = hollow.getConfig();
let gallery: Gallery = params?.gallery || defaultGallery

export default function Gallery() {
    return <div className="container mx-auto max-w-2xl py-6 px-5 md:py-12">
        <h3 className="text-3xl xl:text-5xl font-bold dark:text-white text-center">{gallery.title}</h3>

        <div
            id="gallery-box"
            data-json={JSON.stringify(gallery)}
        >
            <GalleryBox gallery={gallery}></GalleryBox>
        </div>
    </div>
}