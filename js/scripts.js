
var DNI_REGEX=/^(\d{8})([A-Z])$/;
var EMAIL_REGEX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
var TLF_REGEX=/(6)[ -]*([0-9][ -]*){8}$/;
var TARJETA_REGEX=/^4[0-9]{12}(?:[0-9]{3})?$/;
var CVV_REGEX=/^[0-9]{3,4}$/;
var NAME_REGEX = /^[a-z A-Z]{4,30}$/;
var USER_REGEX = /^[a-z A-Z]{4,120}$/;
$('input[id=faccion2]').click(function(){    
    $("#explicacion").empty();
    $("#explicacion").animate({height: "400px"});
    $("#explicacion").append(" <img id='maelstrom' src='../images/themaelstrom.png'><p>At the heart of the Thalassocratic Navy lies the Crimson Fleet, composed of five independent squadrons,the First through the Fifth. The Maelstrom is an extension of the First Squadron, expanding its role as armada flagship and granting it power to administer not only the remaining four squadrons, but the various merchant fleets that navigate the seas off Vylbrand. With the reestablishment of the Maelstrom, the Admiral has invoked ancient maritime law, by which she promoted herself to Chief Admiral, effectively expanding her authority to cover not only state and military dealings, but grant her the power to directly command all ships in Lominsan waters. While adverse to this encroachment on their independence, the city-state's pirates are willing to put aside their differences, lest the Garlean Empire take more than just their freedom.</p>")
}) 

$('input[id=faccion1]').click(function(){    
   $("#explicacion").empty(); 
   $("#explicacion").animate({height: "400px"});
   $("#explicacion").append(" <img id='twinadder' src='../images/twinaddders.png'><p>The Order of the Twin Adder establishes a medium from which the Seedseers can return from their wanderings deep within the Black Shroud and directly oversee not only the safety of Gridania's citizens, but the workings of the local guard. Both the Gods' Quiver, who defend the forest from external threats, and the Wood Wailers, who protect it from internal strife, have expressed their support of this temporary measure. Although they have proven their aptitude for handling political affairs in light of Calamity and events that followed, there are still those within Gridania who would question the Seedseers' ability to lead a nation into war.</p>")
}) 

$('input[id=faccion3]').click(function(){    
    $("#explicacion").empty(); 
    $("#explicacion").animate({height: "400px"});
    $("#explicacion").append(" <img id='immortalflames' src='../images/immortalflames.png'><p>Currently, the bulk of Ul'dah's military strength comes from their standing army of mercenaries and the now dwindling contingent of palace guards known as the Sultansworn. To bring order to their ranks and oversee additional wartime training, the sultana has resurrected the Immortal Flames—an elite force of battle-hardened veterans that once instilled fear in the city-state's neighboring nations during ages past. This unit would act as a core aspect of the army, essentially bolstering its power, and in effect grant more authority to the sultana and her advisers—something of which those in control of the city-state's economy—namely the Syndicate—are wary.</p>")
 }) 

$("#erase").click(function(){
    $("#explicacion").empty(); 
    $("#explicacion").animate({height: "0px"});
})

document.getElementById("Correo").addEventListener("keyup", validaCorreo);
function validaCorreo() {
  var x = document.getElementById("Correo");
 if(!x.value.match(EMAIL_REGEX)){
    $("#error_correo").empty();
    $("#error_correo").append("<p id='errores'>Introduzca un correo válido.</p>")
 }else{
    $("#error_correo").empty();
    $("#error_correo").append("<img src='images/valido.png' id='valido'>")
 }
}
document.getElementById("Telefono").addEventListener("keyup", validaTLF);
function validaTLF() {
  var x = document.getElementById("Telefono");
 if(!x.value.match(TLF_REGEX)){
    $("#error_telefono").empty();
    $("#error_telefono").append("<p id='errores'>Introduzca un numero de telefono válido</p>");
 }else{
    $("#error_telefono").empty();
    $("#error_telefono").append("<img src='images/valido.png' id='valido'>");
 }
}
document.getElementById("DNI").addEventListener("keyup", validaDNI);
function validaDNI() {
  var x = document.getElementById("DNI");
 if(!x.value.match(DNI_REGEX)){
    $("#error_DNI").empty();
    $("#error_DNI").append("<p id='errores'>Introduzca un DNI validos</p>");
 }else{
    $("#error_DNI").empty();
    $("#error_DNI").append("<img src='images/valido.png' id='valido'>");
 }
}
document.getElementById("tarjeta").addEventListener("keyup", validaTarjeta);
function validaTarjeta() {
  var x = document.getElementById("tarjeta");
 if(!x.value.match(TARJETA_REGEX)){
    $("#error_tarjeta").empty();
    $("#error_tarjeta").append("<p id='errores'>Introduzca un numero de tarjeta correcto.</p>")
 }else{
    $("#error_tarjeta").empty();
    $("#error_tarjeta").append("<img src='images/valido.png' id='valido'>")
 }
}
document.getElementById("cvv").addEventListener("keyup", validaCVV);
function validaCVV() {
  var x = document.getElementById("cvv");
 if(!x.value.match(CVV_REGEX)){
    $("#error_cvv").empty();
    $("#error_cvv").append("<p id='errores'>Introduzca un cvv valido.</p>")
 }else{
    $("#error_cvv").empty();
    $("#error_cvv").append("<img src='images/valido.png' id='valido'>")
 }
}
function checkInput(idInput, pattern) {
   var input=$(idInput).val();
	return input.match(pattern) ? true : false;
}
function checkRadioBox(nameRadioBox) {
  return $(nameRadioBox).is(":checked") ? true : false;
}
function enableSubmit (idForm) {
	$(idForm + " button#enviar").removeAttr("disabled");
}
function disableSubmit (idForm) {
	$(idForm + " button#enviar").attr("disabled", "disabled");
}

$(function() {
	checkForm("#formulario_FF14");
});

function checkForm (idForm) {
	$(idForm + "*").on("change keyup", function() {
		if (checkInput("#Nombre", NAME_REGEX) && 
			checkInput("#Apellidos", NAME_REGEX) && 
         checkInput("#Correo", EMAIL_REGEX) && 
			checkInput("#Usuario", USER_REGEX) && 
         checkInput("#Telefono", TLF_REGEX) && 
			checkInput("#DNI", DNI_REGEX) && 
         checkInput("#cvv", CVV_REGEX) && 
			checkInput("#tarjeta", TARJETA_REGEX) && 
         checkRadioBox("[name=faccion]") &&
         checkRadioBox("[name=expansion]"))
		{
			enableSubmit(idForm);
		} else {
			disableSubmit(idForm);
		}
	});
}
function radioFaccion(){
   var ele = document.getElementsByName('faccion');
   for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
         var faccion=ele[i].value;
         
      }}
      return faccion;
}

function radioExpansion(){
      
      var ele2 = document.getElementsByName('expansion');
      for(i = 0; i < ele2.length; i++) {
         if(ele2[i].checked){
            var expansion=ele2[i].value;
         }}
         return expansion;
}
document.getElementById("enviar").addEventListener("click",guardarUsuario)
function guardarUsuario(){
   var nombre=document.getElementById("Nombre").value;
   var apellidos=document.getElementById("Apellidos").value;
   var nombreusuario=document.getElementById("Usuario").value;
   var correo=document.getElementById("Correo").value;
   var telefono=document.getElementById("Telefono").value;
   var dni=document.getElementById("DNI").value;
   var tarjeta=document.getElementById("tarjeta").value;
   var cvv=document.getElementById("cvv").value;
   var faccion=radioFaccion();
   var expansion=radioExpansion();
   var usuario={'nombre': nombre,'apellidos':apellidos ,'nombreusuario':nombreusuario ,'correo':correo,'telefono':telefono,
   'dni':dni,'tarjeta':tarjeta,'cvv':cvv,'faccionelegida' : faccion, 'expansionelegida' : expansion}

   var datoUsuario=JSON.stringify(usuario);
   localStorage.setItem("datoUsuario",datoUsuario);
}


