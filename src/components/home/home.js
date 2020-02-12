import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {SearchBar} from 'component/searchbar/searchbar'

function Home(props) {
    return (
            <Router>
                <SearchBar />
                <Route exact path="/page" component={PageInfo} />
            </Router>
    );
}

export default Home;