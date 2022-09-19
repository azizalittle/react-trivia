import './App.css';
import { useState } from 'react'
import { ShowCategories } from './ShowCategories';
import { Trivia } from './Trivia';


function App() {
  const [catID, setCatID] = useState(null)

  return(
    <>
      <h1>Trivia Game</h1>
      {(!catID)
      ? <ShowCategories setCatID={setCatID}/> 
      : <Trivia catID={catID} setCatID={setCatID}/>}
    </>
  );
}

export default App