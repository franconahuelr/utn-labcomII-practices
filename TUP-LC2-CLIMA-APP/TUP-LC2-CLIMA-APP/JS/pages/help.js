function validar(event){
    event.preventDefault();
    
    var valEmail = document.getElementById('form-email').value;
    var valName = document.getElementById('form-name').value
    var valMnj = document.getElementById('form-mnj').value
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
    
    // validacion para mostrar el envio exitoso
    if (regex.test(valEmail) && valName !='' && valMnj !='' ) {
        alerta.classList.remove('error');
        alerta.classList.add('valido');
        alerta.innerText= "Mensaje Enviado Existosamente";
        console.log(alerta);
        return false;
    }
    // validacion para motrar el error en el email
    else if (!regex.test(valEmail)){
        alerta.classList.remove('valido');
        alerta.classList.add('error');
        alerta.innerText = "Error: Email invalido"
        console.log(alerta);
    }
    // validacion para los campos name y mnj 
    else if (valName == '' || valMnj == ''){
        alerta.classList.remove('valido');
        alerta.classList.add('error');
        alerta.innerText = "Error: Complete los campos"
        console.log(alerta);
    }
}
// funcion para limpiar
function limpiar(){
    location.reload();
}


