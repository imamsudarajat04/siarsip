import App from './App';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.querySelector('#root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);