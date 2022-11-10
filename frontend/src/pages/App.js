import Navbar from '../components/Navbar';
import Info from '../components/Info';
import Slider from '../components/Slider';
import MetaData from '../MetaData';
import '../base.css';

function App() {
  return (
    <div className="App">
      <MetaData title="SoleFul-Home"></MetaData>
      <Navbar />
      <div className='main'>
        <Info />
        <Slider />
      </div>
    </div>

  );
}

export default App;
