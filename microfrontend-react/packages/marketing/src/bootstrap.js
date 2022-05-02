import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const mount = el => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        el
    )
}

// Situation 1 -> Run the code in Marketing App (development env) in isolation
if (process.env.NODE_ENV === "development") {
    const marketingDevRoot = document.querySelector("#_marketing-dev-root")
    if (marketingDevRoot) {
        mount(marketingDevRoot)
    }
}

// Situation 2 -> Run the code in Container App
export { mount }




