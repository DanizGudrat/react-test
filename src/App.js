
import { useState, useEffect } from 'react';
import './App.css'
import Count from './Count';
import Increment from './Increment';
import Decrement from './Decrement';
import IncrementBy from './IncrementBy';
import Main from './Main';

function App() {
  const [data,setData] = useState()
let a = 10;
  return (
  //  <div className={a== 100 ? "red" : "blue"}>
   <div>
dark mode - on

    <p>Lorem ipsum dolor sit amet.</p>
    <button>change mode</button>
    {/* <Main isAvaliable={false}/>
    {a == 10 ? "salam" : "hello"} */}
   

<Count/>
<Increment/>
    <Decrement/>
    <IncrementBy/>
   </div>
  );
}

export default App;
