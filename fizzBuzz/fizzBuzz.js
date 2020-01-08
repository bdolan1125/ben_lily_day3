'use strict';

$(function fizzBuzz(num){
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"> <span>fizzbuzz</span> </div>');
    }
    else if(i % 3 === 0){
      $('.js-results').append('<div class="fizz-buzz-item fizz"> <span>fizz</span> </div>');
    }
    else if(i % 5 === 0){
      $('.js-results').append('<div class="fizz-buzz-item buzz"> <span>buzz</span> </div>');
    }
    else {
      $('.js-results').append(`<div class="fizz-buzz-item"> <span> ${i} </span> </div>`);
    }
  }
  
  $('form').on('submit', (event) => {
    event.preventDefault();
    let num = $(event.currentTarget).find('input').val();
    fizzBuzz(num);
  });
});
