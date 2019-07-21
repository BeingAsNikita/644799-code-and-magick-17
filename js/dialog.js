'use strict';
(function() {

var setup = document.querySelector('.setup');
var dialogHandler = setup.querySelector('.upload');
var dialogCoords = {
  x: 50,
  y: 80
};

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };


  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    var dialogCoordsTop = setup.offsetTop - shift.y;
    var dialogCoordsLeft = setup.offsetLeft - shift.x;

    if (dialogCoordsTop < setup.offsetParent.offsetTop) {
      dialogCoordsTop = setup.offsetParent.offsetTop;
    }

    if (dialogCoordsTop > setup.offsetParent.offsetHeight) {
      dialogCoordsTop = setup.offsetParent.offsetHeight;
    }

    if (dialogCoordsLeft < setup.offsetParent.offsetLeft + setup.offsetWidth/2) {
      dialogCoordsLeft = setup.offsetParent.offsetLeft + setup.offsetWidth/2;
    }

    if (dialogCoordsLeft > setup.offsetParent.offsetWidth - setup.offsetWidth/2) {
      dialogCoordsLeft = setup.offsetParent.offsetWidth - setup.offsetWidth/2;
    }

    setup.style.top = dialogCoordsTop + 'px';
    setup.style.left = dialogCoordsLeft + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault)
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
})();
