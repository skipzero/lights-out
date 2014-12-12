/*global require, $, _, console */
'use strict';

var game = {
    counter: 0,

    click: $('.container .row').on('click', 'div', function() {
        console.log($(this).css('background-color'))
        if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
            console.log('w00t!')
        }
    })
};

window.Game = game;
