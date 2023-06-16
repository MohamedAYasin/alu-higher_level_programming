#!/usr/bin/node
$('div#toggle_header').click(() => {
    $('header').toggleClass('red green');
});
