import { useState } from "react";

export function Counter(){
  const [contador, setContador] = useState(0)

  function increment(){
    setContador(contador + 1)
  }

  return(
    <>
      <h1>{contador}</h1>
      <button onClick={increment}>increment</button>
    </>
  )
}