'use strict';
(function() {

var dialogHandler = window.setup.querySelector('.upload');
var dialogCoords = {
  x: 50,
  y: 80
};
window.dialogCoords = dialogCoords;

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
      y: moveEvt.clien
    };

    var dialogCoordsTop = window.setup.offsetTop - shift.y;
    var dialogCoordsLeft = window.setup.offsetLeft - shift.x;

    if (dialogCoordsTop < window.setup.offsetParent.offsetTop) {
      dialogCoordsTop = window.setup.offsetParent.offsetTop;
    }

    if (dialogCoordsTop > window.setup.offsetParent.offsetHeight) {
      dialogCoordsTop = window.setup.offsetParent.offsetHeight;
    }

    if (dialogCoordsLeft < window.setup.offsetParent.offsetLeft + window.setup.offsetWidth/2) {
      dialogCoordsLeft = window.setup.offsetParent.offsetLeft + window.setup.offsetWidth/2;
    }

    if (dialogCoordsLeft > window.setup.offsetParent.offsetWidth - window.setup.offsetWidth/2) {
      dialogCoordsLeft = window.setup.offsetParent.offsetWidth - window.setup.offsetWidth/2;
    }

    window.setup.style.top = dialogCoordsTop + 'px';
    window.setup.style.left = dialogCoordsLeft + 'px';
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
