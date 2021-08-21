import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name:"unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList(){
  const [repositories, setRepository] = useState([])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}