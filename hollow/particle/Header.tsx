import Link from "../component/Link";
import Search from "../app/search";
import SearchBtn from "../component/Search";

export default function Header(props: { name: string, active: string }) {
    const menus = [
        {href: '/', name: 'Home'},
        {href: '/tags', name: 'Tags'},
        {href: '/about', name: 'About'},
        {href: '/links', name: 'Links'},
        {href: '/gallery', name: 'Gallery'},
    ].map(i => ({
            ...i,
            active: i.name === props.active
        }
    ))

    let thin = true
    return <div
    >
        {/* copy from https://devdojo.com/tails/v1/app#_ */}
        <section className="w-full
        dark:bg-gray-900 bg-white
        border-b border-gray-200 dark:border-gray-800">
            <div
                className="
                container flex flex-col flex-wrap items-center
                justify-center
                mx-auto md:flex-row max-w-6xl px-5 py-1">
                <div className="relative flex flex-col md:flex-row max-w-full">
                    <div className="flex items-center justify-center
                     pt-2 pb-1 md:pb-2 md:my-0
                    ">
                        <Link href="/"
                              className="flex font-medium ">
                            <span
                              className={`text-xl ${thin ? 'font-extralight' : 'font-black'} leading-none text-gray-900 dark:text-gray-100 select-none`}>
                                {props.name}
                            </span>
                        </Link>
                        <div id="react-dom-search" className="ml-3 mt-2">
                            <SearchBtn></SearchBtn>
                        </div>
                    </div>

                    <div className="md:py-3">
                        <div className="md:pl-4 md:ml-4 md:border-l md:border-gray-200 md:dark:border-gray-700 h-full"></div>
                    </div>
                    <nav
                      className={`flex space-x-2 overflow-x-auto items-center text-lg
                        tracking-wide
                        md:border-gray-200
                        ${thin ? 'font-extralight' : 'font-medium'}`}>
                        {
                            menus.map(i => (
                                <Link
                                    href={i.href}
                                    className={`p-2 transition duration-150
                                        ${i.active? "opacity-100": "opacity-50 hover:opacity-75"}
                                `}>{i.name}</Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </section>
    </div>
}
