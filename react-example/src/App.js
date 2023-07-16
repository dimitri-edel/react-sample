import './App.css';
import SideBar  from './components/SideBar';
import StatefullGreeting from "./components/StatefullGreeting";


function App() {
  return (
    <div className="App">
        <StatefullGreeting greeting="Dear User!" />
      <SideBar photos="photos" illustrations="illustrations" paintings="paintings" />      
    </div>
  );
}

export default App;
