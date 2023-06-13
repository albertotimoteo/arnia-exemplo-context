import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"

const TabelaDados = () => {
  const values = useContext(UserContext)
  const { token } = values
  const [dados, setDados] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await (
        await fetch("minha_api", {
          headers: {
            "x-api-token": token,
          },
        })
      ).json()

      setDados(result)
    }

    fetchData()
  }, [token])

  return (
    <div>
      {dados.map((dado) => (
        <>...</>
      ))}
    </div>
  )
}

export default TabelaDados
