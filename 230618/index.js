let what_pict = document.querySelector('.what_pict');
let btn = document.querySelector('.btn');
function what_pict_method(){
    let elem = what_pict.value;
    let pict_elem = document.querySelector('.pict');
    pict_elem.src = what_pict.value;
    
    
}
btn.addEventListener('click', what_pict_method);