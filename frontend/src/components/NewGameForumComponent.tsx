const GamesAPI = "http://localhost:3000/"

async function PostHandler() {
    
    const testData = {
        Title: "Blablabla",
        Genre: "bLablabla",
        AgeRestriction: "13",
        SinglePlayer: "1",
        MultiPlayer: "0",
        ReleaseDate: "2022-12-14",
        Developer: "blAblabla",
        Publisher: "blaBlabla"
    }

    // posts test data
    const result = await fetch(GamesAPI + "newgame", {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(testData)
    })
    
    console.log(result)
}

function NewGameForumComponent() {
    return <button onClick={PostHandler}>Post new game</button> // runs PostHandler() when clicked
};

export default NewGameForumComponent;