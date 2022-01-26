import {prvniPokus} from './localStorage.js';

'use strict';

//Show how many good answers in a card you have
let counter = 0;
let scoreField = document.querySelectorAll('.scoreField');
let iconField = document.querySelectorAll('.iconField');

const nextSlide = document.querySelectorAll('.carousel-control-next');
const prevSlide = document.querySelectorAll('.carousel-control-prev');

let slidesArray = [];
slidesArray = [...prevSlide, ...nextSlide]

for (let slide of slidesArray){
   slide.addEventListener('click', function(){
      
      for (let score2 of scoreField) {
         counter = 0;
         score2.innerText = counter + "/3";
      }

      
      for( let score3 of iconField){
         for(let score4 of score3.children){
            score4.classList.add('hidden')
         }
      }
      /*
      for( let score3 of iconField.children){
        score3.classList.add('hidden')
         
         score3.children[0].classList.add('hidden')
         score3.children[1].classList.add('hidden')
         score3.children[2].classList.add('hidden')
      }*/
   })
}

//For all INPUTS, mark the correct answer by a green INPUT border and the wrong one by red border

let check = document.querySelectorAll('.input_Text')
check.forEach(element => element.addEventListener('input',(e)=>{
   var data = element.getAttribute('data-verb').toString();
   var value = e.target.value;
   
   
   if (value == ""){
    element.style.border = "1px solid blue";
    element.style.color = "black";
   }

   else if (data === value){
      element.style.border = "4mm ridge rgba(0,181,47,0.9)";
     
      // Show icon whe answer is true& add counter +1
      e.target.readOnly = true;
       counter = counter +1;

         /*
            for( let score4 of iconField){
               console.log(score4);
               score4.classList.remove('hidden')
            }*/
//
//Druhá verze loopu:
//

   /*
      for (let i2=0; i2 < iconField.length; i2++) {
         if(counter == 1){
            iconField[i2].firstElementChild.classList.remove('hidden');
         } else if( counter == 2 ){
            iconField[i2].children[1].classList.remove('hidden');
         } else if (counter == 3 ){
            iconField[i2].lastElementChild.classList.remove('hidden');
         }else{}*/
            
   }

   }

   else if (data.startsWith(value)){
     element.style.color = "green";
   }
   
   else{
      element.style.border = "5px solid red";
      element.style.color = "red";  
   }

   for (let i=0; i < scoreField.length; i++) {
      scoreField[i].innerText = counter + "/3";
   }
   

})); 


   

prvniPokus()


  



//Show phrasal Verbs

const buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
const asnwerPhrasal = document.querySelectorAll('.answerPhrasal');

buttonPhrasal.forEach((item) => {
   item.addEventListener('click', (e) => {
      item.nextElementSibling.classList.toggle('hidden')
   })
})




  
