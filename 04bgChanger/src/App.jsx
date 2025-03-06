import { useState } from "react";

function App() {
  const [color, setColor]= useState('olive')

  return (
  <>
  <div className="w-full h-screen" style={{backgroundColor:color}}>
   <div className="flex justify-center">
   <div className="flex flex-wrap gap-3 pl-2 fixed bottom-10">
      <button onClick={()=> setColor('red')} className="text-white rounded-3xl px-3 py-2 cursor-pointer border-solid border-blue border-2
" style={{backgroundColor:'red'}} >Red</button>
      <button onClick={()=> setColor('green')} className="text-white rounded-3xl px-3 py-2 cursor-pointer border-solid border-blue border-2" style={{backgroundColor:'green'}} >Green</button>
      <button onClick={()=> setColor('blue')} className="text-white rounded-3xl px-3 py-2 cursor-pointer border-solid border-blue border-2" style={{backgroundColor:'blue'}} >Blue</button>
      <button onClick={()=> setColor('orange')} className="text-white rounded-3xl px-3 py-2 cursor-pointer border-solid border-blue border-2" style={{backgroundColor:'orange'}} >Orange</button>
      <button onClick={()=> setColor('indigo')} className="text-white rounded-3xl px-3 py-2 cursor-pointer border-solid border-blue border-2" style={{backgroundColor:'indigo'}} >Indigo</button>
     
    </div>
   </div>
  </div>
  </>
  )
}

export default App;
