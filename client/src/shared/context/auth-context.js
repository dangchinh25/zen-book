import { createContext } from "react"

export const AuthContext = createContext({
	isSignedIn: false,
	signin: () => {},
	signout: () => {}
})
