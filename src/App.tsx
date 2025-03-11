import TODOListLogo from "./assets/Logo.png";

import "./App.css";
import "./global.css";
import { CirclePlus } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <img src={TODOListLogo} alt="Logotipo TODO" />
      </header>
      <div className="input-container">
      <input placeholder="Adicione uma nova tarefa"/>
      <button>Criar <CirclePlus size={16} style={{marginLeft: '0.5rem'}}/> </button>
      </div>

    </div>
  );
}

export default App;
