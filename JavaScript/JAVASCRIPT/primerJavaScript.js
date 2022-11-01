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