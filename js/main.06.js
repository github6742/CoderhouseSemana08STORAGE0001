// corregi las funciones de validaciones, por validarDatoString y validarDatoNumber, ordene las funciones(primero las defino y luego las llamo), elimine los resultados por alert y los deje por consola.
const listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 332000
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 333000
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 427000
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        categoria: "COCINA",
        precio: 590000
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        categoria: "COCINA",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        categoria: "COCINA",
        precio: 511000
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        categoria: "COCINA",
        precio: 512000
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        categoria: "HELADERA",
        precio: 1300000
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        categoria: "HELADERA",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        categoria: "HELADERA",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        categoria: "HELADERA",
        precio: 1600000
      }
];

const carritoCompras = [];
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};

const esNulo = (valor) => (valor == "");
const esString = (valor) => (isNaN(Number(valor)));
const validaSiNo = (valor) => ((valor.toUpperCase() == "SI" || valor.toUpperCase() == "NO"));
const booleanoSiNo = (valor) => ((valor.toUpperCase() == "SI" ));
const mensajeErrorNulo = "Debe ingresar un valor";
const mensajeErrorNoNumerico = "Debe ingresar un valor numerico";

function validarDatoNulo(dato){
    if (esNulo(dato)) {
       alert(mensajeErrorNulo);                    
       return false;
    }; 
    return true;
};

function ingresarValorString(mensajePrompt){
    let valor;
    do {
        valor = prompt(mensajePrompt);
    } while (!validarDatoNulo(valor));
    return valor;
};

function validarDatoNumber(dato){
    if (!validarDatoNulo(dato)) {
       return false;
    };
    if (esString(dato)) {
       alert(mensajeErrorNoNumerico);
       return false;
    } else if (parseInt(dato) == 0){ 
       alert("El valor debe ser mayor a 0");
       return false;       
    } else {
       return true;
    };
};

function ingresarValorNumber(mensajePrompt){
    let valor;
    do {
        valor = prompt(mensajePrompt);
    } while (!validarDatoNumber(valor));
    return parseInt(valor);
};

function ingresarCategoria(){    
    console.log("LOG - ingresarCategoria - 0000");
    let categoria;  
    do {
        categoria = ingresarValorNumber("Ingrese categoria de articulo: "+
                                        "\n - 1 - TELEVISORES" +
                                        "\n - 2 - COCINAS" +
                                        "\n - 3 - HELADERAS" );
        console.log("LOG - ingresarCategoria - 0010 - categoria: " +  categoria);
        switch(categoria){
              case 0:
                alert("Debe ingresar un valor mayor a 0, vuelva a ingresar la opcion");
                break;
              case 1:
                return "TELEVISOR";
              case 2:
                return "COCINA";
              case 3:
                return "HELADERA";
              default:
                alert("Ingrese una opcion valida");
        };
        console.log("LOG - ingresarCategoria - 9999 - categoria: " + categoria);
    } while (true);
};

function cargarArticulo(){
    console.log("LOG - cargarArticulos - 0000");
    let id = listaPrecioArticulos.length+1;
    let codigo;
    let nombre;
    let marca;
    let categoria;
    let precio;

    codigo = ingresarValorString("Ingrese codigo de articulo: ");
    nombre = ingresarValorString("Ingrese nombre de articulo: ");
    marca = ingresarValorString("Ingrese marca de articulo: ");
    categoria = ingresarCategoria();
    precio = ingresarValorNumber("Ingrese precio de articulo: ");

    const articuloNuevo = new Articulo(id, 
                                       codigo.toUpperCase(), 
                                       nombre.toUpperCase(), 
                                       marca.toUpperCase(), 
                                       categoria.toUpperCase(), 
                                       parseFloat(precio));
    console.log("LOG - cargarArticulos - 9999");
    return articuloNuevo;
};

function informarListaPrecioArticulos(lista){
    console.log("LOG - informarListaPrecioArticulos - 0000");
    
    lista.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +   
                " - Categoria: " + articulo.categoria  +    
                " - Precio: " + articulo.precio);
    });
    console.log("LOG - informarListaPrecioArticulos - 9999");     
};

function informarListaPrecioArticulosConDescuento(){    
    console.log("LOG - informarListaPrecioArticulosConDescuento - 0000");
    let porcentaje;
    porcentaje = ingresarValorNumber("Ingrese porcentaje de descuento: ");    
    const articulosDescuento = listaPrecioArticulos.map(articulo => {
        let precioDescuento = articulo.precio - (articulo.precio * (porcentaje/100));
        return {
            id: articulo.id,
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            marca: articulo.marca,
            categoria: articulo.categoria,
            precio: precioDescuento
        };
    });
    informarListaPrecioArticulos(articulosDescuento);
    console.log("LOG - informarListaPrecioArticulosConDescuento - 9999");
};

function buscarArticuloPorId(){    
    console.log("LOG - buscarArticuloPorId - 0000");
    let id;
    id = ingresarValorNumber("Ingrese id del articulo: ");    
    if (listaPrecioArticulos.some(articulo => articulo.id == id)){
       let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == id);
      console.log(" - Id: " + articuloEncontrado.id + 
                " - Codigo: " + articuloEncontrado.codigo + 
                " - Nombre: " + articuloEncontrado.nombre + 
                " - Marca: " + articuloEncontrado.marca  +   
                " - Categoria: " + articuloEncontrado.categoria  +     
                " - Precio: " + articuloEncontrado.precio);
    } else {
        alert("Id invalido");
    };
    console.log("LOG - buscarArticuloPorId - 9999");
};

function buscarArticuloPorCategoria(){    
    console.log("LOG - buscarArticuloPorCategoria - 0000");
    let categoria;
    categoria = ingresarCategoria();    
    let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase() == categoria.toUpperCase() );    
    informarListaPrecioArticulos(articulosEncontrados);
    console.log("LOG - buscarArticuloPorCategoria - 9999");
};

function buscarArticuloPorNombre(){    
    console.log("LOG - buscarArticuloPorNombre - 0000");
    let nombre;
    nombre = ingresarValorString("Ingrese el nombre o parte del nombre, (por ejemplo smart, inverter): ");
    console.log("LOG - buscarArticuloPorNombre - 0010 - nombre: " + nombre);   
    let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.nombre.toUpperCase().includes(nombre.toUpperCase()) );
    if (articulosEncontrados.length == 0) {
      console.log("No existen articulos que contengan ese valor: " + nombre);
    } else {
      informarListaPrecioArticulos(articulosEncontrados);
    }
    console.log("LOG - buscarArticuloPorNombre - 9999");
};

function verificarExisteArticulo(){    
    console.log("LOG - verificarExisteArticulo - 0000");
    let codigo;
    codigo = ingresarValorString("Ingrese el codigo de articulo: ");
    console.log("LOG - verificarExisteArticulo - 0010 - codigo: " + codigo);   
    let existeCodigo = listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase() );
    if (!existeCodigo){
       console.log("El articulo no existe");
    } else {
       console.log("El articulo si existe " );
    };
    console.log("LOG - verificarExisteArticulo - 9999");
};

function validarArticuloIngresado(id, categoria){
     console.log("LOG - validarArticuloIngresado - 0000 - id: " + id);     
     let articuloEncontrado;
     if (listaPrecioArticulos.some(articulo => articulo.id == id )){
        articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == id);
        if (articuloEncontrado.id == id && articuloEncontrado.categoria == categoria){
            return true;
        } else {
            alert("Id invalido");
            return false;
        };
     } ;
};

function seleccionarContinua(){
    let valor;
    do {
        valor = ingresarValorString("Continua comprando(SI/NO): ");        
    } while (!validaSiNo(valor));
    return booleanoSiNo(valor);
};

function comprar(){
    console.log("LOG - comprar - 0000");
    let articuloIngresado;
    let categoria;
    let continua;
    do {
            categoria = ingresarCategoria();
            console.log("LOG - Comprar - 0010 - categoria: " +  categoria);   
            let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria == categoria);
            let listaArticulos = "Ingrese el id de articulo valido:\n";
            articulosEncontrados.forEach(articulo => {
            listaArticulos += " - Id: " + articulo.id + 
                        " - Nombre: " + articulo.nombre + 
                        " - Precio: " + articulo.precio + "\n";
            });

            do {
                articuloIngresado = ingresarValorNumber(listaArticulos);
            } while (!validarArticuloIngresado(articuloIngresado, categoria));

            let articuloDeLista = listaPrecioArticulos.find(articulo => articulo.id == articuloIngresado );

            console.log("LOG - Comprar - 0020 - id: " +  articuloDeLista.id +
                                             ", nombre: " + articuloDeLista.nombre +
                                             ", precio: " + articuloDeLista.precio
            );

            let cantidad;
            cantidad = ingresarValorNumber("Ingrese la cantidad: ");
            console.log("LOG - Comprar - 0030 - cantidad: " +  cantidad);
            carritoCompras.push([articuloDeLista, cantidad]);
            console.log("LOG - Comprar - 0035 - cantidad de registros: " + carritoCompras.length);
            //cargarCompra(articuloDeLista.codigo, articuloDeLista.nombre, parseInt(articuloDeLista.precio), parseInt(cantidad));
            console.log("LOG - Comprar - 0040 - cargarCompra()");
            continua = seleccionarContinua();
    } while (continua);

     const total = carritoCompras.reduce((sumador,[articulo,valorCantidad])  => sumador + (parseInt(articulo.precio)*parseInt(valorCantidad)),0);

    console.log("LOG - comprar - 9910 - El total de compras del carrito es: " + total);
    carritoCompras.splice(0,carritoCompras.length);
    console.log("LOG - comprar - 9990 - Se borro el contenido del carrito de compras, cantidad de registros: " + carritoCompras.length);
    console.log("LOG - comprar - 9999");
};

function seleccionarOpcionMenu(){
  console.log("LOG - SeleccionarOpcionMenu - 0000");
  let opcionMenu = prompt("MODULO DE ARTICULOS, PRECIOS, COMPRAS\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Crea Articulos\n" +
                          " 2-Lista de Articulos\n" +
                          " 3-Lista de Articulos con Descuento\n" +
                          " 4-Buscar Articulo por Id\n" +
                          " 5-Buscar Articulo por Categoria\n" +
                          " 6-Buscar Articulo por Nombre\n" +
                          " 7-Verificar Existencia Articulo\n" +
                          " 8-Comprar\n" +
                          " 9-Salida"
                         );
  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);  
  if (esNulo(opcionMenu)){
     opcionMenu = 0;
  };
  console.log("LOG - seleccionarOpcionMenu - 9999");
  return parseInt(opcionMenu);     
};

// funcion principal
function functionPrincipalSimulador(){
  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 
  let salir = false;
  do {
      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 listaPrecioArticulos.push(cargarArticulo());
                 break;
            case 2:
                 informarListaPrecioArticulos(listaPrecioArticulos);
                 break;   
            case 3:
                 informarListaPrecioArticulosConDescuento();
                 break;     
            case 4:
                 buscarArticuloPorId();
                 break;      
            case 5:
                 buscarArticuloPorCategoria();
                 break;        
            case 6:
                 buscarArticuloPorNombre();
                 break;          
            case 7:
                 verificarExisteArticulo();
                 break;           
            case 8:
                 comprar();
                 break;   
            case 9:
                 salir = true;
                 break;
            default:
                 alert("Opcion invalida, vuelva a ingresar la opcion");
      };
  } while (!salir);
  console.log("LOG - ----------------------------------");
  console.log("LOG - 9999 - PROCESO PRINCIPAL - FIN ");
  console.log("LOG - ----------------------------------");
};

// ejecuta la funcion principal
functionPrincipalSimulador();