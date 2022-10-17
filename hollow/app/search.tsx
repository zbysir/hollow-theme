import Fuse from 'fuse.js'
import {useEffect, useState} from "react";

const books = [
    {
        title: "关于 宋 song",
        author: {
            firstName: 'John',
            lastName: 'Scalzi'
        }
    },
    {
        title: '介绍 Hollow',
        author: {
            firstName: 'Steve',
            lastName: 'Hamilton'
        }
    }
]

export function Search() {
    const [fuse, setFuse] = useState<Fuse<any>>()

    useEffect(() => {
        fetch('./article.json')
            .then((response) => response.json())
            .then((data) => {
                setFuse(new Fuse(data, {
                    keys: ['name', 'content'],
                    // includeMatches:true,
                    // minMatchCharLength: 2,
                    // findAllMatches: true,
                    includeScore:true
                }))

                const myIndex = Fuse.createIndex(['name', 'content'],data)
                console.log('index', myIndex)
            });
    }, [])

    const [r, setR] = useState<any>()
    return <>
        <div>{
            r?.map(i => (<div>{i.item.name}</div>))
        }</div>
        <input className="input" onChange={(e) => {
            let search = fuse.search(e.target.value);
            console.log('e', search)
            setR(search)
        }}/>
    </>
}