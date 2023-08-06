let addproductcar = $(".btn");
const divProductos= $("#container-productos");
let product ;

let carProduct = $(".card");
let productoRow = $(".modal-content");
let listaProducto= $("#container-items");


let allProducts = [];

let valorTotal = $("#precioTotal");
let countProductos  = $(".contador-productos");


listaProducto.click( e =>{

    if(e.target.classList.contains(`btn`)){
        product = $(e.target).parent();
       
        let infoProduc ={
            quantity:1,
            title: product.find(".card-title").text(),
            price: product.find(".price").text(),
        }
        
        allProducts.push(infoProduc)

        showHTML();
      
    };
   

})



let showHTML = () =>{


    productoRow.innerHTML="";
    let total = 0;
    let totalproducts = 0;

    $(".modal-content").empty()

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
        $(".modal-content")
        .append(containerproduct)

        total = total + parseInt(product.price);
        totalproducts = totalproducts + product.quantity;

    });
    
    valorTotal.innerText = `${total}`;
    countProductos.innerText = totalproducts;
	
	divProductos.modal('show')()
}