#!/usr/bin/node
$('div#add_item').click(() => {
    $('ul.my_list').append('<li>Item</li>');
});
