import React from 'react'
import { Switch,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

const adminRouter = () => {
    return (
        <Switch>
            <Route path="/admin/dashboard" component={AdminDashboard}/>
        </Switch>
    )
}

export default adminRouter
