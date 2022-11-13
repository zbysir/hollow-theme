import ReactDOM from 'react-dom/client';
import Search from "./search";
import Gallery from "./gallery";

window.onload = function () {
    const searchDom = document.getElementById('react-dom-search')
    if (searchDom) {
        const root = ReactDOM.createRoot(searchDom);
        root.render(<Search></Search>);
    }

    const gallery = document.getElementById("gallery-box")
    if (gallery) {
        const root = ReactDOM.createRoot(gallery);
        root.render(<Gallery gallery={JSON.parse(gallery.dataset['json'])}></Gallery>);
    }
}
