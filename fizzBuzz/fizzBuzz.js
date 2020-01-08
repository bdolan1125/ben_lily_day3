'use strict';

$(function fizzBuzz(num){
  for(let i = 0; i <= num; i++){
    if(num % 3 === 0 && num % 5 === 0){
      $('<div class="fizz-buzz-item fizzbuzz"> <span>fizzbuzz</span> </div>');
    }
    else if(num % 3 === 0){
      $('<div class="fizz-buzz-item fizz"> <span>fizz</span> </div>');
    }
    else if(num % 5 === 0){
      $('<div class="fizz-buzz-item buzz"> <span>buzz</span> </div>');
    }
    else {
      $('<div class="fizz-buzz-item"> <span> ${num} </span> </div>');
    }
  }
  
  $('form').on('click', '.button', (event) => {
    event.preventeDefault();
    let num = $(event.currentTarget).find('input').attr('type');
    fizzBuzz(num);
  });
});

// $('form').on('click', '.button', (event) => {
//   event.preventeDefault();
//   let num = $(event.currentTarget).find('input').attr('type');
//   fizzBuzz(num);
// })