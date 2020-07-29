import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Game from './components/Game'
import { Nav } from './components/Nav'
import NameForm from './components/Input'
import Questions from './components/Questions'

const App = () => (

    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/game" component={Game} />
                <Route path="/form" component={NameForm} />
                <Route path="/questions" component={Questions} />
            </Switch>
        </div>
    </Router>

)

export default App;
