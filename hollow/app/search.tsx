import Fuse from 'fuse.js'
import { useEffect, useState } from "react";
import { articleRoute } from "../utilx";

export function Search() {
    const [fuse, setFuse] = useState<Fuse<any>>()

    useEffect(() => {
        fetch('/article.json')
            .then((response) => response.json())
            .then((data) => {
                setFuse(new Fuse(data, {
                    keys: ['name', 'content'],
                    includeScore:true
                }))

                const myIndex = Fuse.createIndex(['name', 'content'],data)
                console.log('index', myIndex)
            });
    }, [])

    const [searchResult, setSearchResult] = useState<any[]>()
    return <>
        <div className="dropdown dropdown-open">
            <div className="form-control">
                <div className="input-group input-group-xs">
                    <input type="text"
                           placeholder="Search…"
                           className="input input-bordered input-xs"
                           onChange={(e) => {
                               let search = fuse.search(e.target.value);
                               setSearchResult(search)
                           }}
                    />
                    <button className="btn btn-square btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {searchResult?.length ?
              <ul tabIndex={0}
                  className="dropdown-content menu menu-compact p-3 shadow bg-base-100 rounded-md w-52">
                  {
                      searchResult?.map(i => (<li><a href={articleRoute(i.item)}>{i.item.name}</a></li>))
                  }
              </ul> : null}
        </div>
    </>
}
