import './styles/App.css';
import Counter from './components/Counter.js';
export default function App() {
  return (
    <div className="App">
      <Counter 
        initialValue={23}
        initialStep={4}
      />
      <Counter 
        initialValue={0}
        initialStep={100}
      />
      <Counter 
        initialValue={50}
        initialStep={200}
      />
    </div>
  );
}


