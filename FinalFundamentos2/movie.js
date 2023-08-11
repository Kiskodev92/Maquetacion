class Movie{
    photos;
    title;
    releaseYear;
    nacionality;
    genre;
    actors;

    
    constructor (photos,title, releaseYear, nationality, genre, actors){
        this.photos = photos;
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nationality;
        this.genre = genre;
        this.actors = actors;
    }
}

let arrmovie = [
            {
            photos : 'https://www.ecartelera.com/carteles/10800/10861/002_m.jpg',
            title : "DeadPool 2",
            releaseYear : 2016,
            nacionality : " EE.UU ",
            genre : " Accion ",
            actors : ["Ryan Reynods - Josh Broolyn - Terry Crew"]
            },
            {
            photos : 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
            title : "Infinity war",
            releaseYear : 2018,
            nacionality : " EE.UU ",
            genre : " Accion ",
            actors : ["Christ Prat - Robert Downey Jr. - Marc Ruffalo"]
            },
            {
            photos : 'https://www.ecartelera.com/carteles/15800/15882/004.jpg',
            title : "Spiderman No way home",
            releaseYear : 2021,
            nacionality : " EE.UU ",
            genre : " Accion ",
            actors : ["Tom Holand - Andrew Garfield - Tobbie Mcguire"]
            },
            {
            photos : 'https://www.ecartelera.com/carteles/3500/3507/006.jpg',
            title : "Mi vecino Totoro",
            releaseYear : 1988,
            nacionality : " Japón ",
            genre : " Anime ",
            actors : ["Akita Tanaka - Tamami Bond - Ken Sugimori"]
            }
        ]

    function showmovies(){
        let container = document.getElementById('contenedor');
            container.innerHTML ='';
        for (let i = 0; i < arrmovie.length; i++) {
            
            container.innerHTML += 
            `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${arrmovie[i].photos}" alt="Card image cap">
            <div class="card-body" col>
                <h5 class="card-title">${arrmovie[i].title}</h5>
                <p class="card-text">Estreno: ${arrmovie[i].releaseYear}</p>
                <p class="card-text">Pais: ${arrmovie[i].nacionality}</p>
                <p class="card-text">Genero: ${arrmovie[i].genre}</p>
                <p class="card-text">Reparto: ${arrmovie[i].actors}</p>
            </div>
            </div>
            `
        }
    }
    showmovies();

    let newPeli = document.getElementById('newPeli');


newPeli.addEventListener('click', event => {

    let form = event.target.parentElement;

    let newmovie = new Movie(
        form.querySelector('#url').value,
        form.querySelector('#title').value,
        form.querySelector('#year').value,
        form.querySelector('#nationality').value,
        form.querySelector('#category').value,
        form.querySelector('#actors').value
    );
    arrmovie.push(newmovie);
    showmovies();
});