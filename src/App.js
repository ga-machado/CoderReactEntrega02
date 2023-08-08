import './components/NavBar/Logo.png';
import './components/NavBar/NavBar.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div> 
  );
}

export default App;
