import './App.css';
import SportForm from './SportForm';

function App() {
  const title = "Fitness Goal for Today"
  return (
    <div 
    className="App">
      <div className='content'>
        <h1>{title}</h1>
      </div>
      <SportForm />
    </div>
  );
}

export default App;
