//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add Item" button
$('form').submit(event => {
    event.preventDefault();
    $('ul').append(`<li>
    <span class="shopping-item">${event.Target}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
})


$(".shopping-item-toggle").click(event => {
    $("li .shopping-item").toggleClass("shopping-item shopping-item__checked")
})


//permanently remove items from the list
//remove an li from ul "shopping list"