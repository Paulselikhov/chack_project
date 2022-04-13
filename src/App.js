import React, {useEffect, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css"



function App() {
  
  const [value, setValue] = useState();
  const chuck = 'https://api.chucknorris.io/jokes/random';

  useEffect(()=>{
    getChuck()
  },[])



  

  function getChuck(){
    fetch(chuck).then(result => result.json()).then(commits => setValue(commits.value))
  }
  return (
    <div className="App">
      {value}
    <MyButton onClick={getChuck}>Кнопка</MyButton>

    </div>
  );
}

export default App;
