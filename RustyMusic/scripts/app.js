// elements
const btnAfterSong = document.querySelector(".btn-after-song");
const btnPlay = document.querySelector(".btnPlaySong");
const btnStopSong = document.querySelector(".btnStopSong");
const btnNextSong = document.querySelector(".btnNextSong");
const audio = document.querySelector("#audio");
const titleSong = document.querySelector("#title-song");
// songs
song = [
    {
        id: 1,
        nameSong: 'Kitty',
        urlSong: './views/assets/audio/dad.mp3'
    },
    {
        id: 2,
        nameSong: 'RustySong',
        urlSong: './views/assets/audio/mom.mp3'
    },
    {
        id: 3,
        nameSong: 'GonzaSong',
        urlSong: './views/assets/audio/dad.mp3'
    }
]

// cargar canciones
function loadSong(){

    btnPlay.addEventListener("click", ()=>{
            // validar canción
        if(audio.getAttribute("src") === song[0].urlSong){
            console.log("misma canción boludo")
        }else{
            console.log("diferente canción")
            // appply song
            audio.setAttribute("src", song[0].urlSong);

            // change name song
            titleSong.innerText = song[0].nameSong;
        }
    })

    // PAUSE SONG
    btnStopSong.addEventListener("click" ,()=>{
        // quit song    
        audio.setAttribute("src", "#");
        // clear name song
        titleSong.innerText = '';
    })

    // next song
    btnNextSong.addEventListener("click", ()=>{
        if(audio.getAttribute("src") === audio.getAttribute("src")){
            console.log("ya es la misma canción tio")

            // apply name to song
            titleSong.innerText = song[2].nameSong;

            // change src
            audio.setAttribute("src", song[1].urlSong);
        }
        
        else if(audio.getAttribute("src") === song[1].urlSong){
            console.log("ya es la misma canción tio")
        }
        
        else if(audio.getAttribute("src") === song[2].urlSong){
            console.log("ya es la misma canción tio")
        }
        else{
            // message
            alert("no hay canción")

            // clear name song
            titleSong.innerText = '';
        }
    })

    // after song
    btnAfterSong.addEventListener("click", ()=>{
        if(audio.getAttribute("src") === audio.getAttribute("src")){
            // song
            audio.setAttribute("src", song[0].urlSong)
            
            // name
            titleSong.innerText = song[0].nameSong;
        }
    })
}

// play!
loadSong();