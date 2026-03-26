function GenericGameComponent(Title: string, Genre: string, AgeRestriction: number, SinglePlayer: number, MultiPlayer: number, ReleaseDate: string, Developer: string, Publisher: string) {

    return <div className='border-3 rounded-sm border-white'>
        <p>Title: {Title}</p>
        <p>Genre: {Genre}</p>
        <p>AgeRestriction: {AgeRestriction}</p>
        <p>SinglePlayer: {SinglePlayer}</p>
        <p>MultiPlayer: {MultiPlayer}</p>
        <p>ReleaseDate: {ReleaseDate}</p>
        <p>Developer: {Developer}</p>
        <p>Publisher: {Publisher}</p>
    </div>
}

export default GenericGameComponent;