

// Menu Items 




const MenuItems = document.getElementById('MenuItems')

MenuItems.style.maxHeight = '0px'

function menuToggle(){
    if(MenuItems.style.maxHeight === '0px'){
        MenuItems.style.maxHeight = '200px'
    }
    else {
        MenuItems.style.maxHeight = '0px'
    }
}






// JS for Products Gallery


const productImg = document.getElementById('productImg')
const smallImg = document.getElementsByClassName('details__small--img')

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src 
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src
}





// // Login or Register 


// var LoginForm = document.getElementById('LoginForm');
// var RegForm = document.getElementById('RegForm');
// var Indicator = document.getElementById('Indicator');


// function register() {
//     RegForm.style.transform = 'translateX(0px)';
//     LoginForm.style.transform = 'translateX(0px)';
//     Indicator.style.transform = 'translateX(100px)';
// }

// function login() {
//     RegForm.style.transform = 'translateX(300px)';
//     LoginForm.style.transform = 'translateX(300px)';
//     Indicator.style.transform = 'translateX(0px)';
// }






