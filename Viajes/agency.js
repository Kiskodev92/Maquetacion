let arrclient=[]

function getName(){
   //Ponemos todos las variables junto a los id, y tanto nombre como destiny tienen .tolowercase para que a la hora de buscarlo no importe que sea mayuscula o minuscula.
   let nombre = document.getElementById("name").value.toLowerCase();
   let origen = document.getElementById("origin").value;
   let destiny = document.getElementById("destiny").value.toLowerCase();
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
   //En el filtrado ponemos el parametro mas el valor que queremos buscar y en este caso queremos que sea uno de los siguientes string.
   let clean = arrclient.filter(dato => dato.destino == "canarias" || dato.destino == "mallorca" || dato.destino == "galicia")
   //Para mostrar en un string, creamos una variable con valor string vacio.
   let stringclean = "";
   console.log(clean);
   for (let data of clean){
   //Estamos aplicandole += para que la variable stringclean su valor sea el siguiente, dandole un parrafo creado en un div en el html con id="print" y junto a ${} recoge el valor del dato que buscamos que en este caso es name y destino.
      stringclean += `<p>Cliente: ${data.name}</p>
      <p>Destino ${data.destino}</p> `;
      console.log(data.name);
   }  console.log(stringclean);
   //Aqui lo que estamos haciendo es darle a la variable document el valor de string clean y junto al html a la hora de ejecutarlo pulsando el boton filtrar nos mostrará lo que generamos en el for of con el string clean, que ahora viene dado como valor del document.
   document.getElementById("print").innerHTML = stringclean;
}