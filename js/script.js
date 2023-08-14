let model= document.querySelector('.modal-parent')
let but = document.querySelector('button')
let sec= document.querySelector('#sec')
let x=document.querySelector('.X')
but.addEventListener('click', function(){
    model.style.display='block'
    sec.style.filter='blur(10px)'
    but.blur()
})
x.addEventListener('click', function(){
    model.style.display='none'
    sec.style.filter='blur(0px)'
})
document.body.addEventListener('keydown', function(event){
    console.log(event);
    if(event.code=='Space'){
        model.style.display='none'
        sec.style.filter='blur(0px)'
    }
})