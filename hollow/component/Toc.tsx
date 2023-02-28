export const Toc = ({title = '', items = [], id = '', level = 0}) => {
    if (title) {
        return <li >
            <a href={"#" + id} className="t-p-1 t-block">{title}</a>

            <ul style={{paddingLeft: level * 20 + 'px'}}>
                {items?.map(i => <Toc {...i} level={level + 1}></Toc>)}
            </ul>
        </li>
    } else {
        return <ul style={{paddingLeft: level * 20 + 'px'}}> {items?.map(i => <Toc {...i} level={level + 1}></Toc>)}</ul>
    }
}