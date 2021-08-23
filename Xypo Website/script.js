// const menuBtn = document.getElementById('menuBtn');
// const sideNav = document.getElementById('sideNav');

// sideNav.style.right = '-15rem';
// menuBtn.onclick = function(){
//     if(sideNav.style.right == '-15rem'){
//         sideNav.style.right = '0';
//     }
//     else {
//         sideNav.style.right = '-15rem'
//     }
// }

// const scroll = new SmoothScroll('a[href* ="#"]',{
//     speed : 9000,
//     speedAsDuration : true,
// })


const menuBtn = document.getElementById('menuBtn')
const sideNav = document.getElementById('sideNav')

sideNav.style.right = '-15rem';
menuBtn.onclick = function() {
    if(sideNav.style.right === '-15rem'){
        sideNav.style.right = '0'
    }
    else {
        sideNav.style.right = '-15rem'
    }
}

const scroll = new SmoothScroll(`a[href * = '#']`,{
    speed : 2000,
    speedAsDuration : true
})

