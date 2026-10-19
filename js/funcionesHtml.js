
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

function crearFormularioCrearArticulo(e){
    //e.preventDefault();
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    };
    localStorage.setItem("formularioActivo","crearFormularioCrearArticulo");
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
    tagFormulario.addEventListener("submit", cargarArticulo);
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

function crearFormularioListarArticulos(e){
    //e.preventDefault();
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    };
    localStorage.setItem("formularioActivo","crearFormularioListarArticulo");
    const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
    const tagMain = document.querySelector("main");
    tagMain.id = "idMain";
    tagMain.className = "claseMain";
    tagMain.innerHTML = "";
    //
    const tagDivContenedorFormulario = document.createElement("div");
    tagDivContenedorFormulario.id = "idContenedorListadoArticulos";
    tagDivContenedorFormulario.className = "contenedorListadoArticulos";
    //
    const tagDivContenedorFormularioElementos = document.createElement("div");
    tagDivContenedorFormularioElementos.id = "idContenedorFormularioElementos";
    tagDivContenedorFormularioElementos.className = "contenedorFormularioElementos";
    //
    const tagH2ContenedorListado = document.createElement("h2");
    tagH2ContenedorListado.id = "idContenedorListadoTitulo";
    tagH2ContenedorListado.className = "contenedorListadoTitulo";
    tagH2ContenedorListado.innerText = "Lista de Articulos";
    tagDivContenedorFormularioElementos.appendChild(tagH2ContenedorListado);
    //
    const tagFormularioDescuentoLabel = document.createElement("label");
    tagFormularioDescuentoLabel.setAttribute("for", "idListarArticulosDescuento");
    tagFormularioDescuentoLabel.className = "labelInputDescuento";
    tagFormularioDescuentoLabel.innerText = "Descuento: ";
    // carga el label en el div
    tagDivContenedorFormularioElementos.appendChild(tagFormularioDescuentoLabel);
    //
    const tagListadoDescuentoInput = document.createElement("input");
    tagListadoDescuentoInput.id = "idListarArticulosDescuento";
    tagListadoDescuentoInput.className = "inputGlobal";
    tagListadoDescuentoInput.name = "listarArticulosDescuento";
    tagListadoDescuentoInput.type = "number";
    tagListadoDescuentoInput.min = 0;
    tagListadoDescuentoInput.max = 99;
    tagListadoDescuentoInput.defaultValue = 0;
    tagDivContenedorFormularioElementos.appendChild(tagListadoDescuentoInput);
    //
    const tagTablaListado = document.createElement("table");
    tagTablaListado.id = "idListarArticulosTabla";
    tagTablaListado.className = "listarArticulosTabla";
    //    
    const tagTablaListadoThead = document.createElement("thead");
    tagTablaListadoThead.id = "idListarArticulosTablaTitulos";
    tagTablaListadoThead.className = "listarArticulosTablaTitulos";
    tagTablaListadoThead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre del Artículo</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Precio</th>
        </tr>
    `;
    //
    tagTablaListado.appendChild(tagTablaListadoThead);
    //    
    const tagTablaListadoTbody = document.createElement("tbody");
    tagTablaListadoTbody.id = "idListarArticulosTablaRegistro";
    tagTablaListadoTbody.className = "tablaListarArticulosTablaRegistro";
    //
    //listaPrecioArticulos.forEach(articulo => {
    //lista.forEach(articulo => {
    lista.forEach(({id,codigo,nombre, marca, categoria,precio}) => {
        const registro = document.createElement("tr");        
        registro.innerHTML = `
            <td>${id}</td>
            <td>${codigo.toUpperCase()}</td>
            <td>${nombre.toUpperCase()}</td>
            <td>${marca.toUpperCase()}</td>
            <td>${categoria.toUpperCase()}</td>
            <td>$${precio}</td>
        `;        
        tagTablaListadoTbody.appendChild(registro);
    });
    //
    tagTablaListado.appendChild(tagTablaListadoTbody);
    tagListadoDescuentoInput.addEventListener("change",crearListadoConDescuento);
    tagDivContenedorFormularioElementos.appendChild(tagTablaListado);
    tagDivContenedorFormulario.appendChild(tagDivContenedorFormularioElementos);
    tagMain.appendChild(tagDivContenedorFormulario);
};

function crearFormularioBuscarArticulos(e){
    //e.preventDefault();
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    };
    localStorage.setItem("formularioActivo","crearFormularioBuscarArticulos");
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
    const tagH2ContenedorBuscarArticulos = document.createElement("h2");
    tagH2ContenedorBuscarArticulos.id = "idContenedorBuscarArticulosTitulo";
    tagH2ContenedorBuscarArticulos.className = "contenedorBuscarArticulosTitulo";
    tagH2ContenedorBuscarArticulos.innerText = "Buscar Articulos";
    tagDivContenedorFormularioElementos.appendChild(tagH2ContenedorBuscarArticulos);
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idBuscarArticulosForm";
    tagFormulario.className = "buscarArticulosForm";
    tagFormulario.method = "POST";
    tagFormulario.addEventListener("submit", crearListadoArticulosEncontrados);
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso id
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioIdDiv = document.createElement("div");
    tagFormularioIdDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioIdLabel = document.createElement("label");
    tagFormularioIdLabel.setAttribute("for", "idBuscarArticulosId");
    tagFormularioIdLabel.className = "labelGlobal";
    tagFormularioIdLabel.innerText = "ID: ";
    // crea tag input
    const tagFormularioIdInput = document.createElement("input");
    tagFormularioIdInput.id = "idBuscarArticulosId";
    tagFormularioIdInput.className = "inputGlobal";
    tagFormularioIdInput.name = "buscarArticulosId";
    tagFormularioIdInput.type = "number";
    tagFormularioIdInput.min = 1;
    tagFormularioIdInput.max = listaPrecioArticulos.length;
    // carga el label en el div
    tagFormularioIdDiv.appendChild(tagFormularioIdLabel);
    tagFormularioIdDiv.appendChild(tagFormularioIdInput);
    tagFormulario.appendChild(tagFormularioIdDiv);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso marca
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioMarcaDiv = document.createElement("div");
    tagFormularioMarcaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioMarcaLabel = document.createElement("label");
    tagFormularioMarcaLabel.setAttribute("for", "idBuscarArticulosMarca");
    tagFormularioMarcaLabel.className = "labelGlobal";
    tagFormularioMarcaLabel.innerText = "Marca: ";
    // crea tag input
    const tagFormularioMarcaInput = document.createElement("input");
    tagFormularioMarcaInput.id = "idBuscarArticulosMarca";
    tagFormularioMarcaInput.className = "inputGlobal";
    tagFormularioMarcaInput.name = "BuscarArticulosMarca";
    tagFormularioMarcaInput.type = "text";
    // carga el label en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaLabel);
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaInput);
    tagFormulario.appendChild(tagFormularioMarcaDiv);
    /////////////////////////////////////////////////////////////
    /// crea el campo de categoria
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCategoriaDiv = document.createElement("div");
    tagFormularioCategoriaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCategoriaLabel = document.createElement("label");
    tagFormularioCategoriaLabel.setAttribute("for", "idBuscarArticulosCategoria");
    tagFormularioCategoriaLabel.className = "labelGlobal";
    tagFormularioCategoriaLabel.innerText = "Categoria: ";
    // crea tag select
    const tagFormularioCategoriaSelect = document.createElement("select");
    tagFormularioCategoriaSelect.id = "idBuscarArticulosCategoria";
    tagFormularioCategoriaSelect.className = "inputGlobal";
    tagFormularioCategoriaSelect.name = "buscarArticulosCategoria";
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
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.className = "buttonGlobal";
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.innerText = "Buscar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);
    tagDivContenedorFormularioElementos.appendChild(tagFormulario);
    tagDivContenedorFormulario.appendChild(tagDivContenedorFormularioElementos);
    //
    const tagDivContenedorResultadoBuscar = document.createElement("div");
    tagDivContenedorResultadoBuscar.id = "idContenedorBuscarArticulosResultados";
    tagDivContenedorResultadoBuscar.className = "contenedorBuscarArticulosResultados"; 
    tagMain.appendChild(tagDivContenedorResultadoBuscar);
    tagMain.appendChild(tagDivContenedorFormulario);
};

function crearFormularioVerificarExistenciaArticulo(e){
    //e.preventDefault();
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    };
    localStorage.setItem("formularioActivo","crearFormularioVerificarExistenciaArticulo");
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
    const tagH2ContenedorVerificarArticulo = document.createElement("h2");
    tagH2ContenedorVerificarArticulo.id = "idContenedorVerificarArticuloTitulo";
    tagH2ContenedorVerificarArticulo.className = "contenedorVerificarArticuloTitulo";
    tagH2ContenedorVerificarArticulo.innerText = "Verificar Existencia Articulo";
    tagDivContenedorFormularioElementos.appendChild(tagH2ContenedorVerificarArticulo);
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idVerificarExistenciaArticulo";
    tagFormulario.className = "formularioArticulo";////////////////////////////////////////////
    tagFormulario.method = "POST";
    tagFormulario.addEventListener("submit", crearListadoExistenciaArticulo);
    /////////////////////////////////////////////////////////////
    /// crea el campo de ingreso codigo
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCodigoDiv = document.createElement("div");
    tagFormularioCodigoDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCodigoLabel = document.createElement("label");
    tagFormularioCodigoLabel.setAttribute("for", "idVerificarExistenciaArticuloCodigo");
    tagFormularioCodigoLabel.className = "labelGlogal";
    tagFormularioCodigoLabel.innerText = "Codigo: ";
    // crea tag input
    const tagFormularioCodigoInput = document.createElement("input");
    tagFormularioCodigoInput.id = "idVerificarExistenciaArticuloCodigo";
    tagFormularioCodigoInput.className = "inputGlobal";
    tagFormularioCodigoInput.name = "verificarExistenciaArticuloCodigo";
    tagFormularioCodigoInput.type = "text";
    tagFormularioCodigoInput.required = true;    
    // carga el label en el div
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoLabel);
    tagFormularioCodigoDiv.appendChild(tagFormularioCodigoInput);
    tagFormulario.appendChild(tagFormularioCodigoDiv);
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioVerificarArticuloDiv = document.createElement("div");
    tagFormularioVerificarArticuloDiv.id = "idVerificarExistenciaArticuloRenglon";
    tagFormularioVerificarArticuloDiv.className = "verificarExistenciaArticuloRenglon";
    //
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.className = "buttonGlobal";
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.innerText = "Buscar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);
    tagDivContenedorFormularioElementos.appendChild(tagFormulario);
    tagDivContenedorFormulario.appendChild(tagDivContenedorFormularioElementos);
    //
    const tagDivContenedorResultadoVerificar = document.createElement("div");
    tagDivContenedorResultadoVerificar.id = "idContenedorResultadosVerificar";
    tagDivContenedorResultadoVerificar.className = "contenedorResultadosVerificar";  
    tagMain.appendChild(tagDivContenedorResultadoVerificar);
    tagMain.appendChild(tagDivContenedorFormulario);
};

function crearFormularioComprarArticulos(e){
    //e.preventDefault();
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    };
    localStorage.setItem("formularioActivo","crearFormularioComprarArticulos");
    const listaCarrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];
    console.log(listaCarrito);
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
    const tagH2ContenedorBuscarArticulos = document.createElement("h2");
    tagH2ContenedorBuscarArticulos.id = "idContenedorBuscarArticulosTitulo";
    tagH2ContenedorBuscarArticulos.className = "contenedorBuscarArticulosTitulo";
    tagH2ContenedorBuscarArticulos.innerText = "Comprar";
    tagDivContenedorFormularioElementos.appendChild(tagH2ContenedorBuscarArticulos);
    // crea tag form
    const tagFormulario = document.createElement("form");
    tagFormulario.id = "idComprarForm";
    tagFormulario.className = "comprarForm";
    tagFormulario.method = "POST";
    tagFormulario.addEventListener("submit", crearFormularioComprar);    
    /////////////////////////////////////////////////////////////
    /// crea el campo de categoria
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioCategoriaDiv = document.createElement("div");
    tagFormularioCategoriaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioCategoriaLabel = document.createElement("label");
    tagFormularioCategoriaLabel.setAttribute("for", "idBuscarArticulosCategoria");
    tagFormularioCategoriaLabel.className = "labelGlobal";
    tagFormularioCategoriaLabel.innerText = "Categoria: ";
    // crea tag select
    const tagFormularioCategoriaSelect = document.createElement("select");
    tagFormularioCategoriaSelect.id = "idBuscarArticulosCategoria";
    tagFormularioCategoriaSelect.className = "inputGlobal";
    tagFormularioCategoriaSelect.name = "buscarArticulosCategoria";
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
    /// crea el campo de ingreso marca
    /////////////////////////////////////////////////////////////
    // crea tag div
    const tagFormularioMarcaDiv = document.createElement("div");
    tagFormularioMarcaDiv.className = "renglonFormularioArticulo";
    // crea tag label
    const tagFormularioMarcaLabel = document.createElement("label");
    tagFormularioMarcaLabel.setAttribute("for", "idBuscarArticulosMarca");
    tagFormularioMarcaLabel.className = "labelGlobal";
    tagFormularioMarcaLabel.innerText = "Marca: ";
    // crea tag input
    const tagFormularioMarcaInput = document.createElement("input");
    tagFormularioMarcaInput.id = "idBuscarArticulosMarca";
    tagFormularioMarcaInput.className = "inputGlobal";
    tagFormularioMarcaInput.name = "BuscarArticulosMarca";
    tagFormularioMarcaInput.type = "text";
    // carga el label en el div
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaLabel);
    tagFormularioMarcaDiv.appendChild(tagFormularioMarcaInput);
    tagFormulario.appendChild(tagFormularioMarcaDiv); 
    ///////////////////////////////////////////////////////
    // crea el boton de submit
    //////////////////////////////////////////////////////
    const tagFormularioBoton = document.createElement("button");
    tagFormularioBoton.className = "buttonGlobal";
    tagFormularioBoton.type = "submit";
    tagFormularioBoton.innerText = "Buscar";
    // carga el boton en el formulario
    tagFormulario.appendChild(tagFormularioBoton);
    tagDivContenedorFormularioElementos.appendChild(tagFormulario);
    tagDivContenedorFormulario.appendChild(tagDivContenedorFormularioElementos);
    //
    tagMain.appendChild(tagDivContenedorFormulario);

    //if (listaCarrito.length > 0){
    //    verBotonesCarrito();
    //};
    //ternario
    (listaCarrito.length > 0) && (verBotonesCarrito());
};