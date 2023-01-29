interface Props {
    children?: any
}

export default function Container(props: Props) {
    return <div className="tw-w-full tw-max-w-6xl tw-mx-auto
    tw-px-5 tw-py-6 sm:tw-py-8 md:tw-py-12">
        {props.children}
    </div>
}
