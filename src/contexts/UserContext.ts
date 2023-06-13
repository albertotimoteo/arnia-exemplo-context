import { createContext } from "react"

type User = {
  name: string
  token: string
  permissions: Array<string>
}

export const UserContext = createContext<User>({
  name: "AAAA",
  token: "",
  permissions: ["TopMenu", "TabelaDados"],
})
