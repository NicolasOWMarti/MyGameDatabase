const GamesAPI = "http://localhost:3000/"

// const [inputData, setInputData] = useState<Game[]>([])

async function PostHandler() {
    let testData = {
        Title: 'very coool great game', 
        Genre: 'action', 
        AgeRestriction: '18', 
        SinglePlayer: '1', 
        MultiPlayer: '0', 
        ReleaseDate: '2019-01-01', 
        Developer: 'FromSoftware', 
        Publisher: 'bandai namco'
    }

    console.log("hello", testData)

     
        const result = await fetch(GamesAPI + "newgame", {
            method: 'POST',
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(testData)
        })

        console.log(result)
}


function NewGameForumComponent() {
    return <button type="button" onClick={PostHandler}>POST</button>;
};
export default NewGameForumComponent;