function cargarArticulo(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  console.log("0010----------------------");
  console.log(listaPrecioArticulos.length);
  console.log(listaPrecioArticulos);
  const id = listaPrecioArticulos.length + 1;
  const codigo = document.getElementById("idCrearArticuloCodigo").value;--idCrearArticuloCodigo
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
  const articuloNuevo = new Articulo(id, 
                                     codigo.toUpperCase(), 
                                     nombre.toUpperCase(), 
                                     marca.toUpperCase(), 
                                     categoria.toUpperCase(), 
                                     parseFloat(precio));
  lista.push(articuloNuevo);
  localStorage.setItem("listaPrecioArticulos", JSON.stringify(lista));
  crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
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
        
     const articulosDescuento = lista.map(articulo => {
     //const articulosDescuento = listaPrecioArticulos.map(articulo => {
        let precioDescuento = articulo.precio - (articulo.precio * (valorDescuento/100));
        return {
            id: articulo.id,
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            marca: articulo.marca,
            categoria: articulo.categoria,
            precio: precioDescuento
        };
    });
     articulosDescuento.forEach(articulo => {
        const registro = document.createElement("tr");        
        registro.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.codigo.toUpperCase()}</td>
            <td>${articulo.nombre.toUpperCase()}</td>
            <td>${articulo.marca.toUpperCase()}</td>
            <td>${articulo.categoria.toUpperCase()}</td>
            <td>$${articulo.precio*0.10}</td>
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
    });
    listadoTabla.appendChild(listadoTablaThead);
    listadoTabla.appendChild(tagTablaListadoTbody);
  }
};

function eliminarArticuloLista(e){
  e.preventDefault();
  const idArticulo = e.target.dataset.id;
  const idDivregistrosEncontrados = e.target.dataset.idRegistrosEncontrados;
  const lista = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  //const indice = listaPrecioArticulos.findIndex((articulo) => articulo.id == idArticulo);
  const indice = lista.findIndex((articulo) => articulo.id == idArticulo);
  if (indice !== -1) {
     //listaPrecioArticulos.splice(indice, 1);
     lista.splice(indice, 1);
  };
  const contenedor = document.getElementById(idDivregistrosEncontrados);
  for (const registro of contenedor.children) {
     const boton = registro.querySelector(".buttonGlobal");
     if (boton && boton.dataset.id === idArticulo) {
       registro.remove(); 
       break; 
     };
  };
  
  localStorage.setItem("listaPrecioArticulos", JSON.stringify(lista));
  crearMensajeDialog("exito", "Se elimino el articulo de la lista de precios");
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
     articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
  };
  //
  if (articulosEncontrados.length == 0) {
    if (categoriaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
       );
    };
  } else  {
    if (categoriaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
      );
    };
  };
  //
  if (articulosEncontrados.length == 0) {
    if (marcaBuscar.length > 0){
       articulosEncontrados = listaPrecioArticulos.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
  } else  {
    if(marcaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
    };
  };
  //
  if (esString(idBuscar) && categoriaBuscar.length == 0 && marcaBuscar == 0){
      //listaPrecioArticulos.forEach(articulo => {
      lista.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
        `;        
        //tagDivArticulosEncontrados.appendChild(registro);

        const tagDivContenedorBotonEliminarArticuloLista = document.createElement("div");
        tagDivContenedorBotonEliminarArticuloLista.id = "idContenedorBotonEliminarArticuloLista";
        tagDivContenedorBotonEliminarArticuloLista.className = "contenedorBotonEliminarArticuloLista";

        const tagDivBotonEliminarArticuloLista = document.createElement("button");
        tagDivBotonEliminarArticuloLista.id = "idBotonEliminarArticuloLista";
        tagDivBotonEliminarArticuloLista.className = "buttonGlobal";
        tagDivBotonEliminarArticuloLista.innerText = "Eliminar";
        tagDivBotonEliminarArticuloLista.dataset.id = articulo.id;
        tagDivBotonEliminarArticuloLista.dataset.idRegistrosEncontrados = "idRegistrosEncontrados";
        tagDivBotonEliminarArticuloLista.addEventListener("click",eliminarArticuloLista);


        tagDivContenedorBotonEliminarArticuloLista.appendChild(tagDivBotonEliminarArticuloLista);
        registro.appendChild(tagDivContenedorBotonEliminarArticuloLista);
        tagDivArticulosEncontrados.appendChild(registro);


      });
  } else {
     if (articulosEncontrados.length == 0){
        crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
     } else {
        articulosEncontrados.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
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
        tagDivBotonEliminarArticuloLista.dataset.id = articulo.id;
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
     articulosEncontrados = [
        {          
          id: articuloEncontrado.id,
          codigo: articuloEncontrado.codigo,
          nombre: articuloEncontrado.nombre,
          marca: articuloEncontrado.marca,
          categoria: articuloEncontrado.categoria,
          precio: articuloEncontrado.precio
        }
      ];
   };
   //
   if (codigo.length == 0){
      //
      //listaPrecioArticulos.forEach(articulo => {
      lista.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado";    
        registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
        `;        
        tagDivArticulosEncontrados.appendChild(registro);
      });
      //
      tagDivContenedorResultadoVerificar.appendChild(tagDivArticulosEncontrados);
      tagMain.appendChild(tagDivContenedorResultadoVerificar);
   } else {
      //
      if (articulosEncontrados.length == 0) {
         crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
      } else {
         articulosEncontrados.forEach(articulo => {
         const registro = document.createElement("div");    
         registro.id = "idRegistroEncontrado";
         registro.className = "registroEncontrado";    
         registro.innerHTML = `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
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
  const idArticulo = e.target.dataset.id;
  const idDivRegistrosEncontrados = e.target.dataset.idRegistrosEncontrados;
  //const indice = carritoCompras.findIndex((articulo) => articulo.id == idArticulo);
  const indice = lista.findIndex((articulo) => articulo.id == idArticulo);
  if (indice !== -1) {
     //carritoCompras.splice(indice, 1);
     lista.splice(indice, 1);
  };
  const contenedor = document.getElementById(idDivRegistrosEncontrados);
  for (const registro of contenedor.children) {
     const boton = registro.querySelector(".buttonGlobal");
     if (boton && boton.dataset.id === idArticulo) {
       registro.remove(); 
       break; 
     };
  };  
  localStorage.setItem("carritoCompras", JSON.stringify(lista));
  crearMensajeDialog("exito", "Se elimino el articulo del carrito");
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
  lista.forEach( articulo =>{ 
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontradoCarrito";
        registro.className = "registroEncontradoCarrito";    
        registro.innerHTML = `
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CANIDAD: ${articulo.cantidad}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
            <h6>TOTAL: $${articulo.precio*articulo.cantidad}</h6>
        `;        
        totalCarrito += articulo.precio*articulo.cantidad;
        tagContenedorRegistroEncontradoCarrito.appendChild(registro);
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
        tagContenedorRegistroEncontradoCarrito.appendChild(registro);
//////////////////////////////////////



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
  if (document.getElementById("idContenedorVerCarrito")) {
     tagMain.replaceChild(tagDivContenedorVerCarrito,document.getElementById("idContenedorVerCarrito"));
  } else {
     tagMain.appendChild(tagDivContenedorVerCarrito);
  };
};

function ocultarCarrito(e){
  e.preventDefault();
  //
  if (document.getElementById("idContenedorVerCarrito")){
     document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
  };
};

function vaciarCarrito(e){
  e.preventDefault();
  const lista = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  //
  if (document.getElementById("idContenedorVerCarrito")){
     document.getElementById("idMain").removeChild(document.getElementById("idContenedorVerCarrito"));
  };
  //
  //if (carritoCompras.length > 0) {
  if (lista.length > 0) {
     //carritoCompras.splice(0,carritoCompras.length);
     lista.splice(0,lista.length);
  };
  localStorage.setItem("carritoCompras", JSON.stringify(lista));
  crearMensajeDialog("exito", "El carrito de compras esta vacio ahora");
};

function agregarAlCarrito(articulo, cantidad){
  articulo.cantidad = cantidad;
  lista = JSON.parse(localStorage.getItem("carritoCompras")) || [];
  //
  //if (carritoCompras.some(articuloCC => articuloCC.id == articulo.id)){
  if (lista.some(articuloCC => articuloCC.id == articulo.id)){
    //
    
  crearMensajeDialog("error", "Ya existe en el carrito");
  } else {
    //.push(articulo);
    lista.push(articulo);
    const registro = document.createElement("div");    
    registro.id = "idRegistroEncontradoCarrito";
    registro.className = "registroEncontradoCarrito";    
    registro.innerHTML = `
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CANIDAD: ${articulo.cantidad}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>
            <h6>TOTAL: $${articulo.precio*articulo.cantidad}</h6>
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
       const totalCarrito = lista.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
       //
       if(document.getElementById("idVerCarritoTotalP")){
         document.getElementById("idVerCarritoTotalP").innerText = "Total del carrito: " + totalCarrito;
       };
    };
  localStorage.setItem("carritoCompras", JSON.stringify(lista));  
  crearMensajeDialog("exito", "Se agrego articulo al carrito");
  };
  //
  //if (carritoCompras.length > 0){
  if (lista.length > 0){
    //
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
    if (document.getElementById("idContenedorMostrarCarritoBotones")){
       tagMain.replaceChild(tagDivContenedorMostrarCarritoBotones,document.getElementById("idContenedorMostrarCarritoBotones"));
    } else {
       tagMain.appendChild(tagDivContenedorMostrarCarritoBotones);
    };
  };
  
};

function crearFormularioComprar(e){
  e.preventDefault();
  const listaPrecios = JSON.parse(localStorage.getItem("listaPrecioArticulos")) || [];
  console.log("lista precios")
  console.log(listaPrecios)
  //const listaCarrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];
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
  if (categoriaBuscar.length > 0){
     //articulosEncontrados = listaPrecioArticulos.filter(
     articulosEncontrados = listaPrecios.filter(
         articulo => articulo.categoria.toUpperCase() == categoriaBuscar.toUpperCase()
     );
  };

  if (articulosEncontrados.length == 0) {
    if (marcaBuscar.length > 0){
       //articulosEncontrados = listaPrecioArticulos.filter(
       articulosEncontrados = listaPrecios.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())
       );
    };
  } else  {
     if (marcaBuscar.length > 0) {
      articulosEncontrados = articulosEncontrados.filter(
         articulo => articulo.marca.toUpperCase().includes(marcaBuscar.toUpperCase())         
      );
    };
  };
  //
  if (categoriaBuscar.length == 0 && marcaBuscar == 0){
     //listaPrecioArticulos.forEach(articulo => {
     listaPrecios.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado"; 
        //
        const tagRegistroEncontradoComprar = document.createElement("div");
        tagRegistroEncontradoComprar.id = "idRegistroEncontradoComprar";
        tagRegistroEncontradoComprar.className = "registroEncontradoComprar";
        //
        const tagH6Nombre = document.createElement("h6");
        tagH6Nombre.innerText = "NOMBRE: " + articulo.nombre.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Nombre);
        const tagH6Marca = document.createElement("h6");
        tagH6Marca.innerText = "MARCA: " + articulo.marca.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Marca);
        const tagH6Precio = document.createElement("h6");
        tagH6Precio.innerText = "PRECIO: " + articulo.precio;
        tagRegistroEncontradoComprar.appendChild(tagH6Precio);
        //
        const tagLabelCantidad = document.createElement("label");
        tagLabelCantidad.setAttribute("for", "idListarArticulosDescuento");
        tagLabelCantidad.className = "labelGlobal";
        tagLabelCantidad.innerText = "Cantidad: ";
        tagRegistroEncontradoComprar.appendChild(tagLabelCantidad);
        //
        const tagInputCantidad = document.createElement("input");
        tagInputCantidad.id = "idListarArticulosDescuento";
        tagInputCantidad.className = "inputGlobal";
        tagInputCantidad.name = "listarArticulosDescuento";
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
        tagBotonComprar.addEventListener("click", () => agregarAlCarrito(articulo,tagInputCantidad.value));
        tagRegistroEncontradoBoton.appendChild(tagBotonComprar);        
        //
        registro.appendChild(tagRegistroEncontradoComprar);
        registro.appendChild(tagRegistroEncontradoBoton);
        //
        tagDivArticulosEncontrados.appendChild(registro);
    });
  } else {
     if (articulosEncontrados.length == 0){
        crearMensajeDialog("error", "No se encontraron articulos con esos filtros");
    } else {
        articulosEncontrados.forEach(articulo => {
        const registro = document.createElement("div");    
        registro.id = "idRegistroEncontrado";
        registro.className = "registroEncontrado"; 
        //
        const tagRegistroEncontradoComprar = document.createElement("div");
        tagRegistroEncontradoComprar.id = "idRegistroEncontradoComprar";
        tagRegistroEncontradoComprar.className = "registroEncontradoComprar";
        //
        const tagH6Nombre = document.createElement("h6");
        tagH6Nombre.innerText = "NOMBRE: " + articulo.nombre.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Nombre);
        const tagH6Marca = document.createElement("h6");
        tagH6Marca.innerText = "MARCA: " + articulo.marca.toUpperCase();
        tagRegistroEncontradoComprar.appendChild(tagH6Marca);
        const tagH6Precio = document.createElement("h6");
        tagH6Precio.innerText = "PRECIO: " + articulo.precio;
        tagRegistroEncontradoComprar.appendChild(tagH6Precio);
        //
        const tagLabelCantidad = document.createElement("label");
        tagLabelCantidad.setAttribute("for", "idListarArticulosDescuento");
        tagLabelCantidad.className = "labelGlobal";
        tagLabelCantidad.innerText = "Cantidad: ";
        tagRegistroEncontradoComprar.appendChild(tagLabelCantidad);
        //
        const tagInputCantidad = document.createElement("input");
        tagInputCantidad.id = "idListarArticulosDescuento";
        tagInputCantidad.className = "inputGlobal";
        tagInputCantidad.name = "listarArticulosDescuento";
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
        tagBotonComprar.addEventListener("click", () => agregarAlCarrito(articulo,tagInputCantidad.value));
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
    tagMain.appendChild(tagDivArticulosEncontrados);
  };   
};

