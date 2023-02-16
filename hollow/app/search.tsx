import Fuse from 'fuse.js'
import {useEffect, useRef, useState} from "react";
import {articleRoute} from "../util";
import SearchBtn from "../component/SearchBtn";

export default function Search() {
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
                    includeScore: true,
                    ignoreLocation: true, // https://fusejs.io/api/options.html#ignorelocation，默认只搜索前 60 个字符，使用 ignoreLocation 启用无限长度。
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
            enable={true}></SearchBtn>

        <div>
            <div className={`t-modal ${showSearch ? 't-modal-open' : ''} t-items-center`}>
                <div className="t-modal-box">
                    <h3 className="t-font-bold t-text-lg">搜索文章</h3>
                    <div className="t-mt-3">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search…"
                            className="t-input t-input-bordered t-input-sm t-w-full"
                            onChange={(e) => {
                                let search = fuse.search(e.target.value);
                                setSearchResult(search)
                            }}
                        />

                        {searchResult?.length ?
                            <ul tabIndex={0}
                                className="t-mt-3 t-p-1 t-bg-base-100 t-rounded-md">
                                {
                                    searchResult?.map(i => (
                                        <li>
                                            <a className="t-block t-p-1"
                                               href={articleRoute(i.item)}>
                                                {i.item.meta.title || i.item.name}
                                            </a>
                                        </li>))
                                }
                            </ul> : null}
                    </div>
                    <div className="t-modal-action t-mt-3">
                        <label onClick={() => {
                            setShowSearch(false)
                        }}
                               className="t-btn t-btn-sm">关闭</label>
                    </div>
                </div>
      </div>

    </div>
    </>
}
