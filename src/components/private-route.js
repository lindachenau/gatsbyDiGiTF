import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, allowed, ...rest }) => {
  if (!allowed) {
    navigate("/")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute