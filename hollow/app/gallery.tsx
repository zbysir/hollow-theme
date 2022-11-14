import {Gallery, GalleryItem} from "../page/Gallery";
import GalleryBox from "../component/GalleryBox";
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
        <GalleryBox
            gallery={gallery} onClick={(item) => {
            setCurrItem(item)
        }}></GalleryBox>

        <div className={`fixed top-0 left-0 right-0 w-full h-full z-100
        transition-opacity
        ${visible ? 'visible' : 'invisible'}
        ${currItem ? 'opacity-100' : 'opacity-0'}
        `}>
            <div className={"absolute top-0 left-0 w-full h-full flex flex-col"}
                 onClick={() => {
                     setCurrItem(null)
                 }}
            >
                <div
                    className={"mx-6 md:mx-12 mt-6 md:mt-12 flex flex-1 max-h-full items-center justify-center shrink-0 overflow-hidden"}
                >

                    <img
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className={`object-contain rounded-lg max-h-full shadow-md`}
                        src={currItem?.url || currItem?.thumb || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
                        alt={currItem?.text}/>
                </div>
                <div className={`h-12 shrink-0 flex text-center items-center justify-center
                    text-white
                    px-3
                    `}>
                    <span className={`whitespace-pre-wrap`}>{currItem?.text}</span>
                </div>

            </div>
            <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-75 z-[-1]
            flex items-center justify-center text-white`}>
                Loading...
            </div>
        </div>

    </>
}