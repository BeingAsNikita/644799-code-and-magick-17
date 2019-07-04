'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 130;
var CLOUD_Y = 250;
var BAR_WIDTH = 40;
var barHeight = 150;
var GAP = 50;
var FONT_GAP = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  return maxElement;
};

var getBarColor = function(playerName) {
  return (playerName === 'Вы') ? 'rgba(245, 0, 0, 1)' : 'rgba(8, 127, 207, ' + Math.random() + ')';
}

var renderSingleBar = function(ctx, name, time, index, max) {

  ctx.fillStyle = '#000';
  ctx.fillText(Math.floor(time), CLOUD_X + (BAR_WIDTH + GAP) * index, CLOUD_Y - FONT_GAP * 2 - ((barHeight * Math.floor(time))/max));
  ctx.fillText(name, CLOUD_X + (BAR_WIDTH + GAP) * index, CLOUD_Y + FONT_GAP);
  ctx.fillStyle = getBarColor(name);
  ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP) * index, CLOUD_Y - FONT_GAP, BAR_WIDTH, -((barHeight * time)/max));
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0,0,0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  var maxTime = Math.floor(getMaxElement(times));

  ctx.font = '16px PT Mono'
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);

  for (var i = 0; i < names.length; i++) {
    renderSingleBar(ctx, names[i], times[i], i, maxTime );
  }
};


