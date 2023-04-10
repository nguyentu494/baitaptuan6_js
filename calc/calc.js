var input=document.querySelector('.input')
var items=document.querySelectorAll('.item');
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0')
        input.innerHTML=''
        if(btn.innerHTML=='AC')
        input.innerHTML='0'
        else if(btn.innerHTML=='DEL'){
            var arrtex = Array.from(input.innerHTML)
            arrtex.splice(arrtex.length-1,1);
            if(arrtex.length!=0)
            input.innerHTML=arrtex.join('');
            else input.innerHTML='0';
        }
        else if(btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);
        }
        else input.innerHTML+=btn.innerHTML 
    })
})