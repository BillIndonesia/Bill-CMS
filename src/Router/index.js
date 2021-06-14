import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { Home , Login } from '../components'
function Index() {
    return (
        <Router>
            <Route component={Login} path="/login" exact/>
            <Route component={Home} path="/home" />
        </Router>
    )
}

export default Index
