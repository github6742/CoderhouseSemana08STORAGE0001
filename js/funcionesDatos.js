function crearMensajeDialog({tipo, texto}){
    //
    const tagMensajeDialog = document.createElement("dialog");
    tagMensajeDialog.id = "idMensajeDialog";
    tagMensajeDialog.className = "mensajeDialog";
    //
    const tagMensajeH3Dialog = document.createElement("h3");
    tagMensajeH3Dialog.id = "idMensajeH3Dialog";
    tagMensajeH3Dialog.className = "mensajeH3Dialog";
    //
    // ternario
     tipo === "exito" ? tagMensajeH3Dialog.innerText="✔ Correcto" : tagMensajeH3Dialog.innerText="❌ Error";
    //
    const tagMensajeParrafoDialog = document.createElement("p");
    tagMensajeParrafoDialog.id = "idMensajeParrafoDialog";
    tagMensajeParrafoDialog.className = "mensajeParrafoDialog";
    tagMensajeParrafoDialog.innerText = texto;
    //
    const tagMensajeBotonDialog = document.createElement("button");
    tagMensajeBotonDialog.id = "idMensajeBotonDialog";
    tagMensajeBotonDialog.className = "buttonGlobal";
    tagMensajeBotonDialog.innerText = "Aceptar";
    tagMensajeBotonDialog.addEventListener("click", function() {
        tagMensajeDialog.close();
        tagMensajeDialog.remove();
    });
    //
    tagMensajeDialog.appendChild(tagMensajeH3Dialog);
    tagMensajeDialog.appendChild(tagMensajeParrafoDialog);
    tagMensajeDialog.appendChild(tagMensajeBotonDialog);
    document.body.appendChild(tagMensajeDialog);
    tagMensajeDialog.showModal();
};

function cargarArticulo(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  console.log("lectura lista inicial------------------")
  console.log(lista);
  //
  const codigo = document.getElementById("idCrearArticuloCodigo").value;
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
  //
  console.log("codigo: " + codigo)
  console.log("lista.some------------------")
  console.log((lista.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase())));
  if (lista.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase())) {
    console.log("10")
    //crearMensajeDialog("error", "Ya existe un articulo con ese codigo: " + codigo + "(id: "+lista.find(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase()).id+")");
    crearMensajeDialog({tipo:  "error", 
                        texto: "Ya existe un articulo con ese codigo: " + codigo + 
                               "(id: " + 
                               lista.find(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase()).id +
                               ")"
                      });
  } else {
    if (lista.some(articulo => articulo.nombre.toUpperCase() == nombre.toUpperCase())) {
    console.log("20")
        //crearMensajeDialog("error", "Ya existe un articulo con ese nombre: " + nombre + lista.find(articulo => articulo.nombre.toUpperCase() == nombre.toUpperCase()).id+")");
        crearMensajeDialog({tipo:  "error", 
                            texto: "Ya existe un articulo con ese nombre: " + nombre + 
                               "(id: " + 
                            lista.find(articulo => articulo.nombre.toUpperCase() == nombre.toUpperCase()).id +
                               ")"
                          });
    } else {
    console.log("30")
        const id = lista.length + 1;
        const articuloNuevo = new Articulo(id, 
                                          codigo.toUpperCase(), 
                                          nombre.toUpperCase(), 
                                          marca.toUpperCase(), 
                                          categoria.toUpperCase(), 
                                          parseFloat(precio));
        const elementoListaPrecios = articuloNuevo;
        console.log(elementoListaPrecios)                                    
        //lista.push(articuloNuevo);
        lista.push(elementoListaPrecios); 
        localStorage.setItem("listaPrecioArticulos", JSON.stringify(lista));
        //crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
        crearMensajeDialog({tipo: "exito", texto: "El articulo se creo satisfactoriamente"});
    };
  };
};

function crearListadoConDescuento(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  const listado = document.getElementById("idListarArticulosTablaRegistro");
  const listadoTabla = document.getElementById("idListarArticulosTabla");
  const listadoTablaThead = document.getElementById("idListarArticulosTablaTitulos");
  const valorDescuento = document.getElementById("idListarArticulosDescuento").value;
  //
  if (valorDescuento > 0) {
     listado.innerHTML = "";
     listadoTabla.innerHTML = "";
     
     const tagTablaListadoTbody = document.createElement("tbody");
     tagTablaListadoTbody.id = "idListarArticulosTablaRegistro";     
     tagTablaListadoTbody.className = "listarArticulosTablaRegistro";
        
     //const articulosDescuento = lista.map(articulo => {
     const articulosDescuento = lista.map(({id, codigo, nombre, marca, categoria, precio}) => {
     //const articulosDescuento = listaPrecioArticulos.map(articulo => {
        let precioDescuento = precio - (precio * (valorDescuento/100));
        /*return {
            id: articulo.id,
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            marca: articulo.marca,
            categoria: articulo.categoria,
            precio: precioDescuento
        };*/
        return { id, codigo, nombre, marca, categoria, precio: precioDescuento };
    });
     //articulosDescuento.forEach(articulo => {
     articulosDescuento.forEach(({id,codigo,nombre,marca,categoria, precio}) => {
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
     listadoTabla.appendChild(listadoTablaThead);
     listadoTabla.appendChild(tagTablaListadoTbody);
  } else {
    listado.innerHTML = "";
    listadoTabla.innerHTML = "";
     
    const tagTablaListadoTbody = document.createElement("tbody");
     tagTablaListadoTbody.id = "idListarArticulosTablaRegistro";     
     tagTablaListadoTbody.className = "listarArticulosTablaRegistro";
    //
    //listaPrecioArticulos.forEach(articulo => {
    /*
    lista.forEach(articulo => {
        const registro = document.createElement("tr");        
        registro.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.codigo.toUpperCase()}</td>
            <td>${articulo.nombre.toUpperCase()}</td>
            <td>${articulo.marca.toUpperCase()}</td>
            <td>${articulo.categoria.toUpperCase()}</td>
            <td>$${articulo.precio}</td>
        `;        
        tagTablaListadoTbody.appendChild(registro);
    });*/
    lista.forEach(({ id, codigo, nombre, marca, categoria, precio }) => {
    registro.innerHTML = `
        <td>${id}</td>
        <td>${codigo.toUpperCase()}</td>
        <td>${nombre.toUpperCase()}</td>
        <td>${marca.toUpperCase()}</td>
        <td>${categoria.toUpperCase()}</td>
        <td>$${precio}</td>
        `;
    });
    listadoTabla.appendChild(listadoTablaThead);
    listadoTabla.appendChild(tagTablaListadoTbody);
  }
};

function eliminarArticuloLista(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  //const idArticulo = e.target.dataset.id;
  //const idDivregistrosEncontrados = e.target.dataset.idRegistrosEncontrados;
  const {id: idArticulo, idRegistrosEncontrados: idDivRegistrosEncontrados } = e.target.dataset;
  //const indice = listaPrecioArticulos.findIndex((articulo) => articulo.id == idArticulo);
  const indice = lista.findIndex((articulo) => articulo.id == idArticulo);
  /*
  if (indice !== -1) {
     //listaPrecioArticulos.splice(indice, 1);
     lista.splice(indice, 1);
  };
  */
 //ternario
  indice !== -1 && lista.splice(indice, 1);
  const contenedor = document.getElementById(idDivRegistrosEncontrados);
  for (const registro of contenedor.children) {
     const boton = registro.querySelector(".buttonGlobal");
     if (boton && boton.dataset.id === idArticulo) {
       registro.remove(); 
       break; 
     };
  };
  
  localStorage.setItem("listaPrecioArticulos", JSON.stringify(lista));
  //crearMensajeDialog("exito", "Se elimino el articulo de la lista de precios");
  crearMensajeDialog({tipo: "exito", texto: "Se elimino el articulo de la lista de precios"});
};

function crearListadoArticulosEncontrados(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  const tagMain = document.getElementById("idMain");
  const tagDivContenedorResultadoBuscar = document.getElementById("idContenedorBuscarArticulosResultados");
  tagDivContenedorResultadoBuscar.innerHTML = "";
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  const idBuscar = parseInt(document.getElementById("idBuscarArticulosId").value);
  const marcaBuscar = document.getElementById("idBuscarArticulosMarca").value;
  const categoriaBuscar = document.getElementById("idBuscarArticulosCategoria").value;
  //
  let articulosEncontrados = [];

  //if (listaPrecioArticulos.some(articulo => articulo.id == idBuscar) && (!esString(idBuscar))){
  if (lista.some(articulo => articulo.id == idBuscar) && (!esString(idBuscar))){
     let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == idBuscar);
     /*articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
      */
     articulosEncontrados = [{ ...articuloEncontrado }];
  };
  //
  if (articulosEncontrados.length == 0) {
    /*
    if (categoriaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
       );
    };*/
    //ternario
    categoriaBuscar.length > 0 && (articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()));
  } else  {
    /*if (categoriaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase());
    };*/
    //ternario
    categoriaBuscar.length > 0 && (articulosEncontrados = articulosEncontrados.filter(articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()));
  };
  //
  if (articulosEncontrados.length == 0) {
    /*
    if (marcaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
    */
   //ternario
   marcaBuscar.length > 0 && (articulosEncontrados = listaPrecioArticulos.filter( articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())));
  } else  {
    /*
    if(marcaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
    };*/
    marcaBuscar.length > 0 && (articulosEncontrados = articulosEncontrados.filter(articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())));
  };
  //
  if (esString(idBuscar) && categoriaBuscar.length == 0 && marcaBuscar == 0){
      //listaPrecioArticulos.forEach(articulo => {
      //lista.forEach(articulo => {

        
      //lista.forEach(({ id, codigo, nombre, marca, categoria, precio }) => {
      lista.forEach(({ id, codigo, nombre, marca, categoria, precio }) => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${id}</h6>
            <h6>CODIGO: ${codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${precio}</h6>
        `;    
            
        //tagDivArticulosEncontrados.appendChild(registro);

        const tagDivContenedorBotonEliminarArticuloLista = document.createElement("div");
        tagDivContenedorBotonEliminarArticuloLista.id = "idContenedorBotonEliminarArticuloLista";
        tagDivContenedorBotonEliminarArticuloLista.className = "contenedorBotonEliminarArticuloLista";

        const tagDivBotonEliminarArticuloLista = document.createElement("button");
        tagDivBotonEliminarArticuloLista.id = "idBotonEliminarArticuloLista";
        tagDivBotonEliminarArticuloLista.className = "buttonGlobal";
        tagDivBotonEliminarArticuloLista.innerText = "Eliminar";
        tagDivBotonEliminarArticuloLista.dataset.id = id;
        tagDivBotonEliminarArticuloLista.dataset.idRegistrosEncontrados = "idRegistrosEncontrados";
        tagDivBotonEliminarArticuloLista.addEventListener("click",eliminarArticuloLista);


        tagDivContenedorBotonEliminarArticuloLista.appendChild(tagDivBotonEliminarArticuloLista);
        registro.appendChild(tagDivContenedorBotonEliminarArticuloLista);
        tagDivArticulosEncontrados.appendChild(registro);


      });
  } else {
     if (articulosEncontrados.length == 0){
        //crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
        crearMensajeDialog({tipo: "error", texto: "No se encontraron articulos con esos filtros"});
     } else {
        //articulosEncontrados.forEach(articulo => {
        articulosEncontrados.forEach(({id,codigo,nombre,marca,categoria,precio}) => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${id}</h6>
            <h6>CODIGO: ${codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${precio}</h6>
        `;        
        //tagDivArticulosEncontrados.appendChild(registro);     
        
        tagDivArticulosEncontrados.appendChild(registro);

        const tagDivContenedorBotonEliminarArticuloLista = document.createElement("div");
        tagDivContenedorBotonEliminarArticuloLista.id = "idContenedorBotonEliminarArticuloLista";
        tagDivContenedorBotonEliminarArticuloLista.className = "contenedorBotonEliminarArticuloLista";

        const tagDivBotonEliminarArticuloLista = document.createElement("button");
        tagDivBotonEliminarArticuloLista.id = "idBotonEliminarArticuloLista";
        tagDivBotonEliminarArticuloLista.className = "buttonGlobal";
        tagDivBotonEliminarArticuloLista.innerText = "Eliminar";
        tagDivBotonEliminarArticuloLista.dataset.id = id;
        tagDivBotonEliminarArticuloLista.dataset.idRegistrosEncontrados = "idRegistrosEncontrados";
        tagDivBotonEliminarArticuloLista.addEventListener("click",eliminarArticuloLista);

        tagDivContenedorBotonEliminarArticuloLista.appendChild(tagDivBotonEliminarArticuloLista);
        registro.appendChild(tagDivContenedorBotonEliminarArticuloLista);
        tagDivArticulosEncontrados.appendChild(registro);
       });
     };
  };




  //
  tagDivContenedorResultadoBuscar.appendChild(tagDivArticulosEncontrados);
  tagMain.appendChild(tagDivContenedorResultadoBuscar);
};

function crearListadoExistenciaArticulo(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  const tagMain = document.getElementById("idMain");
  const tagDivContenedorResultadoVerificar= document.getElementById("idContenedorResultadosVerificar");
  tagDivContenedorResultadoVerificar.innerHTML = "";
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  const codigo = document.getElementById("idVerificarExistenciaArticuloCodigo").value;
  //
  let articulosEncontrados = [];
  //
  //if (listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase() )) {
  if (lista.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase() )) {
     //let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.codigo == codigo.toUpperCase());
     let articuloEncontrado = lista.find(articulo => articulo.codigo == codigo.toUpperCase());
     /*articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
      */
     articulosEncontrados = [{...articuloEncontrado}];
   };
   //
   if (codigo.length == 0){
      //
      //listaPrecioArticulos.forEach(articulo => {
      //lista.forEach(articulo => {
        
      lista.forEach(({ id, codigo, nombre, marca, categoria, precio }) => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${id}</h6>
            <h6>CODIGO: ${codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${precio}</h6>
        `;        
        tagDivArticulosEncontrados.appendChild(registro);
      });
      //
      tagDivContenedorResultadoVerificar.appendChild(tagDivArticulosEncontrados);
      tagMain.appendChild(tagDivContenedorResultadoVerificar);
   } else {
      //
      if (articulosEncontrados.length == 0) {
         //crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
         crearMensajeDialog({tipo: "error", texto:"No se encontraron articulos con esos filtros"});
      } else {
         //articulosEncontrados.forEach(articulo => {
         articulosEncontrados.forEach(({id,codigo,nombre,marca,categoria,precio}) => {
         const registro = document.createElement("div");    
         registro.id = "idRegistroEncontrado";
         registro.className = "registroEncontrado";    
         registro.innerHTML = `
            <h6>ID: ${id}</h6>
            <h6>CODIGO: ${codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${precio}</h6>
         `;        
         tagDivArticulosEncontrados.appendChild(registro);
         });
         //
         tagDivContenedorResultadoVerificar.appendChild(tagDivArticulosEncontrados);
         tagMain.appendChild(tagDivContenedorResultadoVerificar);
    };
  };
};

function eliminarArticuloCarrito(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  //const idArticulo = e.target.dataset.id;
  //const idDivRegistrosEncontrados = e.target.dataset.idRegistrosEncontrados;
  const {id: idArticulo, idRegistrosEncontrados: idDivRegistrosEncontrados} = e.target.dataset;
  //const indice = carritoCompras.findIndex((articulo) => articulo.id == idArticulo);
  const indice = lista.findIndex((articulo) => articulo.id == idArticulo);
  /*if (indice !== -1) {
     //carritoCompras.splice(indice, 1);
     lista.splice(indice, 1);
  };*/
  //ternario
  indice !== -1 && lista.splice(indice, 1);
  //
  const contenedor = document.getElementById(idDivRegistrosEncontrados);
  for (const registro of contenedor.children) {
     const boton = registro.querySelector(".buttonGlobal");
     if (boton && boton.dataset.id === idArticulo) {
       registro.remove(); 
       break; 
     };
  };  
  localStorage.setItem("carritoCompras", JSON.stringify(lista));
  //crearMensajeDialog("exito", "Se elimino el articulo del carrito");
  crearMensajeDialog({tipo: "exito", texto: "Se elimino el articulo del carrito"});
};

function verCarrito(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  const tagMain = document.getElementById("idMain");
  //
  const tagDivContenedorVerCarrito = document.createElement("div");
  tagDivContenedorVerCarrito.id = "idContenedorVerCarrito";
  tagDivContenedorVerCarrito.className = "contenedorVerCarrito";
  //
  const tagDivContenedorVerCarritoElementos = document.createElement("div");
  tagDivContenedorVerCarritoElementos.id = "idContenedorVerCarritoElementos";
  tagDivContenedorVerCarritoElementos.className= "contenedorVerCarritoElementos";
  //
  const tagVerCarritoH3 = document.createElement("H3");
  tagVerCarritoH3.id = "idVerCarritoH3";
  tagVerCarritoH3.className = "verCarritoH3";
  tagVerCarritoH3.innerText = "Carrito de Compras";
  tagDivContenedorVerCarritoElementos.appendChild(tagVerCarritoH3);
  //
  const tagContenedorRegistroEncontradoCarrito = document.createElement("div");
  tagContenedorRegistroEncontradoCarrito.id = "idContenedorRegistroEncontradoCarrito";
  tagContenedorRegistroEncontradoCarrito.className = "contenedorRegistroEncontradoCarrito";
  //
  let totalCarrito = 0;
  //carritoCompras.forEach( articulo =>{ 
  //lista.forEach( articulo =>{ 
      lista.forEach(({ id, codigo, nombre, marca, categoria, precio, cantidad }) => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontradoCarrito";
        registro.className = "registroEncontradoCarrito";    
        registro.innerHTML = `
            <h6>ID: ${id}</h6>
            <h6>CATEGORIA: ${categoria.toUpperCase()}</h6>
            <h6>CODIGO: ${codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${marca.toUpperCase()}</h6>
            <h6>CANIDAD: ${cantidad}</h6>
            <h6>PRECIO: $${precio}</h6>
            <h6>TOTAL: $${precio*cantidad}</h6>
        `;        
        totalCarrito += precio*cantidad;
        tagContenedorRegistroEncontradoCarrito.appendChild(registro);

        //tagDivArticulosEncontrados.appendChild(registro);

        const tagDivContenedorBotonEliminarArticuloCarrito = document.createElement("div");
        tagDivContenedorBotonEliminarArticuloCarrito.id = "idContenedorBotonEliminarArticuloCarrito";
        tagDivContenedorBotonEliminarArticuloCarrito.className = "contenedorBotonEliminarArticuloCarrito";

        const tagDivBotonEliminarArticuloCarrito = document.createElement("button");
        tagDivBotonEliminarArticuloCarrito.id = "idBotonEliminarArticuloLista";
        tagDivBotonEliminarArticuloCarrito.className = "buttonGlobal";
        tagDivBotonEliminarArticuloCarrito.innerText = "Eliminar";
        tagDivBotonEliminarArticuloCarrito.dataset.id = id;
        tagDivBotonEliminarArticuloCarrito.dataset.idRegistrosEncontrados = "idContenedorRegistroEncontradoCarrito";
        tagDivBotonEliminarArticuloCarrito.addEventListener("click",eliminarArticuloCarrito);


        tagDivContenedorBotonEliminarArticuloCarrito.appendChild(tagDivBotonEliminarArticuloCarrito);
        registro.appendChild(tagDivContenedorBotonEliminarArticuloCarrito);
        tagContenedorRegistroEncontradoCarrito.appendChild(registro);
    }
  );
  //
  tagDivContenedorVerCarritoElementos.appendChild(tagContenedorRegistroEncontradoCarrito);  
  //
  const tagVerCarritoTotalP = document.createElement("p");
  tagVerCarritoTotalP.id = "idVerCarritoTotalP";
  tagVerCarritoTotalP.className = "verCarritoTotalP";
  tagVerCarritoTotalP.innerText = "Total del carrito: " + totalCarrito;
  tagDivContenedorVerCarritoElementos.appendChild(tagVerCarritoTotalP);
  //
  tagDivContenedorVerCarrito.appendChild(tagDivContenedorVerCarritoElementos);
  //
  /*if (document.getElementById("idContenedorVerCarrito")) {
     tagMain.replaceChild(tagDivContenedorVerCarrito,document.getElementById("idContenedorVerCarrito"));
  } else {
     tagMain.appendChild(tagDivContenedorVerCarrito);
  };
  */
  //ternario
  (document.getElementById("idContenedorVerCarrito")) ? tagMain.replaceChild(tagDivContenedorVerCarrito,document.getElementById("idContenedorVerCarrito")) :tagMain.appendChild(tagDivContenedorVerCarrito); 
};

function verBotonesCarrito(){

 // e.preventDefault();
  
    const tagMain = document.getElementById("idMain");
    const tagDivContenedorMostrarCarritoBotones = document.createElement("div");
    tagDivContenedorMostrarCarritoBotones.id = "idContenedorMostrarCarritoBotones";
    tagDivContenedorMostrarCarritoBotones.className = "contenedorMostrarCarritoBotones";
    const tagDivContenedorMostrarCarritoElementos = document.createElement("div");
    tagDivContenedorMostrarCarritoElementos.id = "idContenedorMostrarCarritoElementos";
    tagDivContenedorMostrarCarritoElementos.className = "contenedorMostrarCarritoElementos";
    const tagDivMostrarCarritoBotones = document.createElement("div");
    tagDivMostrarCarritoBotones.id = "idMostrarCarritoBotones";
    tagDivMostrarCarritoBotones.className = "mostrarCarritoBotones";
    //
    const tagButtonVerCarrito = document.createElement("button");
    tagButtonVerCarrito.id = "idVerCarrito";
    tagButtonVerCarrito.className = "buttonCarrito";
    tagButtonVerCarrito.innerText = "Ver Carrito";
    tagButtonVerCarrito.addEventListener("click",verCarrito);
    //
    const tagButtonOcultarCarrito = document.createElement("button");
    tagButtonOcultarCarrito.id = "idOcultarCarrito";
    tagButtonOcultarCarrito.className = "buttonCarrito";
    tagButtonOcultarCarrito.innerText = "Ocultar Carrito";
    tagButtonOcultarCarrito.addEventListener("click",ocultarCarrito);
    //
    const tagButtonVaciarCarrito = document.createElement("button");
    tagButtonVaciarCarrito.id = "idVaciarCarrito";
    tagButtonVaciarCarrito.className = "buttonCarrito";
    tagButtonVaciarCarrito.innerText = "Vaciar Carrito";
    tagButtonVaciarCarrito.addEventListener("click",vaciarCarrito);
    //
    tagDivMostrarCarritoBotones.appendChild(tagButtonVerCarrito);
    tagDivMostrarCarritoBotones.appendChild(tagButtonOcultarCarrito);
    tagDivMostrarCarritoBotones.appendChild(tagButtonVaciarCarrito);
    tagDivContenedorMostrarCarritoBotones.appendChild(tagDivMostrarCarritoBotones);
    //
 //ternario
  (document.getElementById("idContenedorMostrarCarritoBotones")) ?
  tagMain.replaceChild(tagDivContenedorMostrarCarritoBotones,document.getElementById("idContenedorMostrarCarritoBotones")) :
  tagMain.appendChild(tagDivContenedorMostrarCarritoBotones);

}

function ocultarCarrito(e){
  e.preventDefault();
  //
  /*if (document.getElementById("idContenedorVerCarrito")){
     document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
  };
  */
 // ternario
 (document.getElementById("idContenedorVerCarrito")) && document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
};

function vaciarCarrito(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  //
  /*if (document.getElementById("idContenedorVerCarrito")){
     document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
  };*/
  //ternario
  (document.getElementById("idContenedorVerCarrito")) && document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
  //
  //if (carritoCompras.length > 0) {
  /*if (lista.length > 0) {
     //carritoCompras.splice(0,carritoCompras.length);
     lista.splice(0,lista.length);
  };*/
  //ternario
  lista.length > 0 && lista.splice(0,lista.length);
  //
  localStorage.setItem("carritoCompras", JSON.stringify(lista));
  //crearMensajeDialog("exito", "El carrito de compras esta vacio ahora");
  crearMensajeDialog({tipo: "exito", texto: "El carrito de compras esta vacio ahora"});
};

function agregarAlCarrito(e){
  e.preventDefault();  
  const listaCarrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  const listaArticulos = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];

  console.log(listaCarrito);

  //const idArticulo = e.target.dataset.idArticulo;
  const {idArticulo: idArticulo} = e.target.dataset;
  //const articuloLista = listaArticulos.find(articulo => articulo.id = idArticulo);
  //const cantidadArticulo = e.target.dataset.cantidad;
  const cantidadArticulo = document.getElementById("idCantidadPedida-"+idArticulo).value;
  console.log("idArticulo: " + idArticulo)
  console.log("cantidadArticulo: " + cantidadArticulo)
  const articulo = listaArticulos.find((articulos) => articulos.id = idArticulo);
  console.log(articulo);
  articulo.cantidad = cantidadArticulo;

  //
  //if (carritoCompras.some(articuloCC => articuloCC.id == articulo.id)){
  if (listaCarrito.some(articuloCC => articuloCC.id == articulo.id)){
    //
    
  //crearMensajeDialog("error", "Ya existe en el carrito");
  crearMensajeDialog({tipo: "error", texto: "Ya existe en el carrito"});
  } else {
    //.push(articulo);
    listaCarrito.push(articulo);
    const registro = document.createElement("div");    
    registro.id = "idRegistroEncontradoCarrito";
    registro.className = "registroEncontradoCarrito";    
    registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CANTIDAD: ${articulo.cantidad}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
            <h6>TOTAL: $${articulo.precio*cantidadArticulo}</h6>
        `;        
    ///////////////////////////
//////////////////////////////////
  
        //tagDivArticulosEncontrados.appendChild(registro);

        const tagDivContenedorBotonEliminarArticuloCarrito = document.createElement("div");
        tagDivContenedorBotonEliminarArticuloCarrito.id = "idContenedorBotonEliminarArticuloCarrito";
        tagDivContenedorBotonEliminarArticuloCarrito.className = "contenedorBotonEliminarArticuloCarrito";

        const tagDivBotonEliminarArticuloCarrito = document.createElement("button");
        tagDivBotonEliminarArticuloCarrito.id = "idBotonEliminarArticuloLista";
        tagDivBotonEliminarArticuloCarrito.className = "buttonGlobal";
        tagDivBotonEliminarArticuloCarrito.innerText = "Eliminar";
        tagDivBotonEliminarArticuloCarrito.dataset.id = articulo.id;
        tagDivBotonEliminarArticuloCarrito.dataset.idRegistrosEncontrados = "idContenedorRegistroEncontradoCarrito";
        tagDivBotonEliminarArticuloCarrito.addEventListener("click",eliminarArticuloCarrito);


        tagDivContenedorBotonEliminarArticuloCarrito.appendChild(tagDivBotonEliminarArticuloCarrito);
        registro.appendChild(tagDivContenedorBotonEliminarArticuloCarrito);
        //tagContenedorRegistroEncontradoCarrito.appendChild(registro);
//////////////////////////////////////


    ////////////////////////////////
    if (document.getElementById("idContenedorRegistroEncontradoCarrito")) {
       document.getElementById("idContenedorRegistroEncontradoCarrito").appendChild(registro);
       //const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
       const totalCarrito = listaCarrito.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
       //
       /*if(document.getElementById("idVerCarritoTotalP")){
         document.getElementById("idVerCarritoTotalP").innerText = "Total del carrito: " + totalCarrito;
       };
       */
      //ternario
      (document.getElementById("idVerCarritoTotalP")) && (document.getElementById("idVerCarritoTotalP").innerText = "Total del carrito: " + totalCarrito);
    };
  localStorage.setItem("carritoCompras", JSON.stringify(listaCarrito));  
  //crearMensajeDialog("exito", "Se agrego articulo al carrito");
  crearMensajeDialog({tipo: "exito", texto: "Se agrego articulo al carrito"});
  };


    (listaCarrito.length > 0) && (verBotonesCarrito());


};

function crearFormularioComprar(e){
  e.preventDefault();
  const listaPrecios = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  const listaCarrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  console.log("lista precios")
  console.log(listaPrecios)
  const tagMain = document.getElementById("idMain");
  const tagDivArticulosEncontrados = document.createElement("div");
  tagDivArticulosEncontrados.id = "idRegistrosEncontrados";
  tagDivArticulosEncontrados.className = "registrosEncontrados";
  //
  const categoriaBuscar = document.getElementById("idBuscarArticulosCategoria").value;
  const marcaBuscar = document.getElementById("idBuscarArticulosMarca").value;
  //
  let articulosEncontrados = [];
  //
  /*
  if (categoriaBuscar.length > 0){
     //articulosEncontrados = listaPrecioArticulos.filter(
     articulosEncontrados = listaPrecios.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
     );
  };
  */
 //
  (categoriaBuscar.length > 0) && (articulosEncontrados = listaPrecios.filter(articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()));

  if (articulosEncontrados.length == 0) {
    /*
    if (marcaBuscar.length > 0){
       //articulosEncontrados = listaPrecioArticulos.filter(
       articulosEncontrados = listaPrecios.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
    */
   // ternario
   (marcaBuscar.length > 0) && ( articulosEncontrados = listaPrecios.filter(articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())));
  } else  {
    /*
     if (marcaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
    };
    */
   // ternario
   (marcaBuscar.length > 0) && (articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      ));
  };
  //
  if (categoriaBuscar.length == 0 && marcaBuscar == 0){
     //listaPrecioArticulos.forEach(articulo => {
     //listaPrecios.forEach(articulo => {
     listaPrecios.forEach(({id,codigo,nombre,marca,categoria, precio}) => { 
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado"; 
        //
        const tagRegistroEncontradoComprar = document.createElement("div");
        tagRegistroEncontradoComprar.id = "idRegistroEncontradoComprar";
        tagRegistroEncontradoComprar.className = "registroEncontradoComprar";
        //
        const tagH6Nombre = document.createElement("h6");
        tagH6Nombre.innerText = "NOMBRE: " + nombre.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Nombre);
        const tagH6Marca = document.createElement("h6");
        tagH6Marca.innerText = "MARCA: " + marca.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Marca);
        const tagH6Precio = document.createElement("h6");
        tagH6Precio.innerText = "PRECIO: " + precio;
        tagRegistroEncontradoComprar.appendChild(tagH6Precio);
        //
        const tagLabelCantidad = document.createElement("label");
        tagLabelCantidad.setAttribute("for", "idCantidadPedida-"+ id);
        tagLabelCantidad.className = "labelGlobal";
        tagLabelCantidad.innerText = "Cantidad: ";
        tagRegistroEncontradoComprar.appendChild(tagLabelCantidad);
        //
        const tagInputCantidad = document.createElement("input");
        tagInputCantidad.id = "idCantidadPedida-"+ id;
        tagInputCantidad.className = "inputGlobal";
        tagInputCantidad.name = "cantidadPedida-"+ id;
        tagInputCantidad.type = "number";
        tagInputCantidad.min = 1;
        tagInputCantidad.max = 99;
        tagInputCantidad.defaultValue = 1;
        tagRegistroEncontradoComprar.appendChild(tagInputCantidad);
        //
        const tagRegistroEncontradoBoton = document.createElement("div");
        tagRegistroEncontradoBoton.id = "idRegistroEncontradoComprarBoton";
        tagRegistroEncontradoBoton.className = "registroEncontradoComprarBoton";
        //
        const tagBotonComprar = document.createElement("button");
        tagBotonComprar.id = "idBotonComprar";
        tagBotonComprar.className = "buttonGlobal";
        tagBotonComprar.innerText = "Comprar";
        tagBotonComprar.dataset.idArticulo = id;
        tagBotonComprar.dataset.cantidadArticulo = tagInputCantidad.value;
        tagBotonComprar.addEventListener("click",agregarAlCarrito);
        //tagBotonComprar.addEventListener("click", () => agregarAlCarrito(articulo,tagInputCantidad.value));
        tagRegistroEncontradoBoton.appendChild(tagBotonComprar);        
        //
        registro.appendChild(tagRegistroEncontradoComprar);
        registro.appendChild(tagRegistroEncontradoBoton);
        //
        tagDivArticulosEncontrados.appendChild(registro);
    });
  } else {
     if (articulosEncontrados.length == 0){
        //crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
        crearMensajeDialog({ tipo: "error", texto: "No se encontraron articulos con esos filtros"});
    } else {
        articulosEncontrados.forEach(({id,codigo,nombre,marca,categoria, precio}) => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado"; 
        //
        const tagRegistroEncontradoComprar = document.createElement("div");
        tagRegistroEncontradoComprar.id = "idRegistroEncontradoComprar";
        tagRegistroEncontradoComprar.className = "registroEncontradoComprar";
        //
        const tagH6Nombre = document.createElement("h6");
        tagH6Nombre.innerText = "NOMBRE: " + nombre.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Nombre);
        const tagH6Marca = document.createElement("h6");
        tagH6Marca.innerText = "MARCA: " + marca.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Marca);
        const tagH6Precio = document.createElement("h6");
        tagH6Precio.innerText = "PRECIO: " + precio;
        tagRegistroEncontradoComprar.appendChild(tagH6Precio);
        //
        const tagLabelCantidad = document.createElement("label");
        tagLabelCantidad.setAttribute("for", "idCantidadPedida-"+id);
        tagLabelCantidad.className = "labelGlobal";
        tagLabelCantidad.innerText = "Cantidad: ";
        tagRegistroEncontradoComprar.appendChild(tagLabelCantidad);
        //
        const tagInputCantidad = document.createElement("input");
        tagInputCantidad.id = "idCantidadPedida-"+id;
        tagInputCantidad.className = "inputGlobal";
        tagInputCantidad.name = "cantidadPedida-"+id;
        tagInputCantidad.type = "number";
        tagInputCantidad.min = 1;
        tagInputCantidad.max = 999;
        tagInputCantidad.defaultValue = 1;
        tagRegistroEncontradoComprar.appendChild(tagInputCantidad);
        //
        const tagRegistroEncontradoBoton = document.createElement("div");
        tagRegistroEncontradoBoton.id = "idRegistroEncontradoComprarBoton";
        tagRegistroEncontradoBoton.className = "registroEncontradoComprarBoton";
        //
        const tagBotonComprar = document.createElement("button");
        tagBotonComprar.id = "idBotonComprar";
        tagBotonComprar.className = "buttonGlobal";
        tagBotonComprar.innerText = "Comprar";
        //tagBotonComprar.addEventListener("click", () => agregarAlCarrito(articulo,tagInputCantidad.value));
        tagBotonComprar.dataset.idArticulo = id;
        //tagBotonComprar.dataset.cantidad = tagInputCantidad.value;
        tagBotonComprar.addEventListener("click",agregarAlCarrito);
        tagRegistroEncontradoBoton.appendChild(tagBotonComprar);        
        //
        registro.appendChild(tagRegistroEncontradoComprar);
        registro.appendChild(tagRegistroEncontradoBoton);
        //
        tagDivArticulosEncontrados.appendChild(registro);
      });
    };
  };
  //
  if (document.getElementById("idRegistrosEncontrados")){
      tagMain.replaceChild(tagDivArticulosEncontrados,document.getElementById("idRegistrosEncontrados"));
  } else {
    if (document.getElementById("idContenedorMostrarCarritoBotones")) {
         tagMain.insertBefore(tagDivArticulosEncontrados,document.getElementById("idContenedorMostrarCarritoBotones"));
    } else {
         tagMain.appendChild(tagDivArticulosEncontrados);
    }
  }; 
 //ternario 
 //(document.getElementById("idRegistrosEncontrados")) ? (tagMain.replaceChild(tagDivArticulosEncontrados,document.getElementById//("idRegistrosEncontrados"))) : (tagMain.appendChild(tagDivArticulosEncontrados));

 
  //
  //if (carritoCompras.length > 0){
  //console.log("en buscar - listaCarrito.length: " + listaCarrito.length)
};

