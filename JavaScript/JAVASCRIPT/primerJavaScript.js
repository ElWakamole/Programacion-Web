//alert("Alerta en archivo externo javascript");
function funcionAlerta(){
    alert("di clic");
}
function quitarSITEC(){
    let pregunta = confirm("Seguro de quitar SITEC?");
    if(pregunta == true){
        alert("SITEC Borrado....");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiiaaaale GG EZ";
    }
}
async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos.results[0].name.last+" "+datos.results[0].name.first);
}