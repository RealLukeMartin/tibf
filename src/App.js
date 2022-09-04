import './App.css';
import AudioButton from './components/AudioButton';
import Records from './components/Records';

function App() {
  return (
    <div className="App">
      <h1>Texas Is Back Folks!</h1>
      <img src="/logo.png" alt="longhorn logo" class="logo" />
      <AudioButton name={'tibf_original_Tessitore.mp3'} />
      <h1>Any Doubts?</h1>
      <AudioButton name={'Brandon_Walker_tsb.mp3'} />
      <h1>Remember Week 2 of 2005?</h1>
      <AudioButton name={'Musberger_OU_UT_05_SweedTD.mp3'} />
      <Records />
    </div>
  );
}

export default App;
