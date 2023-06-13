import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export const UserGreeting = () => {
  const values = useContext(UserContext)
  const { name } = values

  // return (
  //   <UserContext.Consumer>
  //     {(value) => <span>Bem vindo, {value.name}</span>}
  //   </UserContext.Consumer>
  // )

  return <span>Bem vindo, {name}</span>
}
