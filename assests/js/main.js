
  $(document).ready(function() {
    $("button").addClass("animated shake");

  });

  $(window).on('resize', function() {
  'use strict';
  var element	= document.querySelector('#banner'),
      elHeight = 0,
      elTop = 0,
      dHeight	= 0,
      wHeight	= 0,
      wScrollCurrent = 0,
      wScrollBefore	= 0,
      wScrollDiff	= 0; 
      window.addEventListener('scroll', function () {
