(function(window, document, undefined){

    window.onload=init;

    function init() {

        const bar=document.getElementById('bar');
        const close=document.getElementById('close');
        const nav=document.getElementById('navbar');

        const MainImg=document.getElementById("MainImg");
        const smallimg=document.getElementsByClassName("small-img");

        if (bar){
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            },false)
        }

        if (close){
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            }, false)
        }

       

        

        smallimg[0].addEventListener('click', () => {
            MainImg.src=smallimg[0].src;
        },false)
            
        
        smallimg[1].addEventListener('click', () => {
            MainImg.src=smallimg[1].src;
        },false)

        smallimg[2].addEventListener('click', () => {
            MainImg.src=smallimg[2].src;
        },false)

        smallimg[3].addEventListener('click', () => {
            MainImg.src=smallimg[3].src;
        },false)
    }
})(window, document, undefined);