import {Content} from "@bysir/hollow";

interface Menu extends Content {
    link: string
    children?: any
}

interface Props {
    activityMenuLink: string
    menu: Menu[]
}

export default function Menu(props: Props) {
    return <div
    >
        {props.menu.map(i => {
            let name = i.meta?.title || i.name
            if (i.is_dir && !i.children?.length) {
                return null
            }

            return <div>
                {
                    i.is_dir ?
                        <div className="tw-text-gray-400 tw-my-4">{name}</div> :
                        <div className={`${i.link === props.activityMenuLink ? 'tw-text-primary' : ''}`}>
                            <a href={i.link}>{name}</a>
                        </div>
                }

                    <div className="pl-0">
                        <Menu activityMenuLink={props.activityMenuLink} menu={i.children}></Menu>
                    </div>

                </div>
            }
        )}

    </div>
}