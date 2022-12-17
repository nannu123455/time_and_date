import './App.css';

function App() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="App">
      
     <h1>Current date and Time</h1>
     <h2>Date--{date}</h2>
     <h2>Time--{time}</h2>
    </div>
  );
}

export default App;
