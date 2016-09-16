/*global $, require, _, console */
'use strict';

var game = { 

    render: function() {
        var gameView = $('#game-template').html(),
            playBoard;

        $('.container').append(_.template(gameView, playBoard));
        game.lightInit();
        game.clicks();
    },

    clicks: function() {
        $('.container').on('click', '.light', function (){  //handle light click events
            var targetLight = $(this).data('light').split('-');
            $(this).toggleClass('on');
            game.connectedLights(targetLight);
            game.won();
        });

        $('#instructions').on('click', function() {  //hide/show instructions
            $('.instructions').toggleClass('instructions-hide instructions-show');
        });
    },

    lightInit: function(){  //randomly light between 10 and 16 lights at the start
        var maxStart = 17, 
            minStart = 4,
            aMin = 0,
            aMax = 5,
            i,
            lightSelected,
            j,
            lStart = Math.floor(Math.random() * (maxStart - minStart)) + minStart;

        for (var k = 0; k <= lStart; k++) {
            i = Math.floor(Math.random() * (aMax - aMin) + aMin);
            j = Math.floor(Math.random() * (aMax - aMin) + aMin);
            lightSelected = i+'-'+j;
            $('.light[data-light="'+lightSelected+'"]').addClass('on');
        }
        game.connectedLights(lightSelected);
    },

    won: function () {
        var yWon = 'Congratulations! You got all the lights out. click here to play again!',
            ayWon = '<a id="replay" href="javascript:void(0)">Replay now</a>';
        if (!$('.light').hasClass('on')) { 
            $('.instructions').html(yWon + ayWon);
            $('.instructions').toggleClass('instructions-hide instructions-show');
        }
        $('#replay').on('click', function() {
            game.render();
        });

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
        var targetY = parseInt(targetLight[0]), 
            targetX = parseInt(targetLight[1]),
            yTop = targetY - 1,
            xLeft = targetX - 1,
            yBottom = targetY + 1,
            xRight = targetX + 1;

            $('.light[data-light="'+yTop+'-'+targetX+'"]').toggleClass('on');
            $('.light[data-light="'+yBottom+'-'+targetX+'"]').toggleClass('on');
            $('.light[data-light="'+targetY+'-'+xLeft+'"]').toggleClass('on');
            $('.light[data-light="'+targetY+'-'+xRight+'"]').toggleClass('on');
    }
};

window.Game = game.render();
