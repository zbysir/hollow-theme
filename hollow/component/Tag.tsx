export default ({text, active=false})=>{
    return <div
        className={`${active?'t-bg-info':'t-bg-neutral'} t-flex t-items-center
        t-px-3 t-py-1 t-rounded-full t-text-xs t-font-medium t-inline-block`}>
        <span>{text}</span>
    </div>
}