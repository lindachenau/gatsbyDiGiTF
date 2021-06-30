const isBrowser = typeof window !== `undefined`

export const setUser = user => {
  if (!isBrowser) 
    return

  (window.localStorage.gatsbyUser = JSON.stringify(user))
}

export const getUser = () => {
  if (!isBrowser) 
    return {}

  if (window.localStorage.gatsbyUser) {
    let user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? user : {}
  }
  return {}
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return !!user.username
}

export const isAdmin = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return user["custom:role"] === "admin"
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = () => {
  if (!isBrowser) return
  setUser({})
}
