import logo from './logo.svg';
import './App.css';
import { categories } from '../api';

function App() {
  return (
    <div>
      
      {categories.map( (category) => {
        return <p>{category.title}</p>
      }
      
      )}

    </div>
  );
}

export default App;
