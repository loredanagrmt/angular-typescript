interface AudioPlayer{
    audioVloume:number; 
    songDuration:number; 
    song:string; 
    details: Details; 
}

interface Details{
    author:string; 
    year:number
}

const audioPlayer:AudioPlayer= {
    audioVloume: 90,
    songDuration: 36,
    song: "2 hands ",
    details: {
        author: 'Tate McRae',
        year:2025,
    }
}
const song='New song'; 

const{
    song:anotherSong,
    songDuration:duration,
    details,
}= audioPlayer; 

const {author}=details;
const {year}=details;  


//console.log('Song', anotherSong)
//console.log('Duration', duration)
//console.log('Author', author)
//console.log('Year', year)

const [, , trunk= 'Not found']: string[]=['Goku', 'Vegeta', 'Trunk']; 

console.error('Personaje 3: ', trunk); 

export{}; 