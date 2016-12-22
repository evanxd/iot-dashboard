'use strict';

(function() {
  var url = new Url(window.location.search);
  if (!url.query.urls) {
    alert('Cannot get url or urls param.');
    return;
  }

  var viewer = document.querySelector('#viewer');

  addMjpeg(url.query.urls);

  function addMjpeg(urls) {
    urls = Array.isArray(urls) ? urls : [urls];
    urls.forEach(function(url, i) {
      var img = document.createElement('img');
      img.setAttribute('id', 'mjpeg-' + (i + 1));
      img.setAttribute('src', url);
      viewer.appendChild(img);
    });
  }
}());
