//constructor de objeto con clase
class Objeto{
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        
        
    }
}

//arrays de productos
const productos = [
    {
        Nombre: "sillon",
        Precio: 80000,
        Color: "rojo"
    }, 

    {
        Nombre: "cama",
        Precio: 50000,
        Color: "blanco"
    },

    {
        Nombre: "silla de madera",
        Precio: 20000,
        Color: "marron"
    },

    {
        Nombre: "silla de plastico",
        Precio: 15000,
        Color: "blanco"
    }
];

//productos ingresados
let ingresados = "";


//funcion para agregar array a la variable ingresados
productos.forEach((producto) => {
    
    ingresados += "Producto: " + producto.Nombre + " - " + "Precio: " + producto.Precio + " - " + "Color: " + producto.Color + "\n"
                  
})


//funcion para saber si el usuario puede comprar el producto
function comprar(presupuesto, precio){
    if (presupuesto >= precio){
        return alert("Producto comprado exitosamente");
    } else {
        return alert("Su presupuesto no alcanza para comprar el producto");
    }
}

//variable vacia para que el usuario ingrese un valor
let objeto = "";

//bucle con la condicion esc para que pare
while (objeto != "esc"){
    //usuario ingresa valor a la variable objeto
    objeto = prompt(`1- Ver lista de productos \n 2- Vender objeto \n 3- Comprar producto \n 4- Buscar Producto \n 5- Filtrar productos por su precio`);
    switch (objeto){
        
        case "1": 
            //muestra lista de productos
            alert(ingresados);
            
            break;
            
        case "2":
            //usuario crea un objeto 
            const objeto = new Objeto (prompt("Nombre"), Number(prompt("Precio")), prompt("color"));
            //el objeto creado por el usuario se agrega en el array productos
            productos.push(objeto);
            //el objeto creado por el usuario se agrega a la variable ingresados
            ingresados += "Producto: " + objeto.nombre + " - " + "Precio: " + objeto.precio + " - " + "Color: " + objeto.color + "\n";
            //muestra la lista de productos con el objeto que ingresa el usuario
            alert(ingresados);
            
            break;

        case "3":
            //usuario ingresa la cantidad de dinero que tiene para gastar
            let dinero = Number(prompt("ingrese su presupuesto"));
            //usuario elige producto 
            let compra = prompt(ingresados + "\n" + "ingrese nombre de producto que quiera comprar" );
            
            if (compra == "sillon"){
                //aca tuve que poner el precio del producto porque si escribia objeto.precio no lo encontraba y no supe hacerlo de otra manera
                comprar(dinero, 80000);
                
            }

            if (compra == "cama"){
                
                comprar(dinero, 50000);
                
            }

            if (compra == "ropero"){
                
                comprar(dinero, 20000);
                
            } 

            if (compra == "silla de madera"){

                comprar(dinero, 20000)
            }

            if (compra == "silla de plastico"){

                comprar(dinero, 15000)
            
            } 
            
            if ((compra != "sillon") && (compra != "cama") && (compra != "ropero") && (compra != "silla de madera") && (compra != "silla de plastico") ) {
                // este else lo hice por que el objeto.precio no encontraba los precios 
                alert("No hay stock de ese producto");
            
            }
            
            break;

        case "4":
            //usuario escribe un producto de algun producto
            let productoElegido = prompt("ingrese producto que quiere comprar");
            //se guarda el objeto en una variable 
            let compraFinal =  productos.find((producto) => producto.Nombre === productoElegido)
            
            if (compraFinal) {
                alert("Producto encontrado:\nNombre: " + compraFinal.Nombre + "\nPrecio: " + compraFinal.Precio + "\nColor: " + compraFinal.Color);
              } else {
                alert("Producto no encontrado");
              }
        
            break;

        case "5":
            let precioMaximo = parseFloat(prompt("Ingrese el precio máximo"));
            let productosFiltrados = productos.filter((producto) => producto.Precio <= precioMaximo);

            if (productosFiltrados.length > 0) {
                let mensaje = "Productos encontrados:\n";
                productosFiltrados.forEach((producto) => {
                    mensaje += "Nombre: " + producto.Nombre + ", Precio: " + producto.Precio + "\n";
                    });
                    alert(mensaje);
                    } else {
                        alert("No se encontraron productos que cumplan con el filtro.");
                    }
            
            break;

            
            
            default:
                
                break;
    }
    
    
    
}



