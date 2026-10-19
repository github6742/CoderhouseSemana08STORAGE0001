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
console.log(listaPreciosArticulosStorage);
if (listaPreciosArticulosStorage.length > 0) {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPreciosArticulosStorage]));
} else {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPrecioArticulos]));
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const carritoComprasStorage = (JSON.parse(localStorage.getItem("carritoCompras")) == null) ? ([]) : JSON.parse(localStorage.getItem("carritoCompras"));
console.log(carritoComprasStorage);
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
console.log("antes de funcion crearHeaderMenu")
function crearHeaderMenu(){
  const tagHeader = document.querySelector("header");
  const tagHeaderDivContenedor = document.createElement("div");
  tagHeaderDivContenedor.id ="idContenedorHeader";
  tagHeaderDivContenedor.className ="contenedorHeader";
  const tagHeaderDivContenedorElementos = document.createElement("div");
  tagHeaderDivContenedorElementos.id ="idContenedorHeaderElementos";
  tagHeaderDivContenedorElementos.className ="contenedorHeaderElementos";
  const tagHeaderH1 = document.createElement("h1");
  tagHeaderH1.id = "idHeaderH1Menu";
  tagHeaderH1.className = "headerH1Menu";
  tagHeaderH1.innerText = "MODULO DE ARTICULOS, PRECIOS, COMPRAS";
  const tagHeaderNav = document.createElement("nav");
  tagHeaderNav.id = "idHeaderNavMenu";
  tagHeaderNav.className = "headerNavMenu";
  const tagHeaderUl = document.createElement("ul");
  tagHeaderUl.id = "idUlMenu";
  tagHeaderUl.className = "headerUlMenu";

  //listaMenu.forEach(menu =>{
  listaMenu.forEach(({id,titulo}) =>{
     let tagHeaderLiMenu = document.createElement("li");
     tagHeaderLiMenu.id = "idOpcionMenuTextoLi";
     tagHeaderLiMenu.className = "opcionMenuTextoLi";
     let tagHeaderLiAMenu = document.createElement("a");
     //tagHeaderLiAMenu.id = menu.id;
     tagHeaderLiAMenu.id = id;
     tagHeaderLiAMenu.className = "opcionMenuTextoA";
     //tagHeaderLiAMenu.innerText = menu.titulo;
     tagHeaderLiAMenu.innerText = titulo;
     tagHeaderLiMenu.appendChild(tagHeaderLiAMenu);
     tagHeaderUl.appendChild(tagHeaderLiMenu);
     }
  );
  //
  tagHeaderNav.appendChild(tagHeaderUl);
  tagHeaderDivContenedorElementos.appendChild(tagHeaderH1);
  tagHeaderDivContenedorElementos.appendChild(tagHeaderNav);
  tagHeaderDivContenedor.appendChild(tagHeaderDivContenedorElementos);
  tagHeader.appendChild(tagHeaderDivContenedor);
};


console.log("antes de funcion crearFormularioCrearArticulo")
function crearFormularioCrearArticulo(e){

    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    }
    
    // Guardamos en el almacenamiento que esta es la vista actual en pantalla
    localStorage.setItem("vistaActiva", "crearArticulo");
   // e.preventDefault();
    const tagMain = document.querySelector("main");
    tagMain.id = "idMain";
    tagMain.className = "claseMain";
    tagMain.innerHTML = "";
    //
    const tagDivContenedorFormulario = document.createElement("div");
    tagDivContenedorFormulario.id = "idContenedorFormulario";
    tagDivContenedorFormulario.className = "contenedorFormulario";
    //
    const tagDivContenedorFormularioElementos = document.createElement("div");
    tagDivContenedorFormularioElementos.id = "idContenedorFormularioElementos";
    tagDivContenedorFormularioElementos.className = "contenedorFormularioElementos";
    //
    const tagH2ContenedorFormulario = document.createElement("h2");
    tagH2ContenedorFormulario.id = "idContenedorFormularioTitulo";
    tagH2ContenedorFormulario.className = "contenedorFormularioTitulo";
    tagH2ContenedorFormulario.innerText = "Cargar Articulo Nuevo";
    tagDivContenedorFormularioElementos.appendChild(tagH2ContenedorFormulario);    
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idFormularioArticulo";
    tagFormulario.className = "formularioArticulo";
    tagFormulario.method = "POST";
    //tagFormulario.addEventListener("submit", cargarArticulo);
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso codigo
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCodigoDiv = document.createElement("div");
    tagFormularioCodigoDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCodigoLabel = document.createElement("label");
    tagFormularioCodigoLabel.setAttribute("for", "idCrearArticuloCodigo");
    tagFormularioCodigoLabel.className = "labelGlobal";
    tagFormularioCodigoLabel.innerText = "Codigo: ";
    // crea tag input
    const tagFormularioCodigoInput = document.createElement("input");
    tagFormularioCodigoInput.id = "idCrearArticuloCodigo";
    tagFormularioCodigoInput.className = "inputGlobal";
    tagFormularioCodigoInput.name = "crearArticuloCodigo";
    tagFormularioCodigoInput.type = "text";
    tagFormularioCodigoInput.required = true;
    // 
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoLabel);
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoInput);
    tagFormulario.appendChild(tagFormularioCodigoDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso nombre
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioNombreDiv = document.createElement("div");
    tagFormularioNombreDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioNombreLabel = document.createElement("label");
    tagFormularioNombreLabel.setAttribute("for", "idCrearArticuloNombre");
    tagFormularioCodigoLabel.className = "labelGlobal";
    tagFormularioNombreLabel.innerText = "Nombre: ";
    // crea tag input
    const tagFormularioNombreInput = document.createElement("input");
    tagFormularioNombreInput.id = "idCrearArticuloNombre";
    tagFormularioNombreInput.className = "inputGlobal";
    tagFormularioNombreInput.name = "crearArticuloNombre";
    tagFormularioNombreInput.type = "text";
    tagFormularioNombreInput.required = true;
    // carga el label en el div
    tagFormularioNombreDiv.appendChild(tagFormularioNombreLabel);
    tagFormularioNombreDiv.appendChild(tagFormularioNombreInput);
    tagFormulario.appendChild(tagFormularioNombreDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso marca
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioMarcaDiv = document.createElement("div");
    tagFormularioMarcaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioMarcaLabel = document.createElement("label");
    tagFormularioMarcaLabel.setAttribute("for", "idCrearArticuloMarca");
    tagFormularioMarcaLabel.className = "labelGlobal";
    tagFormularioMarcaLabel.innerText = "Marca: ";
    // crea tag input
    const tagFormularioMarcaInput = document.createElement("input");
    tagFormularioMarcaInput.id = "idCrearArticuloMarca";
    tagFormularioMarcaInput.className = "inputGlobal";
    tagFormularioMarcaInput.name = "crearArticuloMarca";
    tagFormularioMarcaInput.type = "text";
    tagFormularioMarcaInput.required = true;
    // carga el label en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaLabel);
    // carga el input en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaInput);
    // carga el div en el formulario
    tagFormulario.appendChild(tagFormularioMarcaDiv);
    /////////////////////////////////////////////////////////////
    /// crea el campo de categoria
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCategoriaDiv = document.createElement("div");
    tagFormularioCategoriaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCategoriaLabel = document.createElement("label");
    tagFormularioCategoriaLabel.setAttribute("for", "idCrearArticuloCategoria");
    tagFormularioCategoriaLabel.className = "labelGlobal";
    tagFormularioCategoriaLabel.innerText = "Categoria: ";
    // crea tag select
    const tagFormularioCategoriaSelect = document.createElement("select");
    tagFormularioCategoriaSelect.id = "idCrearArticuloCategoria";
    tagFormularioCategoriaSelect.className = "inputGlobal";
    tagFormularioCategoriaSelect.name = "crearArticuloCategoria";
    tagFormularioCategoriaSelect.required = true;
    //
    const tagSelectOptionValue1 = document.createElement("option");
    tagSelectOptionValue1.innerText = "Seleccione una categoria";
    tagSelectOptionValue1.value = "";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue1);
    //
    const tagSelectOptionValue2 = document.createElement("option");
    tagSelectOptionValue2.innerText = "TELEVISOR";
    tagSelectOptionValue2.value = "TELEVISOR";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue2);
    //
    const tagSelectOptionValue3 = document.createElement("option");
    tagSelectOptionValue3.innerText = "COCINA";
    tagSelectOptionValue3.value = "COCINA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue3);
    //
    const tagSelectOptionValue4 = document.createElement("option");
    tagSelectOptionValue4.innerText = "HELADERA";
    tagSelectOptionValue4.value = "HELADERA";
    tagFormularioCategoriaSelect.appendChild(tagSelectOptionValue4);
    // carga el label en el div
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaLabel);
    tagFormularioCategoriaDiv.appendChild(tagFormularioCategoriaSelect);
    tagFormulario.appendChild(tagFormularioCategoriaDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso precio
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioPrecioDiv = document.createElement("div");
    tagFormularioPrecioDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioPrecioLabel = document.createElement("label");
    tagFormularioPrecioLabel.setAttribute("for", "idCrearArticuloPrecio");
    tagFormularioPrecioLabel.className = "labelGlobal";
    tagFormularioPrecioLabel.innerText = "Precio: ";
    // crea tag input
    const tagFormularioPrecioInput = document.createElement("input");
    tagFormularioPrecioInput.id = "idCrearArticuloPrecio";
    tagFormularioPrecioInput.className = "inputGlobal";
    tagFormularioPrecioInput.name = "crearArticuloPrecio";
    tagFormularioPrecioInput.type = "number";
    tagFormularioPrecioInput.min = 0;
    tagFormularioPrecioInput.required = true;
    // carga el label en el div
    tagFormularioPrecioDiv.appendChild(tagFormularioPrecioLabel);
    tagFormularioPrecioDiv.appendChild(tagFormularioPrecioInput);
    tagFormulario.appendChild(tagFormularioPrecioDiv);
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.id = "idCrearArticuloBoton";
    tagFormularioBoton.className = "buttonGlobal";
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.innerText = "Guardar";
    //
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);
    tagDivContenedorFormularioElementos.appendChild(tagFormulario);
    tagDivContenedorFormulario.appendChild(tagDivContenedorFormularioElementos);
    tagMain.appendChild(tagDivContenedorFormulario);
};

console.log("crearHeaderMenu()")
crearHeaderMenu();
console.log("click, crear")
const formularioCrearArticulo = document.getElementById("idCrearArticulo");
formularioCrearArticulo.addEventListener("click", crearFormularioCrearArticulo);
////////////////////////////////////////////////////////////////////////////////////////////////
const ultimaVistaActiva = localStorage.getItem("vistaActiva");
if (ultimaVistaActiva === "crearArticulo") {
    crearFormularioCrearArticulo(); // Se ejecuta de forma automática tras recargar
    restaurarBorradorCampos(); // <-- Añadido aquí para rellenar los inputs automáticamente
}
// Listener para guardar borradores en tiempo real dentro del formulario
document.addEventListener("input", (e) => {
    if (e.target && e.target.classList.contains("inputGlobal")) {
        localStorage.setItem(`borrador_${e.target.id}`, e.target.value);
    }
});

// Función para restaurar los borradores en caso de que existan
function restaurarBorradorCampos() {
    const campos = [
        "idCrearArticuloCodigo", 
        "idCrearArticuloNombre", 
        "idCrearArticuloMarca", 
        "idCrearArticuloCategoria", 
        "idCrearArticuloPrecio"
    ];
    campos.forEach(id => {
        const input = document.getElementById(id);
        const valorGuardado = localStorage.getItem(`borrador_${id}`);
        if (input && valorGuardado) {
            input.value = valorGuardado;
        }
    });
}
// Al presionar el botón de Guardar / Submit exitoso, recuerda limpiar estos borradores con:
// localStorage.removeItem("borrador_idCrearArticuloCodigo"); (etc.)
/*
if (ultimaVistaActiva === "crearArticulo") {
    crearFormularioCrearArticulo();
    restaurarBorradorCampos(); // <-- Añadido aquí para rellenar los inputs automáticamente
}
*/