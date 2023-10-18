import React, { useState } from 'react';

export default function App() {
  const [tarefaInput, setTarefaInput] = useState('');
  const [armazenarTarefas, setArmazenarTarefas] = useState([]);
  const getCaracteres = (event) => {
    setTarefaInput(event.target.value);
  }

  const tarefasGuardadas = () => {
    setArmazenarTarefas(armazenarTarefas.concat(tarefaInput));
    console.log(armazenarTarefas)
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <input type="text" onChange={getCaracteres} />
      <button onClick={tarefasGuardadas}>Adicionar</button>
      {armazenarTarefas.map((item, index) => 
        <ul>
          <li key={index}>{item}</li>
        </ul>
        
      )}
      
    </>
    
  )
}

