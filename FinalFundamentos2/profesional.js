class Profesional{
    name;
    age;
    height;
    oscarsNumber;
    profession;
    photos;
    constructor(photos,name, age,height, oscarsNumber, profession){
        this.photos = photos;
        this.name = name;
        this.age = age;
        this.height = height;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photos = photos;
    }
}
arrprof=[
    {
        photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cillian_Murphy-2014.jpg/1200px-Cillian_Murphy-2014.jpg',
        name : "Cillian Murphy",
        age : 47,
        height : 175,
        nationality : "Irlandes",
        oscarsNumber : 0,
        profession : "Actor",
    },
    {
        photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/James_Gunn_by_Gage_Skidmore_2.jpg/375px-James_Gunn_by_Gage_Skidmore_2.jpg',
        name : "James Gunn",
        age : 57,
        height : 182,
        nationality : "USA",
        oscarsNumber : 0,
        profession : "Director",
    },
    {
        photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Alfonso_Cuar%C3%B3n%2C_President_jury_Venezia_72_%2825805089406%29_%28cropped%29.jpg/330px-Alfonso_Cuar%C3%B3n%2C_President_jury_Venezia_72_%2825805089406%29_%28cropped%29.jpg',
        name : "Alfonso Cuarón",
        age : 61,
        height : 183,
        nationality : "Mexicano",
        oscarsNumber : 4,
        profession : "Director",
    },
    {
        photos: 'https://es.web.img3.acsta.net/c_310_420/pictures/15/05/15/16/30/134942.jpg',
        name : "Enma Stone",
        age : 34,
        height : 160,
        nationality : "USA",
        oscarsNumber : 2,
        profession : "Actriz",
    },
]

function showprof(){
    let container = document.getElementById('contenedor');
    for (let i = 0; i < arrprof.length; i++) {
        
        container.innerHTML +=
        `
        <div class="card" style="width: 18rem;"></div>
        <img class="card-img-top" src="${arrprof[i].photos}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arrprof[i].name}</h5>
            <p class="card-text">Edad: ${arrprof[i].age}</p>
            <p class="card-text">Nacionalidad: ${arrprof[i].nationality}</p>
            <p class="card-text">Altura: ${arrprof[i].height}</p>
            <p class="card-text">Oscars ganados: ${arrprof[i].oscarsNumber}</p>
            <p class="card-text">Profesion: ${arrprof[i].profession}</p>
        </div>
        `
    }
}
showprof();