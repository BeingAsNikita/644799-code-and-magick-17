'use strict';

(function() {
  var SEND_URL = 'https://js.dump.academy/code-and-magick';
  var GET_URL = 'https://js.dump.academy/code-and-magick/data';

  var sendData = function(data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('POST', SEND_URL);
    xhr.send(data);
  }

  var getData = function(onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
      if(xhr.status === 200) {
        onLoad(xhr.response)
      } else  {
        onError('Статус ответа' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', GET_URL);
    xhr.send();
  };

  window.backend = {
    save: sendData,
    load: getData
  }

})();
