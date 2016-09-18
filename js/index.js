'use strict';

(function() {
  var params = new URLSearchParams(window.location.search);
  var viewer = document.querySelector('#viewer');
  viewer.setAttribute('src', params.get('url'));
}());
