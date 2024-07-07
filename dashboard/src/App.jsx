import './App.css'
import Sidebar from './Sidebar';
import MainContent from './Maincom';
import Navbar from './Nav';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
