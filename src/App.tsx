
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Joystick } from 'react-joystick-component';
import {useEffect, useState} from 'react'
import Parking from './Parking'


// const speech_1 = `
// Hello, and thank you for activating the Swarmbotics Unmanned ground Vehicle. You may call me Sheila.
// Would you like to start with a tutorial?
// `
// const speech_2 = `
//   okay. that sounds great
// `


// const content = [
//   speech_2,
//   speech_1
// ]

function speak() {
  // Create a SpeechSynthesisUtterance
  // const utterance = new SpeechSynthesisUtterance(content.pop() || 'thank you for driving. goodbye');

  // // Select a voice
  // const voices = speechSynthesis.getVoices();
  // utterance.voice = voices[0]; // Choose a specific voice

  // // Speak the text
  // speechSynthesis.speak(utterance);

  
}

speak();
console.log('wtf')


// turn left 90 deg
// turn right 90 deg
// walk forward 90 feet
// walk backward 90 feet

//way point mode
//session replay


async function do_things (x:number, y:number, backend_url: string) {
  
  let url = backend_url || `https://5ac8-72-195-220-81.ngrok-free.app/drive`

  let req = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      x, y
    })
  })
  let response = await req.json()
}


async function send_brake_message () {
  
  let url = `https://5ac8-72-195-220-81.ngrok-free.app/brake`

  let req = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      //x, y
    })
  })
  let response = await req.json()
}

// let one = `relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline`
// let two = `grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12`
// let three = `flex gap-x-6`

function getX(prevEvent: any) {
  return prevEvent.x?.toPrecision(2)
}
function getY(prevEvent: any) {
  return prevEvent.y?.toPrecision(2)
}
let four = `
hover:bg-indigo-500
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600





relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] cursor-default`

function App() {
  const [count, setCount] = useState(0);
  const [isAccel, setIsAccel] = useState(false);

  const [imageSrc, setImageSrc] = useState('/most_recent.jpg');
  const [prevEvent, setPrevEvent] = useState({})




  useEffect(() => {
    const interval = setInterval(() => {
      // Append a timestamp to the image source to force re-fetching
      setImageSrc(`/most_recent.jpg?${new Date().getTime()}`);
      if (Math.random() > .9999999999) setCount(0)
    }, 150); // Refresh every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval)     ; // Cleanup the interval on component unmount
  }, []);

  const handleMove = (shit: any) => {
    //console.log('move', shit)
    setPrevEvent(shit)
    if (isAccel) {
      do_things(shit.x, shit.y, backendUrl)
    }
  }
  const handleStop = () => {
    //do_things()
    //speak()
  }

  const handleBrake = () => {
    send_brake_message()
  }

  let [backendUrl, setBackendUrl] = useState('')
// <video src="https://adnan-dell-g16-7630.jerboa-kokanue.ts.net/vid.mp4" controls></video> 
  return (
    <>

    <div className="device">

        <div className={("device-content bg-gray-500")}>
        <header className="bar bar-nav">
  {/* <button class="btn btn-link btn-nav pull-left">
    <span class="icon icon-left-nav"></span>
    Left
  </button> */}
  {/* <button class="btn btn-link btn-nav pull-right">
    Right
    <span class="icon icon-right-nav"></span>
  </button> */}
  <h1 className="title">Swarmbotics.AI Teleoperations</h1>
</header>
          <div className={("content-padded" )}>
        {/* <>{window.innerWidth}, {window.innerHeight}</> */}


        <div className="flex justify-between">
          <Joystick size={100} sticky={false} baseColor="gray" stickColor="#333" move={handleMove} stop={handleStop}></Joystick>
          <div>
            
            
            x = <span >{getX(prevEvent)}</span>, y = <span >{getY(prevEvent)}</span>
            isAccel = <span>{isAccel ? 'on': 'off'} </span>
            
          </div>
          <div className={'mt-6'} >
            <button onClick={() => setBackendUrl(prompt('what server would you want - ex https://5ac8-72-195-220-81.ngrok-free.app/drive') || '')}>change server Backend </button>
            <button className={four} onClick={() => setIsAccel(! isAccel)}>Accel</button>
            <button className={four} onClick={handleBrake}>Brake</button>
          </div>
        </div>
        {/* <img 
        style={{'margin': '0 auto'}}
          width="100px" height="100px"
        src="https://raw.githubusercontent.com/MarcoFazioRandom/Virtual-Joystick-Godot/Main/addons/virtual_joystick/previews/icon.png" 
        /> */}
        <img src={imageSrc} alt="Most Recent" className="pt-48"/>
      </div>
      </div>
      {(count > 2) && (<Parking />) }
      </div>
    </>
  )
}

///<video controlvideoElements width="250"></video>

export default App


//ffmpeg -i rtsp://your_rtsp_stream_url -c copy -t 10 test.mp4


         /* <button className={four}>Turn Left</button>
          <button className={four}>Turn Right</button>
          <button className={four}>Waypoint mode</button>
          <button 
          onClick={() =>     do_things()          }
          className={four}>Session Replay</button> */