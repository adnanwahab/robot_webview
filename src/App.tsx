import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Joystick } from 'react-joystick-component';

function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("Vehicle is online and ready to go. ");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}


function App() {
  const [count, setCount] = useState(0)


  const handleMove = () => {}
  const handleStop = () => {
    if (Math.random() > .5) speak()
  }

  return (
    <>
      <div>
      <Joystick size={100} sticky={true} baseColor="red" stickColor="blue" move={handleMove} stop={handleStop}></Joystick>
<video src="http://localhost:3000/vid.mp4" controls></video>

      </div>
      <p className="read-the-docs">
        Hi this is swarmbotics 
      </p>
    </>
  )
}

///<video controls width="250"></video>

export default App


//ffmpeg -i rtsp://your_rtsp_stream_url -c copy -t 10 test.mp4
