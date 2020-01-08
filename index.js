
$( 'main').on( 'click', '.thumbnail', (event) => {
   event.preventDefault();
    let thumbSrc = $(event.currentTarget).find('img').attr('src');
    let thumbAlt =  $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('src', thumbSrc);
    $('.hero img').attr('alt', thumbAlt);
});