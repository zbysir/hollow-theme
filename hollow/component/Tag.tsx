export default ({text, active = false, count = undefined}) => {
    return <div
        className={`${active ? 't-bg-info' : 't-bg-neutral'} ${count !== undefined?'t-pr-4':''} t-flex t-items-center
        t-px-3 t-py-1 t-rounded-full t-text-xs t-font-medium t-inline-block t-relative`} style={{transformStyle: 'preserve-3d', perspective:'50px', perspectiveOrigin:"right"}}>
        <span>{text}</span>
        {count !== undefined ? <span
            className="t-absolute t-right-0 t-top-0  t-skew-x-13 t-skew-y-13" style={{transform: 'rotateX(40deg) translateZ(10px)',zIndex:22}}>{count}</span> : null}
    </div>
}