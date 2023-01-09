export const Toc = ({title = '', items = [], id = '', level = 0}) => {
    if (title) {
        return <li style={{paddingLeft: level * 20 + 'px'}}>
            <a href={"#" + id}>{title}</a>
            {items?.map(i => <Toc {...i} level={level + 1}></Toc>)}
        </li>
    } else {
        return items?.map(i => <Toc {...i} level={level + 1}></Toc>)
    }
}
