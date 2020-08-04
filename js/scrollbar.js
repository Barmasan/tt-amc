

let scrollableBlock = document.querySelector('.scrollable');
let scrollbar = document.querySelector(".scrollbar");
let scrollbarThumb = document.querySelector(".scrollbar__thumb");

scrollbar.style.height = scrollableBlock.offsetHeight - 40 + 'px';


scrollableBlock.addEventListener('scroll', function() {
    var blockScroll = this.scrollTop;
    var height = this.offsetHeight;
    var scrolled = (blockScroll / height) * 107.1;
    scrollbarThumb.style.top = scrolled + "%";
});



// function scroll() {
//     console.log(1);
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementByClassName("scrollbar__thumb").style.top = scrolled + "%";
// }