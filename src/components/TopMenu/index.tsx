import { useContext } from "react"
import { UserGreeting } from "../UserGreeting"
import { UserContext } from "../../contexts/UserContext"

export const TopMenu = () => {
  const values = useContext(UserContext)

  return (
    <>
      {values.permissions.includes("TopMenu") ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Logo da empresa</h3>
          <UserGreeting />
        </div>
      ) : (
        <h1>Não permitido!</h1>
      )}
    </>
  )
}
