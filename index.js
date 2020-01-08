
$( 'main').on( 'click', '.thumbnail img', (event) => {
   event.preventDefault();
    let thumbSrc = $(event.currentTarget).attr('src');
    $('.hero img').attr('src', thumbSrc);
    let thumbAlt =  $(event.currentTarget).attr('alt');
    $('.hero img').attr('alt', thumbAlt);
    $('hero img').attr('src', thumbSrc);
    $('hero img').attr('alt', thumbAlt);
});