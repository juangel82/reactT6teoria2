import logo from './logo.svg';
import './App.css';
import FormularioClasico from './components/FormularioClasico';
import Formulario from './components/Formulario';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Formulario></Formulario>
      </header>
    </div>
  );
}

export default App;
