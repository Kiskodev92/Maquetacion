let arrclient=[]

function getName(){
   let nombre = document.getElementById("name").value;
   let origen = document.getElementById("origin").value;
   let destiny = document.getElementById("destiny").value;
   let people = document.getElementById("n_people").value;
   let start = document.getElementById("start").value;
   let end = document.getElementById("end").value;

   let client ={
               name: nombre,
               origin: origen,
               destino: destiny,
               num: people,
               start: start,
               end: end,
            }

   console.log(client);
   arrclient.push(client);
   console.log(arrclient);
}
function filtrar(){
   let clean = arrclient.filter(dato => dato.destiny == "canarias".toLocaleLowerCase)
   console.log(clean);
}