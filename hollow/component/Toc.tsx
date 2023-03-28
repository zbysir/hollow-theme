export const Toc = ({title = '', items = [], id = ''}) => {
    if (title) {
        return <li>
            <a href={"#" + id} className="t-p-1 t-block">{title}</a>

            <ul style={{paddingLeft: 20 + 'px'}}>
                {items?.map(i => <Toc {...i}></Toc>)}
            </ul>
        </li>
    } else {
        return <ul style={{paddingLeft: 20 + 'px'}}>
            {items?.map(i => <Toc {...i} ></Toc>)}
        </ul>
    }
}
