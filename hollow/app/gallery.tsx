import {Gallery, GalleryItem} from "../page/Gallery";
import GalleryGrid from "../component/GalleryGrid";
import {useEffect, useState} from "react";

interface GalleryBoxProps {
    gallery: Gallery
}

export default function Gallery({gallery}: GalleryBoxProps) {
    const [currItem, setCurrItem] = useState<GalleryItem>()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!currItem) {
            setTimeout(() => {
                setVisible(false)
            }, 250)
        } else {
            setVisible(true)
        }
    }, [currItem])

    return <>
        <GalleryGrid
            enable={true}
            gallery={gallery} onClick={(item) => {
            setCurrItem(item)
        }}></GalleryGrid>

        <div className={`t-fixed t-top-0 t-left-0 t-right-0 t-w-full t-h-full t-z-100
        t-transition-opacity
        ${visible ? 't-visible' : 't-invisible'}
        ${currItem ? 't-opacity-100' : 't-opacity-0'}
        `}>
            <div className={"t-absolute t-top-0 t-left-0 t-w-full t-h-full t-flex t-flex-col"}
                 onClick={() => {
                     setCurrItem(null)
                 }}
            >
                <div
                    className={"t-mx-6 md:t-mx-12 t-mt-6 md:t-mt-12 t-flex t-flex-1 t-max-h-full t-items-center t-justify-center t-shrink-0 overflow-hidden"}
                >

                    <img
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className={`t-object-contain t-rounded-lg t-max-h-full t-shadow-md`}
                        src={currItem?.url || currItem?.thumb || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
                        alt={currItem?.text}/>
                </div>
                <div className={`t-h-12 t-shrink-0 t-flex t-text-center t-items-center t-justify-center
                    t-text-white
                    t-px-3
                    `}>
                    <span className={`t-whitespace-pre-wrap`}>{currItem?.text}</span>
                </div>

            </div>
            <div className={`t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-black t-opacity-75 t-z-[-1]
            t-flex t-items-center t-justify-center t-text-white`}>
                Loading...
            </div>
        </div>

    </>
}