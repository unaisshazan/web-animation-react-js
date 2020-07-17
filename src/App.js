import React,{useRef,useEffect} from 'react';

import './App.css';

function App() {
  const element = useRef(null);
  useEffect(() => {
    element.current.focus();    
  }, [])
  return (
    <div >
    <div ref={element} className="target">Hello World</div>
    </div>
  );
}

export default App;
