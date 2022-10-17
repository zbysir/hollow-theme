import ReactDOM from 'react-dom/client';
import {Search} from "./search";

window.onload = function () {
    const root = ReactDOM.createRoot(document.getElementById('react-dom-search'));
    root.render(<Search></Search>);
}
