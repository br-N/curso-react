import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'

function App() {

  const name = "Karl Marx"

  function sum(a, b){
    return a + b
  }

  return (
    <div className="App">
      <h1>Como estás, {name}?</h1>
      <p>Soma entre 5 e 9: {sum(5, 9)}</p>
      <HelloWorld/>
      <strong><SayMyName nome={name}/></strong>
      <hr></hr>
      <Pessoa foto="https://via.placeholder.com/100" nome="Breno" idade="18" profissao="Palhaço"/>
      <hr></hr>
      <List/>
    </div>
  );
}

export default App;
