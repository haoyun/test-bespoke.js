// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');


// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  nav(),
  scale('zoom'),
  bullets('.build, .fragment, .build-items > *:not(.build-items)'),
  hash(),
  prism(),
  multimedia(),
  extern(bespoke)
]);


// customization


var container = $('article.bespoke-parent');
var slides = $('section.bespoke-slide');
var thm_env = ['theorem', 'corollary', 'definition']

import Typed from 'typed.js';

var typed = new typed('.element', {
  stringsElement: '#typed-strings'
});

// add ghost-divs
slides.filter(':not(#title-slide)').each(function(){
    $(this).append('<div class="ghost-div"></div>');
});

// reset zoom scale 
// this only works for bespoke-scale with option `zoom`,
// rather than `transform` -- the latter seems do not work well

slides.each(function(i){
    var old_scale = $(this)[0].style.zoom;
    $(this)[0].style.zoom = (old_scale === "" ? 0.96 : old_scale * 0.96);
});

// theorem environments
thm_env.forEach(function(element) {
  var env = $('.'+element);
  env.each(function(){
    var credit = $(this).attr("data-credit");
    var tagname = element;
    if (credit === undefined) {
        $(this).prepend('<h4>' + tagname + '</h4>');
    } else {
        $(this).prepend('<h4>' + tagname + ' (' + credit + ')</h4>');
    };
  });
});