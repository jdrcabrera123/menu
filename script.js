const menu__toggle = document.querySelector(".menu__toggle");
const navigaton = document.querySelector(".navigation");

menu__toggle.onclick= function(){
    navigaton.classList.toggle('open')
   
}


const list = document.querySelectorAll('.list');

function linkActivated(){
    list.forEach((item)=>{
        item.classList.remove('active');
        this.classList.add('active')
    })
} 
list.forEach((item)=>{
    item.addEventListener('click',linkActivated)
})