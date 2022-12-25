import ReactDOM from 'react-dom/client';
import Search from "./search";
import Gallery from "./gallery";

window.onload = function () {
    const searchDom = document.getElementById('react-dom-search')
    if (searchDom) {
        const root = ReactDOM.createRoot(searchDom);
        root.render(<Search enable={true}></Search>);
    }

    const gallery = document.getElementById("gallery-box")
    if (gallery) {
        const root = ReactDOM.createRoot(gallery);
        root.render(<Gallery gallery={JSON.parse(gallery.dataset['json'])}></Gallery>);
    }

    const anchors = document.querySelectorAll("[data-anchor]")
    if (anchors) {
        anchors.forEach(i => {
            if (i instanceof HTMLElement) {
                const a = JSON.parse(i.dataset['anchor'])
                // https://atomiks.github.io/tippyjs/
                // @ts-ignore
                tippy(i, {
                    content: `<div class="prose prose-sm p-2">${a.content}</div>`,
                    interactive: true,
                    allowHTML: true,
                    theme: 'light',
                    appendTo: () => document.body, // 移动到 body 更好做样式
                });
            }
        })
    }
}
