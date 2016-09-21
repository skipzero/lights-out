/*global $, _ */
'use strict';

const game = {

  render: () => {
    const gameView = $('#game-template').html();
    let playBoard;

    $('.container').append(_.template(gameView, playBoard));
    game.lightInit();
    game.clicks();
  },

  clicks: () => {
    $('.container').on('click', '.light', () => {  //handle light click events
      const targetLight = $(this).data('light').split('-');

      $(this).toggleClass('on');
      game.connectedLights(targetLight);
      game.won();
    });

    $('#instructions').on('click', () => {  //hide/show instructions
      $('.instructions').toggleClass('instructions-hide instructions-show');
    });
  },

  lightInit: () => {  //randomly light between 10 and 16 lights at the start
    const maxStart = 17;
    const minStart = 4;
    const aMin = 0;
    const aMax = 5;
    const lStart = Math.floor(Math.random() * (maxStart - minStart)) + minStart;

    for (let k = 0; k <= lStart; k++) {
      let i = Math.floor(Math.random() * (aMax - aMin) + aMin);
      let j = Math.floor(Math.random() * (aMax - aMin) + aMin);
      let lightSelected = `${i}-${j}`;

      $(`.light[data-light="${lightSelected}"]`).addClass('on');
      game.connectedLights(lightSelected);
    }
  },

  won: function () {
    const yWon = 'Congratulations! You got all the lights out. click here to play again!';
    const ayWon = '<a id="replay" href="javascript:void(0)">Replay now</a>';

    if (!$('.light').hasClass('on')) {
      $('.instructions').html(yWon + ayWon);
      $('.instructions').toggleClass('instructions-hide instructions-show');
    }

    $('#replay').on('click', () => {
      game.render();
    });
  },

  board: () => {
    const size = 5;
    let playBoard = [];

    for (let i = 0; i < size; i++) {
      playBoard[i] = [];

      for (let j = 0; j < size; j++) {
        playBoard[i][j] = [];
      }
    }
    return playBoard;
  },

  connectedLights: (targetLight) => {
    const targetY = parseInt(targetLight[0]);
    const targetX = parseInt(targetLight[1]);
    const yTop = targetY - 1;
    const xLeft = targetX - 1;
    const yBottom = targetY + 1;
    const xRight = targetX + 1;

    $(`.light[data-light="${yTop}-${targetX}"]`).toggleClass('on');
    $(`.light[data-light="${yBottom}-${targetX}"]`).toggleClass('on');
    $(`.light[data-light="${targetY}-${xLeft}"]`).toggleClass('on');
    $(`.light[data-light="${targetY}-${xRight}"]`).toggleClass('on');
  }
};

window.Game = game.render();
