import './styles/App.css';
import Counter from './components/Counter.js';
function App() {
  return (
    <div className="App">
      <Counter 
        initialValue={23}
        initialStep={4}
      />
    </div>
  );
}

export default App;
