import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

const Home = () => {
    return <h4>Home Page</h4>
}

const Pricing = () => {
    return <h4>Pricing Page</h4>
}


const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/pricing">
                    <Pricing />
                </Route>
            </Switch>

        </div>
    )
}

export default App;