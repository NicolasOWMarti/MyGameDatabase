import { useEffect, useState } from 'react'
import './App.css'
import GenericGameComponent from './components/GenericGameComponent'
import NewGameForumComponent from './components/NewGameForumComponent'

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

 return <div><div className='grid grid-cols-4 gap-5'>
{ data.map((game) => (
    GenericGameComponent(game["Title"], game["Genre"], game["AgeRestriction"], game["SinglePlayer"], game["MultiPlayer"], game["ReleaseDate"], game["Developer"], game["Publisher"])
  ))}
</div>
  <NewGameForumComponent/>
</div>
}

export default App;