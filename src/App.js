import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App bg-dark" id='main'>
    <Navbar/>
   <Vote/>
    </div>
  );
}

export default App;
