/*document.addEventListener('DOMContentLoaded', function(){
        const GalleryPlugin = function(rootelem, options = {}) {
            this.previewImgSelector = options.previewImgSelector ? options.previewImgSelector : '[data-my_gallery="preview_img"]'
            this.mainImgSelector = options.mainImgSelector ? options.mainImgSelector : '[data-my_gallery="main_img"]'
            let previewImgElems = rootelem.querySelectorAll(this.previewImgSelector);
        }
        let galleries = document.querySelector('[data-toogle="mygallery"]');
        for(let item of galleries) {
            let gallery = new GalleryPlugin(item);
        }
})
let elementList = document.querySelectorAll("list_element");
console.log(elementList);*/

document.addEventListener('DOMContentLoaded', function(){

let elementList = document.querySelectorAll('img.list_element_js')
let default_img = document.querySelector('img.active_js').src;
console.log(elementList);
let listImg = function(id, road) {
    this.id = id;
    this.road = road;
}
let arrayImg = []; 
for (let i = 0; i < elementList.length; i++ ) {
    arrayImg[i] = new listImg(i, elementList[i].src);
    function on () {   
        document.querySelector('img.active_js').src = this.road;
    };
    function off () {
        document.querySelector('img.active_js').src = default_img;
    };
    elementList[i].addEventListener('onmouseout', on());
    elementList[i].addEventListener('onmouseover', off());
}
console.log(document.querySelector('img.active_js').src);
})