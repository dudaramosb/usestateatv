import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(100);
  const [mostrarTexto, setMostrarTexto] = useState(true);

  return (
    <div className="App">
      <h1>Contador: {numero}</h1>
      <button onClick={() => setNumero(numero + 100)}>
        Adicionar 100
      </button>

      <br /><br />

      <button onClick={() => setMostrarTexto(!mostrarTexto)}>
        {mostrarTexto ? 'Esconder' : 'Mostrar'}
      </button>

      {mostrarTexto ? <p>vai palmeiras.</p> : null}
    </div>
  );
}

export default App;
