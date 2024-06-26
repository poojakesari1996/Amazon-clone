import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import NewNav from './components/newnavbar/NewNav';
import Maincomp from './components/home/Maincomp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewNav/>
      <Maincomp/>
    </div>
  );
}

export default App;
