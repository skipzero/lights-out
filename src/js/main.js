/*global require, $, _, console */
'use strict';

var game = {
    counter: 0,

    arr: console.log($('.row').toArray()),

    random: function() {

    },

    click: $('.container .row').on('click', 'div', function() {
        console.log($(this).css('background-color'))
        if ($(this).css('background-color') === 'rgb(255, 255, 255)') {
            $(this).css('background-color', '#0f0')
        } else {
            $(this).css('background-color', '#fff')
        }
    })
};

window.Game = game;
