'use strict';

(function() {
  var params = new URLSearchParams(window.location.search);
  var url = params.get('url');
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
