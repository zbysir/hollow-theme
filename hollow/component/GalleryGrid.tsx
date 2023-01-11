import {Gallery, GalleryItem} from "../page/Gallery";


interface GalleryImgProps {
    item: GalleryItem
    onClick?: (GalleryItem) => void
    enable?: boolean
}

export function GalleryImg({item, onClick, enable}: GalleryImgProps) {
    return <div onClick={() => onClick && onClick(item)}
                className={"t-cursor-pointer t-relative t-pt-[100%]"}>
        {!enable ?
            <div className={"t-animate-pulse t-absolute t-rounded-lg t-h-full t-w-full t-top-0 t-z-10 t-bg-neutral-200 dark:t-bg-gray-900"}>            </div> : null}
        <img className={"t-absolute t-object-cover t-rounded-lg t-h-full t-w-full t-top-0"} src={item.thumb || item.url}
             loading="lazy"
             alt={item.text}/>
    </div>
}

interface GalleryBoxProps {
    gallery: Gallery
    onClick?: (GalleryItem) => void
    enable?: boolean
}

export default function GalleryGrid({gallery, onClick, enable}: GalleryBoxProps) {
    return <div className="
        t-mt-8
        t-grid t-grid-cols-4 md:t-grid-cols-5 t-gap-2
        t-auto-rows-auto t-auto-cols-auto t-grid-flow-row
        ">
        {
            gallery?.items?.map(i => (
                <GalleryImg item={i} onClick={onClick} enable={enable}></GalleryImg>
            ))
        }
    </div>
}