import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css"
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const showChuck = useSelector( state => state.chackReduce.chuck)

  const chuckLink = 'https://api.chucknorris.io/jokes/random';

  function getChuck(){
    fetch(chuckLink).
    then(result => result.json()).
    then(commits => dispatch({type: "UPDATE_CHUCK", payload: commits.value}))
  }

  return (
    <div className="App">
      {showChuck}
      <MyButton onClick={getChuck}>Кнопка</MyButton>
    </div>
  );
}

export default App;
