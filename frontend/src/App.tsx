import { useEffect, useState } from 'react'
import './App.css'
const GamesAPI = "http://localhost:3000/"

function App() {
  const [data, setData] = useState(null);

  // fetching data from api
  useEffect(() => {
    fetch(GamesAPI + "games")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []); // empty array = runs once on mount


 return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

export default App;