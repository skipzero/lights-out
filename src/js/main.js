/*global require, $, _, console */
'use strict';

var game = { 

    render: function() {
        var gameView = $('#game-template').html(),
            playBoard;
            
        $('.container').append(_.template(gameView, playBoard));
    },

    board: function () {
        var playBoard = [],
            size = 5;

        for (var i = 0; i < size; i++) {
            playBoard[i] = [];
            for (var j = 0; j < size; j++) {
                playBoard[i][j] = [];
            }
        }
        return playBoard;
    }, 

    game: function(){
        game.render();
        $('.container').on('click', '.light', function (){
            console.log($(this));
            $('this').toggleClass('on', 'off');
        });
    }
};

window.Game = game.game();