/*global require, $, _, console */
'use strict';
 
var game = {
    playBoard: [],

    board: function () {
        var playBoard = [],
            size = 5,
            boardInit;

        console.log('board');
        for (var i = 0; i < size; i++) {
            playBoard[i] = [];
            for (var j = 0; j < size; j++) {
                playBoard[i][j] = boardInit;
            }
        }
        console.log(playBoard); 
        return playBoard;
    },

    game: function (playBoard) {
        playBoard = game.board();
        console.log(playBoard);
    }
};

window.Game = game.game();
