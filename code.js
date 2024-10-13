let iscoder = true
let linkdesigner = document.querySelector('.Designer')
let linkcoder = document.querySelector('.Coder')
let block = document.querySelector('.cont')
block.addEventListener('click',function(){
    iscoder = !iscoder
    if(iscoder){
        linkdesigner.className = 'Designer'
        linkcoder.className = 'Coder Active'
    }
    else{
        linkdesigner.className = 'Designer Active'
        linkcoder.className = 'Coder'
    }
})