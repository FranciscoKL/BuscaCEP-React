import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./index.css";
import "./App.css";
import api from "./services/Api";

function App() {
  const [input, setInput] = useState('');

  async function handleSearch(){ 
    if(input === ''){
      alert("Digite algum CEP")
      return;
    } 
    try{
      const respose = await api.get(`${input}`);
      console.log(respose)
    }
    catch{
      alert("Algo de errado não esta certo!!")
      setInput("")

    }

  }


  return (
    <>
      <div className="conteiner">
        <h1 className="title">BuscaCEP</h1>
        <div className="conteinerInput">
          <input 
          size={20} 
          type="text" 
          placeholder="Digite o CEP aki"
          value={input}
          onChange={(e) => setInput(e.target.value)}
           />
          <button className="submit" onClick={handleSearch}>
            <FiSearch size={20} color="#F1F1F1" />

          </button>
        </div>
        <main className="main">
          <h2>CEP: 88-140-000</h2>

          <span>Rua: </span>
          <samp>Complemento: </samp>
          <samp>Bairro:</samp>
          <samp>Cidade:</samp>
          <samp>Estado:</samp>
        </main>
      </div>
    </>
  );
}

export default App;
