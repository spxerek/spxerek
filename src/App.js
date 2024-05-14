import './App.css';
import ParticlesComponent from './components/particle';

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <ParticlesComponent id="particles" />
      </div>
      <div className='content-wrapper'>
        <p className='newtext'>Spxerek</p>
        <div className='contents '>
          <p>Made by sarvesh</p>
        </div>
      </div>
    </div>
  );
}

export default App;
