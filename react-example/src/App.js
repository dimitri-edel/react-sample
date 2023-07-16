import './App.css';
import SideBar  from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar photos="photos" illustrations="illustrations" paintings="paintings" />      
    </div>
  );
}

export default App;
