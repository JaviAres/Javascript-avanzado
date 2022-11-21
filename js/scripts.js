
$('input[id=faccion1]').click(function(){
    alert("pille la clickada");
});

$("#crece").click(function(){
   /* $("#explicacion").animate({height :"1000px"});*/
    $("#explicacion").animate({height: "200px"})
    $("#imagen-bandera").style.display='block';
})

$("#decrece").click(function(){
    $("#explicacion").animate({height:"0px"});
    $("#imagen-bandera").style.display='none';
})