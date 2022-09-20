import Navbar from './Navbar';
import Info from './Info';
import Slider from './Slider';

import '../base.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <Info />
        <Slider />
      </div>
    </div>
  );
}

export default App;
