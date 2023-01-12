import Link from "../component/Link";
import SearchBtn from "../component/SearchBtn";

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
        <section className="t-w-full
        t-bg-neutral/50
        t-border-b t-border-base-200">
            <div
                className="
                t-container t-flex t-flex-col t-flex-wrap t-items-center
                t-justify-center
                t-mx-auto md:t-flex-row t-max-w-6xl t-px-5 t-py-1">
                <div className="t-relative t-flex t-flex-col md:t-flex-row t-max-w-full">
                    <div className="t-flex t-items-center t-justify-center
                     t-pt-2 t-pb-1 md:t-pb-2 md:t-my-0
                    ">
                        <Link href="/"
                              className="t-flex t-font-medium ">
                            <span
                              className={`t-text-xl ${thin ? 't-font-extralight' : 't-font-black'} t-leading-none t-select-none`}>
                                {props.name}
                            </span>
                        </Link>
                        <div id="react-dom-search" className="t-ml-3 t-mt-2">
                            <SearchBtn></SearchBtn>
                        </div>
                    </div>

                    <div className="md:t-py-3">
                        <div className="md:t-pl-4 md:t-ml-4 md:t-border-l md:t-border-neutral t-h-full"></div>
                    </div>
                    <nav
                      className={`t-flex t-space-x-2 t-overflow-x-auto t-items-center t-text-lg
                        t-tracking-wide
                        md:t-border-neutral
                        ${thin ? 't-font-extralight' : 't-font-medium'}`}>
                        {
                            menus.map(i => (
                                <Link
                                    href={i.href}
                                    className={`t-p-2 t-transition t-duration-150
                                        ${i.active? "t-opacity-100": "t-opacity-50 hover:t-opacity-75"}
                                `}>{i.name}</Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </section>
    </div>
}
