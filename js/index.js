'use strict';

(function() {
  var url = getURLParam('url');
  if (!url) {
    alert('Cannot get url param.');
    return;
  }

  var viewer = document.querySelector('#viewer');

  loadMjpeg();

  function loadMjpeg() {
    viewer.setAttribute('src', url);
    // Workaround to reload MJPEG stream when it's disconnected.
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.responseType = 'arraybuffer';
    ajax.onload = function() {
      setTimeout(loadMjpeg, 5000);
    };
    ajax.onerror = function() {
      setTimeout(loadMjpeg, 5000);
    };
    ajax.send();
  }
}());

function getURLParam(param) {
  var params = window.location.search.match(new RegExp('(?:[\?\&]' + param + '=)([^&]+)'));
  return params ? params[1] : null;
}
