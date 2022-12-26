import Fuse from 'fuse.js'
import {useEffect, useRef, useState} from "react";
import {articleRoute} from "../util";
import SearchBtn from "../component/SearchBtn";

export default function Search({enable}: { enable?: boolean }) {
    const [fuse, setFuse] = useState<Fuse<any>>()
    const [searchResult, setSearchResult] = useState<any[]>()
    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        fetch('/article.json')
            .then((response) => response.json())
            .then((data) => {
                setFuse(new Fuse(data, {
                    keys: ['name', 'content'],
                    includeScore: true
                }))
            });
    }, [])

    return <>
        <SearchBtn
            onBtnClick={() => {
                setShowSearch(true)
                setTimeout(() => {
                    inputRef?.current?.focus()
                }, 17)
            }}
            enable={enable}></SearchBtn>

        <div>
            <div className={`modal ${showSearch ? 'modal-open' : ''} items-center`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">搜索文章</h3>
                    <div className="mt-3">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => {
                                let search = fuse.search(e.target.value);
                                setSearchResult(search)
                            }}
                        />

                        {searchResult?.length ?
                            <ul tabIndex={0}
                                className="mt-3 p-1 bg-base-100 rounded-md">
                                {
                                    searchResult?.map(i => (
                                        <li>
                                            <a className="block p-1"
                                               href={articleRoute(i.item)}>
                                                {i.item.meta.title || i.item.name}
                                            </a>
                                        </li>))
                                }
                            </ul> : null}
                    </div>
                    <div className="modal-action mt-3">
                        <label onClick={() => {
                            setShowSearch(false)
                        }}
                               className="btn btn-sm">关闭</label>
                    </div>
                </div>
      </div>

    </div>
    </>
}
