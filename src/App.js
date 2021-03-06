import React from 'react';
import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
import './App.css';

function App() {

  const { ref, playState,getAnimation } = useWebAnimations({...rubberBand
  }
  );
  //   keyframes: [
  //     {transform:"translate(0,0)"},
  //     {transform:"translate(600px,0)"},
      

  //   ],
  //   timing: {
  //   // delay: 500, // Start with a 500ms delay
  //     duration: 1000, // Run for 1000ms
  //     iterations: Infinity, // Repeat once
  //     direction: "alternate", // Run the animation forwards and then backwards
  //     easing: "ease-in-out", // Use a fancy timing function
  //   },
  //   onReady: ({ playState, animate, animation }) => {
  //     // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //   },
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //   },
  //   onFinish: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  //   },
  //   // More useful options...
  // });
  return (
    <div >
  <center>  <div ref={ref} className="target"></div>
    <h1>Current Animation State:{playState}</h1> <br/>
    <button onClick={()=>getAnimation().pause()}>Stop</button><br/>
    <button onClick={()=>getAnimation().play()}>Start</button><br/>
    </center>
    </div>
    
  );
}

export default App;
