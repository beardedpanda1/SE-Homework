
import './App.css';
import Kitchen from './components/Kitchen'
import LivingRoom from './components/LivingRoom'
import Bedroom from './components/Bedroom'
import Bath from './components/Bath'



function App() {
  return (
    <div className="App">
      <div className="Kitchen">
        <Kitchen comp = "Kitchen"/>
          <div className="KitchenComponents">
            <Kitchen comp = "Oven" />
            <Kitchen comp = "Sink" />
          </div>
      </div>
      <div>
      <LivingRoom />
      </div>
      <div>
      <Bedroom bedNum = "Bedroom #1" />
      </div>
      <div>
      <Bedroom bedNum = "Bedroom #2" />
      </div>
      <div>
      <Bedroom bedNum = "Bedroom #3" />
      </div>
      <div>
      <Bath size = "Full Bath" />
      </div>
      <div>
      <Bath size = "Half Bath" />
      </div>
      
    </div>
  );
}

export default App;
