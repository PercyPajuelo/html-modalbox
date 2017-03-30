window.onresize = function() {
    var items = document.getElementsByClassName('modalBackground');
    if(items.length > 0){
        var divCanvas = items[0];
        if (divCanvas.style.display !== 'none'){
            middleAlign();
        }
    }
}
function closeModal(){
    toggleModal();
}
function showModal(){
    toggleModal();
}
function middleAlign(){
    var items = document.getElementsByClassName('modalShadow');
    if(items.length > 0){
        var divPopup = items[0];
        var myleft = (window.innerWidth - divPopup.offsetWidth) / 2;
        var mytop = (window.innerHeight - divPopup.offsetHeight) / 2;
        divPopup.style.left = myleft + 'px';
        divPopup.style.top = mytop + 'px';
    }
}
function toggleModal() {
    var items1 = document.getElementsByClassName('modalBackground');
    var items2 = document.getElementsByClassName('modalShadow');
    if(items1.length > 0 && items2.length > 0){
        var divCanvas = items1[0];
        var divPopup = items2[0];
        if (divCanvas.style.display === 'none'){
                divCanvas.style.display = 'block';
                divPopup.style.opacity = 0;
                divPopup.style.display = 'block';
                middleAlign();
                divPopup.style.opacity = 1;
        }
        else {
            divCanvas.style.display = 'none';
            divPopup.style.display = 'none';
        }
    }
}