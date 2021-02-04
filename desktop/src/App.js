import { useState } from "react"
import "./App.css"


function App() {

  const [cont, setCont] = useState(1)


  function acrecent(){
    setCont(cont + 1)
  }


  return (
    <div className="App">

      <div>
        <h2 >melatonina</h2>
        <span>{cont}</span>
      </div>

      <h1>Estou sem tempo</h1>
      <p>quando possivel irei implementar</p>
      <button onClick={acrecent} >Enviar um pouco de melatonina</button>
    </div>
  );
}
export default App;



