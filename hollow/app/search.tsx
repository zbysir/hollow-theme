import Fuse from 'fuse.js'
import { useEffect, useRef, useState } from "react";
import { articleRoute } from "../util";

export function Search() {
  const [fuse, setFuse] = useState<Fuse<any>>()

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

  const [searchResult, setSearchResult] = useState<any[]>()
  const [showSearch, setShowSearch] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  return <>
    <button className="btn btn-ghost btn-xs btn-circle"
            onClick={() => {
              setShowSearch(true)
              setTimeout(() => {
                inputRef?.current?.focus()
              }, 17)
            }}>
      <svg xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>

    <div>
      <input type="checkbox"
             checked={showSearch}
             id="my-modal"
             className="modal-toggle"/>
      <div className="modal">
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
            <label onClick={() => setShowSearch(false)}
                   className="btn btn-sm">关闭</label>
          </div>
        </div>
      </div>

    </div>
    </>
}
