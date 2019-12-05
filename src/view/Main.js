import React from 'react'
import UsersPage from './users/UsersPage'
import AboutPage from './users/AboutPage'
import { Switch, Route } from "react-router-dom"
// import Grid from './users/UsersCard'

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={UsersPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/react-users' component={UsersPage} />
            </Switch>
        </main>

    )
}

export default Main;