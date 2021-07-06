import React from "react"
import { Router } from "@reach/router"
import Subscription from "../../components/subscription"
import Publishing from "../../components/publishing"
import PrivateRoute from "../../components/private-route"
import { isLoggedIn, isAdmin } from '../../components/app-user'

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/subscription" allowed={isLoggedIn()} component={Subscription} />
      <PrivateRoute path="/publishing" allowed={isAdmin()} component={Publishing} />
    </Router>
  )
}
export default App