import { useRef } from 'react';
import './App.css';

function App() {
  const audioRef = useRef(null);

  function playSound(soundName) {
    const sound = require(`./sounds/${soundName}.mp3`);
    const audioElement = audioRef.current;
    audioElement.src = sound;
    audioElement.play();
  }

  function handleKeyDown(event) {
    const key = event.key.toUpperCase();
    switch (key) {
      case 'A':
        playSound('C4');
        break;
      case 'W':
        playSound('Db4');
        break;
      case 'S':
        playSound('D4');
        break;
      case 'E':
        playSound('Eb4');
        break;
      case 'D':
        playSound('E4');
        break;
      case 'F':
        playSound('F4');
        break;
      case 'T':
        playSound('Gb4');
        break;
      case 'G':
        playSound('G4');
        break;
      case 'Y':
        playSound('Ab4');
        break;
      case 'H':
        playSound('A4');
        break;
      case 'U':
        playSound('Bb4');
        break;
      case 'J':
        playSound('B4');
        break;
      case 'K':
        playSound('C5');
        break;
      default:
        break;
    }
  }

  document.addEventListener('keydown', handleKeyDown);

  return (
    <div id='piano'>
      <div className='keys'>
        <div className='key' onMouseDown={() => playSound('C4')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Db4')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Eb4')}></div>
        <div className='key' onMouseDown={() => playSound('F4')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Gb4')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Ab4')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Bb4')}></div>
        <div className='key' onMouseDown={() => playSound('C5')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Db5')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Eb5')}></div>
        <div className='key' onMouseDown={() => playSound('F5')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Gb5')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Ab5')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Bb5')}></div>
        <div className='key' onMouseDown={() => playSound('C6')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Db6')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Eb6')}></div>
        <div className='key' onMouseDown={() => playSound('F6')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Gb6')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Ab6')}></div>
        <div className='key black--key' onMouseDown={() => playSound('Bb6')}></div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}

export default App;
