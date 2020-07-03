$(document).ready(function () {
   $("#agregar").on("click",function(){
       validar();
   });
   $("form").on("submit",function(event){
        event.preventDefault();
   })
});
function mostrar(li_id){
    var container_id=li_id+"Container";
    $(`#${container_id}`).attr("hidden",false);
    $(".content > div").each(function(){
        //console.log($(this).attr("id"));
        if($(this).attr("id") != container_id) $(this).attr("hidden",true);
    });    
}
var pais;
function validar(){
    var validado=true;
    var nombre=$("#nombre").val();
    var apellido=$("#apellido").val();
    var pais=$("#pais option:selected").text();
    console.log(pais+"  "+ apellido+"  "+ nombre);
    if( nombre=="" || apellido=="" ) validado=false;
    if(validado) agregar(nombre,apellido,pais);
    else mostrarError();
}
function mostrarError(){
    alert("Debe completar los campos faltantes");
}
var html='';

function agregar(nombre,apellido,pais){
    html=
    `<tr>
       <td>${nombre}</td>
        <td>${apellido}</td>
       <td>${pais}</td>
     </tr>
    `;
    $("#tabla").append(html);
}
function mostrarHoja(id){
    var hoja_id=""+id;
    var html=`<img src="img/hojaParcial${id}.jpg" alt="">`
    $("#hojaContainer").html(html);
}