/*global require, $, _, console */
'use strict';

var game = { 

    render: function() {
        var gameView = $('#game-template').html(),
            playBoard;

        $('.container').append(_.template(gameView, playBoard));
        game.lightInit();
    },

    lightInit: function(){  //randomly light between 10 and 15 lights at the start
        var maxStart = 20, 
            minStart = 4,
            aMin = 0,
            aMax = 5,
            i,
            lightSelected,
            j,
            lStart = Math.floor(Math.random() * (maxStart - minStart)) + minStart;
            if (lStart % 2 === 1) {
                lStart = lStart + 1; // must be even in order for puzzle to be solved, I believe. 
            }
        console.log(lStart);
        for (var k = 0; k <= lStart; k++) {
            i = Math.floor(Math.random() * (aMax - aMin) + aMin);
            j = Math.floor(Math.random() * (aMax - aMin) + aMin);
            lightSelected = i+'-'+j;
            $('.light[data-light="'+lightSelected+'"]').addClass('on');
        }  
    },

    won: function () {
        if (!$('.light').hasClass('on')) {
            $('.instructions').toggleClass('hide show');
        }
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

    connectedLights: function(targetLight) {

        var targetY = parseFloat(targetLight[0]), 
            targetX = parseFloat(targetLight[1]),
            yTop = targetY - 1,
            xLeft = targetX - 1,
            yBottom = targetY + 1,
            xRight = targetX + 1;

            $('.light[data-light="'+yTop+'-'+targetX+'"]').toggleClass('on');
            $('.light[data-light="'+yBottom+'-'+targetX+'"]').toggleClass('on');
            $('.light[data-light="'+targetY+'-'+xLeft+'"]').toggleClass('on');
            $('.light[data-light="'+targetY+'-'+xRight+'"]').toggleClass('on');
    },

    game: function(){
        game.render();
        $('.container').on('click', '.light', function (){
            var targetLight = $(this).data('light').split('-');
            $(this).toggleClass('on');
            game.connectedLights(targetLight);
            game.won();
        });

        $('#instructions').on('click', function() {
            $('.instructions').toggleClass('instructions-hide instructions-show');
        });
    }
};

window.Game = game.game();
