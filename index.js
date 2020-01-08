
$( 'main').on( 'click', '.thumbnail', (event) => {
   event.preventDefault();
   console.log(event.currentTarget)
    let thumbSrc = $(event.currentTarget).attr('src');
    let thumbAlt =  $(event.currentTarget).attr('alt');
   // const targetCat = $(event.currentTarget);
    //const otherCat = $('thumbnail').not(targetCat);
    //const pressedBool = $(targetCat).attr('aria-pressed') === 'true';
    $('.hero img').attr('src', thumbSrc);
    $('.hero img').attr('alt', thumbAlt);
    //$('hero img').attr('src', thumbSrc).attr('aria-pressed', false);
   // $('hero img').attr('alt', thumbAlt).attr('aria-pressed', false);
    
});