const menus = [
            "Crear Articulos" ,
            "Listar Articulos" ,
            "Buscar Articulo" ,
            "Verificar Existencia Articulo" ,
            "Comprar"
];

const listaMenu = [
    {
        titulo: "Crear Articulo",
        clase: "crearArticulo",
        id: "idCrearArticulo"
    },
    {
        titulo: "Listar Articulos",
        clase: "listarArticulos",
        id: "idListarArticulos"
    },
    {
        titulo: "Buscar Articulos",
        clase: "buscarArticulos",
        id: "idBuscarArticulos"
    },
    {
        titulo: "Verificar Existencia Articulo",
        clase: "verificarExistenciaArticulo",
        id: "idVerificarExistenciaArticulo"
    },
    {
        titulo: "Comprar",
        clase: "comprar",
        id: "idComprar"
    }
];

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

//const listaPreciosArticulosStorage = (JSON.parse(localStorage.getItem("listaPrecioArticulos")) == null) && ([]);
const listaPreciosArticulosStorage = (JSON.parse(localStorage.getItem("listaPrecioArticulos")) == null) ? ([]) : JSON.parse(localStorage.getItem("listaPrecioArticulos"));
//console.log(listaPreciosArticulosStorage);
if (listaPreciosArticulosStorage.length > 0) {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPreciosArticulosStorage]));
} else {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPrecioArticulos]));
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const carritoComprasStorage = (JSON.parse(localStorage.getItem("carritoCompras")) == null) ? ([]) : JSON.parse(localStorage.getItem("carritoCompras"));
//console.log(carritoComprasStorage);
if (carritoComprasStorage.length > 0) {
   localStorage.setItem("carritoCompras", JSON.stringify([...carritoComprasStorage]));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};
const esNulo = (valor) => (valor == "");
const esNaN = (valor) => (isNaN(Number(valor)));
const esString = (valor) => (isNaN(Number(valor)));

crearHeaderMenu(); 

const formularioCrearArticulo = document.getElementById("idCrearArticulo");
formularioCrearArticulo.addEventListener("click", crearFormularioCrearArticulo);

const formularioListarArticulos = document.getElementById("idListarArticulos");
formularioListarArticulos.addEventListener("click", crearFormularioListarArticulos);

const formularioBuscarArticulos = document.getElementById("idBuscarArticulos");
formularioBuscarArticulos.addEventListener("click",crearFormularioBuscarArticulos);

const formularioVerificarExistenciaArticulo = document.getElementById("idVerificarExistenciaArticulo");
formularioVerificarExistenciaArticulo.addEventListener("click", crearFormularioVerificarExistenciaArticulo);

const formularioComprarArticulos = document.getElementById("idComprar");
formularioComprarArticulos.addEventListener("click", crearFormularioComprarArticulos);
window.addEventListener.name

const navegacion = performance.getEntriesByType("navigation")[0];
console.log("MAIN GLOBAL-navegacion.TYPE: " + navegacion.type)

switch (localStorage.getItem("formularioActivo")) {
  case "FormularioCrearArticulo":
       console.log("MAIN-crearFormularioCrearArticulo")
       crearFormularioCrearArticulo();  
       console.log("MAIN-inputFormularioCrearArticulo")
       inputFormularioCrearArticulo();  
       break;
  case "FormularioListarArticulos":
       console.log("MAIN-crearFormularioListarArticulos");
       crearFormularioListarArticulos(); 
       console.log("MAIN-inputFormularioListarArticulos");
       inputFormularioListarArticulos();     
       if (localStorage.getItem("bloqueActivoCrearListadoConDescuento") == "SI"){
        crearListadoConDescuento();
       };
       break;
  case "FormularioBuscarArticulos":
       console.log("MAIN-crearFormularioBuscarArticulos");
       crearFormularioBuscarArticulos(); 
       console.log("MAIN-inputFormularioBuscarArticulos");
       inputFormularioBuscarArticulos();           
       if (localStorage.getItem("bloqueActivoCrearListadoArticulosEncontrados") == "SI"){
        crearListadoArticulosEncontrados();
       };
       break;
  case "FormularioVerificarExistenciaArticulo":
       console.log("MAIN-crearFormularioVerificarExistenciaArticulo");
       crearFormularioVerificarExistenciaArticulo(); 
       console.log("MAIN-inputFormularioVerificarExistenciaArticulo");
       inputFormularioVerificarExistenciaArticulo();            
       if (localStorage.getItem("bloqueActivoCrearListadoExistenciaArticulo") == "SI"){
        crearListadoExistenciaArticulo();
       };
       break;
  case "FormularioComprarArticulos":
       console.log("MAIN-crearFormularioComprarArticulos");
       crearFormularioComprarArticulos();  
       console.log("MAIN-inputFormularioComprarArticulos");
       inputFormularioComprarArticulos();         
       if (localStorage.getItem("bloqueActivoCrearFormularioComprar") == "SI") {
          crearFormularioComprar();
          if (localStorage.getItem("bloqueActivoVerCarrito")=="SI"){
            verCarrito();
          }
       }
       break;
  default:
    break;
};
// Listener para guardar borradores en tiempo real dentro del formulario
document.addEventListener("input", (e) => {
    if (e.target && e.target.classList.contains("inputGlobal")) {
        localStorage.setItem(`input_${e.target.id}`, e.target.value);
    }
});

function obtenerCamposLocalStorage(lista){
   lista.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });
};

function borrarCamposLocalStorage(pantalla) {

const navegacion = performance.getEntriesByType("navigation")[0];
console.log("borrarCamposLocalStorage-navegacion.type: "+navegacion.type)
//console.log(navegacion)
    // Si NO es una recarga (F5), significa que el usuario de verdad está abandonando la pantalla
    //if (navegacion && navegacion.type !== "reload") {
//console.log("borrarCamposLocalStorage function " + navegacion.type)

  let prefijo = "";
  switch(pantalla){
   case "FormularioCrearArticulo":
     prefijo = "input_idCrearArticulo";
     break;
   case "FormularioListarArticulos":
     prefijo = "input_idListarArticulo";
     break;
   case "FormularioBuscarArticulos":
     prefijo = "input_idBuscarArticulo";
     break;
   case "FormularioVerificarExistenciaArticulo":
     prefijo = "input_idVerificarExistenciaArticulo";
     break;
   case "FormularioComprarArticulos":
     prefijo = "input_idComprarArticulos";
     break;
   default:
     break
  };
//}
   Object.keys(localStorage).forEach(key => {
        if (key.startsWith(prefijo)) {
            localStorage.removeItem(key);
        }
    });
    prefijo = "bloqueActivo";
   Object.keys(localStorage).forEach(key => {
        if (key.startsWith(prefijo)) {
            ///localStorage.removeItem(key);
            localStorage.setItem(key,"NO");
        }
    });
    
};

// Función para restaurar los borradores en caso de que existan
function inputFormularioCrearArticulo() {
    const campos = [
        "idCrearArticuloCodigo", 
        "idCrearArticuloNombre", 
        "idCrearArticuloMarca", 
        "idCrearArticuloCategoria", 
        "idCrearArticuloPrecio"
    ];
    obtenerCamposLocalStorage(campos);
    /*campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });*/
}

// Función para restaurar los borradores en caso de que existan
function inputFormularioListarArticulos() {
    const campos = [
        "idListarArticulosDescuento"
    ];
    obtenerCamposLocalStorage(campos);
    /*
    campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });*/
}

function inputFormularioBuscarArticulos(){
    const campos = [
        "idBuscarArticulosId",
        "idBuscarArticulosMarca",
        "idBuscarArticulosCategoria"
    ];
    
    obtenerCamposLocalStorage(campos);
   /* campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });*/
}

function inputFormularioVerificarExistenciaArticulo(){
    const campos = [
        "idVerificarExistenciaArticuloCodigo"
    ];
    obtenerCamposLocalStorage(campos);
    /*campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });*/
}

function inputFormularioComprarArticulos(){
    const campos = [
        "idComprarArticulosCategoria",
        "idComprarArticulosMarca"
    ];
    obtenerCamposLocalStorage(campos);
    /*campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`input_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });*/
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Al presionar el botón de Guardar / Submit exitoso, recuerda limpiar estos borradores con:
// localStorage.removeItem("borrador_idCrearArticuloCodigo"); (etc.)
//////////////////////////////////////////////////////////////////////////

