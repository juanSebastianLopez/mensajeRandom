var btn = document.querySelector('#btn');
var containerDescripcion = document.querySelector('.container__descripcion');
var id = document.querySelector('#id');
var img = document.querySelector('#img');
var mensaje = document.querySelector('#descripcion');


function dados(){
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => {
        var valor = data.slip.id;
        var descripcion = data.slip.advice;

        id.append(valor);        
        mensaje.append(descripcion);

        btn.addEventListener('click',(e)=>{
            img.classList.toggle('button-animation');
        })
    })
}
dados();

btn.addEventListener('click', (e)=>{
    
    const temporizador = setTimeout(()=>{
        $('#id').empty();
        $('#descripcion').empty();
        dados();
        img.classList.toggle('button-animation');
    },2000);
})