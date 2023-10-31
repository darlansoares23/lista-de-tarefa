import { useRef, useState } from 'react';
import './App.css'

type TTarefa = {
  id: number;
  tarefa: string;
  pronto: boolean;
};

function App() {
  const [tarefas, setTarefas] = useState<TTarefa[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const criarTarefa = () => {
    if (inputRef.current)
    setTarefas{(id: Math.random(), tarefa: inputRef.current.value, pronto: false},...tarefas,)
  }
    <>
    {tarefas.map((tarefa)=><div key=(tarefa.id)}>
    <span>(tarefa.tarefa)</span>
    <button>Pronto</button>  
    </div>

      <div id='coiso'>
        <h1>teste bacana</h1>
        <form onSubmit={(e)=> {e.preventDefault();
        criarTarefa();
        }}> 
        <input ref={inputRef} maxLength={30} id='botão' type= "text" placeholder='digite sua tarefa' required />
        </form>
      <button>adicionar</button>
      </div>
    </>
  )
}

export default App
