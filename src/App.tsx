
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Joystick } from 'react-joystick-component';
import {useEffect, useState} from 'react'



const speech_1 = `
Hello, and thank you for activating the Swarmbotics Unmanned ground Vehicle. You may call me Sheila.
Would you like to start with a tutorial?
`
const speech_2 = `
  okay. that sounds great
`


const content = [
  speech_2,
  speech_1
]

function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(content.pop() || 'thank you for driving. goodbye');

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);

  
}
console.log('wtf')


// turn left 90 deg
// turn right 90 deg
// walk forward 90 feet
// walk backward 90 feet

//way point mode
//session replay

function App() {
  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('/most_recent.jpg');

  useEffect(() => {
    const interval = setInterval(() => {
      // Append a timestamp to the image source to force re-fetching
      setImageSrc(`/most_recent.jpg?${new Date().getTime()}`);
    }, 150); // Refresh every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleMove = () => {
    console.log('move')
  }
  const handleStop = () => {
    console.log('speak')
    speak()
  }
// <video src="https://adnan-dell-g16-7630.jerboa-kokanue.ts.net/vid.mp4" controls></video> 
  return (
    <>
      <div className="device hidden">
        <div className="device-content">
          <div className="content-padded">
        <h3 className="bg-purple-500">Swarmbotics.AI Teleoperations</h3>
      <Joystick size={100} sticky={false} baseColor="red" stickColor="blue" move={handleMove} stop={handleStop}></Joystick>
      
      <img src={imageSrc} alt="Most Recent"/>
      </div>
      </div>
      </div>
    </>
  )
}

setTimeout(function() {
  return;
    const videoElement = document.querySelector('video');

    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request webcam access
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Set the source of the video element to the stream from the webcam
                videoElement.srcObject = stream;

                // Play the video
                videoElement.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
    } else {
        alert('Sorry, your browser does not support getUserMedia');
    }
}, 5000);
///<video controls width="250"></video>

export default App


//ffmpeg -i rtsp://your_rtsp_stream_url -c copy -t 10 test.mp4
