import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeamPage from './TeamPage'
import CreateTeam from './CreateTeam';
import { NavLink } from 'react-router-dom';

import React, { Component } from 'react'
import EditPage from './EditPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <NavLink to="/" className="link"> Home </NavLink>
            <NavLink to="/create" className="link"> Create </NavLink>
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <TeamPage {...routerProps} />} //list Page
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreateTeam {...routerProps} />} //create page
            />
            <Route
              path="/edit/:id"
              exact
              render={(routerProps) => <EditPage {...routerProps} />} //details / edit page
            />

          </Switch>
        </Router>
      </div>
    )
  }
}
