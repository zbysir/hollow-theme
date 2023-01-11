interface SearchBtnProps {
    enable?: boolean
    onBtnClick?: () => void
}

export default function SearchBtn(props: SearchBtnProps) {
    return <>
        <button className={`t-btn t-btn-ghost t-btn-xs t-btn-circle t-w-6 t-h-6 t-p-0 ${props.enable ? '' : 't-btn-disabled'}`}
                onClick={props.onBtnClick}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="t-h-5 t-w-5"
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
