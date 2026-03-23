import { useEffect, useState } from 'react'
import './App.css'
import GenericGameComponent from'./GenericGameComponent.tsx'  

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

  //console.log(data?.[0]?.title)

 return <div className='grid grid-cols-2 gap-4'>

  <div>
    {data ? GenericGameComponent(data[0]["Title"], data[0]["Genre"], data[0]["AgeRestriction"], data[0]["SinglePlayer"], data[0]["MultiPlayer"], data[0]["ReleaseDate"], data[0]["Developer"], data[0]["Publisher"]) : "Loading..."}
  </div>
  <div>
    {data ? GenericGameComponent(data[1]["Title"], data[1]["Genre"], data[1]["AgeRestriction"], data[1]["SinglePlayer"], data[1]["MultiPlayer"], data[1]["ReleaseDate"], data[1]["Developer"], data[1]["Publisher"]) : "Loading..."}
  </div>
  <div>
      {data ? GenericGameComponent(data[2]["Title"], data[2]["Genre"], data[2]["AgeRestriction"], data[2]["SinglePlayer"], data[2]["MultiPlayer"], data[2]["ReleaseDate"], data[2]["Developer"], data[2]["Publisher"]) : "Loading..."}
  </div>
  <div>
      {data ? GenericGameComponent(data[3]["Title"], data[3]["Genre"], data[3]["AgeRestriction"], data[3]["SinglePlayer"], data[3]["MultiPlayer"], data[3]["ReleaseDate"], data[3]["Developer"], data[3]["Publisher"]) : "Loading..."}
  </div>
  <div>
      {data ? GenericGameComponent(data[4]["Title"], data[4]["Genre"], data[4]["AgeRestriction"], data[4]["SinglePlayer"], data[4]["MultiPlayer"], data[4]["ReleaseDate"], data[4]["Developer"], data[4]["Publisher"]) : "Loading..."}
  </div>
 </div>
}

export default App;