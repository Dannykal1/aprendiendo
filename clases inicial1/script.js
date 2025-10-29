function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota") 
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}
function seleccionarMascotaJugador() {
    let mascotaJugador = document.getElementById("mascota-jugador")

    //alert("seleccionaste tu mascota")
    if(document.getElementById("hipodoge").checked){
        mascotaJugador.innerHTML = "Hipodoge"
    } else if (document.getElementById("capipepo").checked){
        mascotaJugador.innerHTML = "Capipepo"
    } else if (document.getElementById("ratigueya").checked){
        mascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("selecciona una mascota")
    }    
}        

window.addEventListener("load", iniciarJuego)