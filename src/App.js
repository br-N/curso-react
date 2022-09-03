import './App.css'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  const name = "Karl Marx"

  function sum(a, b){
    return a + b
  }

  return (
    <div className="App">

      <Evento numero={1}/>
      <Evento numero={2}/>

      <Form/>
      
    </div>
  );
}

export default App;
