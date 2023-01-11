interface Props {
    children?: any
}

export default function Container(props: Props) {
    return <div className="t-w-full t-max-w-6xl t-mx-auto
    t-px-5 t-py-6 sm:t-py-8 md:t-py-12">
        {props.children}
    </div>
}
