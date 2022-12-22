import {Gallery, GalleryItem} from "../page/Gallery";


interface GalleryImgProps {
    item: GalleryItem
    onClick?: (GalleryItem) => void
}

export  function GalleryImg({item, onClick}: GalleryImgProps) {
    return <div onClick={() => onClick && onClick(item)}
                className={"cursor-pointer relative pt-[100%]"}>
        <img className={"absolute object-cover rounded-lg h-full w-full top-0"} src={item.thumb || item.url}
             loading="lazy"
             alt={item.text}/>
    </div>
}

interface GalleryBoxProps {
    gallery: Gallery
    onClick?: (GalleryItem) => void
}

export default function GalleryBox({gallery, onClick}: GalleryBoxProps) {
    return <div className="
        mt-8
        grid grid-cols-4 md:grid-cols-5 gap-2
        auto-rows-auto auto-cols-auto grid-flow-row
        ">
        {
            gallery?.items?.map(i => (
                <GalleryImg item={i} onClick={onClick}></GalleryImg>
            ))
        }
    </div>
}