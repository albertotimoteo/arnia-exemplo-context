import { useState } from "react"
import { TopMenu } from "./components/TopMenu"
import { UserGreeting } from "./components/UserGreeting"
import { UserContext } from "./contexts/UserContext"

function App() {
  const [nome, setNome] = useState("Alberto")

  return (
    <>
      <UserContext.Provider
        value={{
          name: nome,
          token: "1duj918dh12dy1dg1dtdsa8df812df",
          permissions: ["TopMenu", "TabelaDados"],
        }}
      >
        <TopMenu />
      </UserContext.Provider>
      <UserGreeting />
      <input value={nome} onChange={(event) => setNome(event.target.value)} />
    </>
  )
}

export default App
