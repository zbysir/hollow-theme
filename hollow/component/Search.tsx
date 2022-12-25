interface SearchBtnProps {
    enable?: boolean
    onBtnClick?: () => void
}

export default function SearchBtn(props: SearchBtnProps) {
    return <>
        <button className={`btn btn-ghost btn-xs btn-circle w-6 h-6 p-0 ${props.enable ? '' : 'btn-disabled'}`}
                onClick={props.onBtnClick}>
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
    </>
}
