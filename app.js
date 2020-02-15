let modalTop = document.getElementById('modal-top');
let modalRight = document.getElementById('modal-right');
let modalLeft = document.getElementById('modal-left');
let modalBottom = document.getElementById('modal-bottom');
let modalCenter = document.getElementById('modal-center');
let modalButtomLeft = document.getElementById('modal-bottom-left');





modalTop.addEventListener('click', function(){
    document.querySelector('#top-modal').style.display='flex';
})

modalRight.addEventListener('click', function(){
    document.querySelector('#right-modal').style.display='flex';
})
modalLeft.addEventListener('click', function(){
    document.querySelector('#left-modal').style.display='flex';
})

modalBottom.addEventListener('click', function(){
    document.querySelector('#bottom-modal').style.display='flex';
})
modalCenter.addEventListener('click', function(){
    document.querySelector('#center-modal').style.display='flex';
})
modalButtomLeft.addEventListener('click', function(){
    document.querySelector('#bottom-left-modal').style.display='flex';
})