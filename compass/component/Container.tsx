interface Props {
    children?: any
    className?: string
}

export default function Container(props: Props) {
    return <div className={`tw-w-full tw-max-w-6xl tw-mx-auto
    tw-px-5 ${props.className || ''}`}>
        {props.children}
    </div>
}
