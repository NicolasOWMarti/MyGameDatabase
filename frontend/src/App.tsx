import { useEffect, useState } from 'react'
import './App.css'
import GenericGameComponent from'./GenericGameComponent.tsx'  

const GamesAPI = "http://localhost:3000/"


type Game = {
    ID: number;
    Title: string;
    Genre: string;
    AgeRestriction: number;
    SinglePlayer: number;
    MultiPlayer: number;
    ReleaseDate: string;
    Developer: string;
    Publisher: string;
  }

function App() {
  const [data, setData] = useState<Game[]>([]);

  // fetching data from api
  useEffect(() => {
    fetch(GamesAPI + "games")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []); // empty array = runs once on mount

  //console.log(data?.[0]?.title)

 return <div className='grid grid-cols-2 gap-4'>
{ data.map((game) => (
    GenericGameComponent(game["Title"], game["Genre"], game["AgeRestriction"], game["SinglePlayer"], game["MultiPlayer"], game["ReleaseDate"], game["Developer"], game["Publisher"])
  ))}
</div>
}

export default App;