const accordionBody = document.getElementsByClassName("accordionBody");
const accordionBtnS = document.getElementsByClassName("accordion-Btn");
for(let i = 0; i < accordionBtnS.length ; i ++){
    accordionBtnS[i].addEventListener('click', function(){
        accordionBody[i].classList.toggle("show");
    })
}
document.getEl