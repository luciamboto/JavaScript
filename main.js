const shopContent = document.getElementById("shopContent");
const vercarrito= document.getElementById("vercarrito")
const modalcontainer = document.getElementById("modal-container")
const cantidadcarrito = document.getElementById("cantidadcarrito");

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch("./products.json");
    const data = await response.json();
    data.forEach((product)=> {
        let content = document.createElement("div");
        content.className ="card";
        content.innerHTML = `
        <img src="${product.img}"> 
        <h3>${product.nombre}</h3>
        <p class="precio">${product.precio} $</p>
        
        `;
        shopContent.append(content);
        
        let comprar= document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className="comprar";
        
        content.append(comprar);
        
        
        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatproduct) => repeatproduct.id ===product.id);
            if (repeat) { 
            carrito.map((prod) => {
            if (prod.id === product.id) {
            prod.cantidad++;
            }
            });
           
        }
        else {
            carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad, 
            });
        }
        Swal.fire({
            title: "Producto agregado",
            icon: "success"
          });
            console.log(carrito);
            savelocal();
            });
        });
        
};

getProducts();

const savelocal= () => {

    localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    
//////////////////////////////// CARRITO 
const pintarcarrito = () => {
    modalcontainer.innerHTML = "";
modalcontainer.style.display = "flex";
    const modalheader = document.createElement("div");
modalheader.className= "modal-header"
modalheader.innerHTML = `
<h1 class="modal-header-title">Mi carrito</h1>
`;
modalcontainer.append(modalheader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "cerrar";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener("click", ()  => {
    modalcontainer.style.display = "none";
    }); 
 
modalheader.append(modalbutton);


carrito.forEach((product) => {
    let carritocontent = document.createElement("div");
    carritocontent.className = "modal-content";
    carritocontent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    <p>cantidad: ${product.cantidad}</p>
    <p>total: ${product.cantidad * product.precio} </p>

    `;
    modalcontainer.append(carritocontent);
    

    let eliminar = document.createElement("span"); 
    eliminar.innerText = "❌";
    eliminar.className= "delete-product";
    carritocontent.append(eliminar);

    eliminar.addEventListener ("click", eliminarproducto); 
    });
    
    

    const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0);

const totalbuying = document.createElement("div");
totalbuying.className = "total-content";
totalbuying.innerHTML = `Total a pagar: ${total} $`;
modalcontainer.append(totalbuying);

let pagar= document.createElement("button");
pagar.innerText = "Pagar";
pagar.className="pagar";

modalcontainer.append(pagar);


pagar.addEventListener("click", () => {

  

    const { value: numero } =  Swal.fire({
    title: "Dejanos tu telefono",
    input: "number",
    inputLabel: "Nos pondremos en contacto para finalizar el pago",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "Necesitas completar este campo";
      }
    }
  });
  
      

    });

};


vercarrito.addEventListener ("click", pintarcarrito);

const eliminarproducto = () => {
    const foundId = carrito.find ((element) => element.id);
   carrito = carrito.filter ((carritoId) => {
   return carritoId !== foundId;
   });
  
   pintarcarrito();
   };


    


    ////////////////////////////////////////////////////////////////////////
    