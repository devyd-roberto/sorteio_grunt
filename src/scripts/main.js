document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-math').addEventListener('submit', function(evento){
        evento.preventDefault();    

        let numeroMaximo = document.getElementById('numero-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo)+1;
        
        

        document.getElementById ('value-result').innerText = numeroAleatorio;
        document.querySelector ('.result').style.display='block';
    });
});