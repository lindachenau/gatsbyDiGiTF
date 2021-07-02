import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import Subscription from "../../components/subscription"
import Publishing from "../../components/publishing"
import PrivateRoute from "../../components/private-route"
import { isLoggedIn, isAdmin } from '../../components/app-user'

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/subscription" allowed={isLoggedIn()} component={Subscription} />
        <PrivateRoute path="/publishing" allowed={isAdmin()} component={Publishing} />
      </Router>
    </Layout>
  )
}
export default App