import Link from "../component/Link";
import Container from "../component/Container";

export default function Header(props: { name: string, active: string }) {
    const menus = [
        {
            href: '/docs', name: 'Docs', content: 'Docs' === props.active ?
                <>
                    <div x-data x-on:click__prevent__stop="$store.isOpen=true"
                         className="tw-flex tw-items-center tw-space-x-1 md:tw-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="tw-w-6 tw-h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                        <span>Docs</span>
                    </div>
                    <span className={"tw-hidden md:tw-block"}>Docs</span>
                </> : "Docs"
        },
        {href: 'https://github.com/zbysir/hollow', name: 'GitHub'},
    ].map(i => ({
            ...i,
            active: i.name === props.active
        }
    ))

    let thin = false
    // {/* copy from https://devdojo.com/tails/v1/app#_ */}
    return <section
        x-data
        x-show="$store.showHeader"
        x-transition:enter="tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700"
        x-transition:enter-start="-tw-translate-y-full"
        x-transition:enter-end="tw-translate-y-0"
        x-transition:leave="tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700"
        x-transition:leave-start="tw-translate-y-0"
        x-transition:leave-end="-tw-translate-y-full"
        className="tw-w-full
                tw-fixed
                tw-bg-neutral
                tw-border-b tw-border-base-200
                tw-z-10">
        <Container>
            <div className="tw-relative tw-flex tw-max-w-full tw-items-center tw-h-[60px]">
                <div className="">
                    <Link href="/"
                          className="tw-p-2 tw-font-medium tw-text-primary -tw-ml-2">
                            <span
                                className={`tw-text-xl ${thin ? 'tw-font-extralight' : 'tw-font-black'} tw-leading-none tw-select-none`}>
                                {props.name}
                            </span>
                    </Link>
                </div>

                <div className="tw-ml-3 tw-border-l tw-border-base-200 tw-h-1/2"></div>
                <nav
                    className={`tw-ml-1 tw-flex tw-overflow-x-auto tw-items-center tw-text-lg
                        tw-tracking-wide
                        ${thin ? 'tw-font-extralight' : 'tw-font-medium'}`}>
                        {
                            menus.map(i => (
                                <Link
                                    href={i.href}
                                    className={`tw-p-2 tw-transition tw-duration-150
                                        ${i.active ? "tw-opacity-100" : "tw-opacity-75 hover:tw-opacity-100"}
                                `}>{i.content || i.name}</Link>
                            ))
                        }
                </nav>
            </div>
        </Container>
        </section>

}
