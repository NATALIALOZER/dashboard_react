import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/sidebar/Sidebar';
import RightAside from './components/RightAside/RightAside';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightAside/>
        </div>
    </div>
  );
}

export default App;
