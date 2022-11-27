window.addEventListener('DOMContentLoaded',personalizaPerfil);
function personalizaPerfil(){
    var datoString=localStorage.getItem('datoUsuario');
    var datosUsuario=JSON.parse(datoString);
    var h1=document.getElementById("nombre_usuario");
    var h2=document.getElementById("correo");
    var h3=document.getElementById("nombre_real");

    h1.textContent=datosUsuario.nombreusuario;
    h2.textContent=datosUsuario.correo;
    h3.textContent=datosUsuario.nombre+" "+datosUsuario.apellidos;

    if(datosUsuario.faccionelegida=="Twin Adders"){
        $("#faccion_elegida").append("<img src='../images/twinaddders.png' id='profile_adders'>");
    }else if(datosUsuario.faccionelegida=="The Immortal Flames"){
        $("#faccion_elegida").append("<img src='../images/immortalflames.png' id='profile_flames'>");
    }else{
        $("#faccion_elegida").append("<img src='../images/themaelstrom.png' id='profile_maelstrom'>");
    }

    if(datosUsuario.expansionelegida=="Endwalker"){
        $("#expansiones_compradas").empty();
        $("#expansiones_compradas").append("<img src='../images/heavensward.png'class='expansion' id='heavensward'><img src='../images/stormblood.png'class='expansion' id='stormblood'><img src='../images/shadowbringers.png' class='expansion'id='shadowbringers'><img src='../images/endwalker.png' class='expansion'id='endwalker'>")
    }else if(datosUsuario.expansionelegida=="Shadowbringers"){
        $("#expansiones_compradas").empty();
        $("#expansiones_compradas").append("<img src='../images/heavensward.png'class='expansion' id='heavensward'><img src='../images/stormblood.png'class='expansion' id='stormblood'><img src='../images/shadowbringers.png' class='expansion'id='shadowbringers'>")
    }else if(datosUsuario.expansionelegida=="Stormblood"){
        $("#expansiones_compradas").empty();
        $("#expansiones_compradas").append("<img src='../images/heavensward.png'class='expansion' id='heavensward'><img src='../images/stormblood.png'class='expansion' id='stormblood'>")
    }else if(datosUsuario.expansionelegida=="Heavensward"){
        $("#expansiones_compradas").empty();
        $("#expansiones_compradas").append("<img src='../images/heavensward.png'class='expansion' id='heavensward'>")
    }
}

document.getElementById("cambiador").addEventListener("change",function(){
    const lector=new FileReader();
    lector.addEventListener("load",()=>{
    localStorage.setItem("nueva-imagen",lector.result)
    })
    lector.readAsDataURL(this.files[0]);
})
document.addEventListener("DOMContentLoaded", ()=>{
    const urlImagen=localStorage.getItem("nueva-imagen")
    if(urlImagen){
        $("#imagen_perfil").empty();
        $("#imagen_perfil").append("<img src="+urlImagen+" id='imagen'>");
    }
})