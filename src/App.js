import './App.css';
import Hooks from './Componentes/Hooks';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>PRODUCTOS</h1>
        <Hooks initialNumber={0}/>
      </div>
    </div>
  );
}

export default App;
