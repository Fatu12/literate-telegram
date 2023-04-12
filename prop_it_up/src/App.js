
import './App.css';
import PersonCard from './components/PersonCard';

function App(){
  return (
    <div className="App">
    <PersonCard firstName = "Will" lastName= "John" age = "34"  hairColor = "Black" />
    

    
    <PersonCard firstName = "Jenny" lastName= "Josh" age = "45"  hairColor = "Yellow" />
    <PersonCard firstName = "Mosh" lastName= "Millard" age = "45"  hairColor = "Brown" />
    <PersonCard firstName = "Smith" lastName= "Maria" age = "63"  hairColor = "Brown" />
    </div>
  );
}

export default App;
