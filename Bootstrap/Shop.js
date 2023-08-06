let addproductcar = document.querySelector(".btn")
const divProductos= document.getElementById("container-productos")


let cardinfo = document.querySelector('.card');
let rowProduc = document.querySelector('.modal-content');
let productList = document.getElementById('container-items');


let allProducts = [];

let valortotal = document.getElementById('precioTotal');
let countproduct = document.querySelector('.contador-productos')


productList.addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        const product = e.target.parentElement 
        // console.log(product.querySelector('.price').textContent);    
        let infoProduc={
            quantity : 1,
            title : product.querySelector('h5').textContent,
            price : product.querySelector('.price').textContent,
        };
        allProducts.push(infoProduc);
        console.log(allProducts);
        showHTML();
    };
})


//Funcion para mostrar html
let showHTML = () =>{

    //Limpiar html
    rowProduc.innerHTML='';
    let total = 0;
    let totalproducts = 0;

    allProducts.forEach(product =>{
        let containerproduct = document.createElement(`div`)
        containerproduct.classList.add("card-body")
        containerproduct.innerHTML =
        `<div class="modal-fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">CARRITO</h1>
             <div class="contador">
                <span class="contador-productos"></span>
            </div>
            </div>
            <div  class="modal-body">
                <p id="vistaProducto; ">${product.quantity}</p>
                <p id="vistaProducto">${product.title}</p>
                <p id="vistaProducto">${product.price} </p>
                <span id="precioTotal">total:${parseInt(total) + parseInt(product.price) }</span>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    `
        rowProduc.append(containerproduct);

        total = total + parseInt(product.price);
        totalproducts = totalproducts + product.quantity;

    });
    
    valortotal.innerText = `${total}`;
    countproduct.innerText = totalproducts;
}