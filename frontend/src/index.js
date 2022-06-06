import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.querySelector('#root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);