$( document ).ready(function() {
  setTimeout(function() {
    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
  }, 1000);
  
});

var showHide = "";

var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: true
};

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '.shattering_title svg *',
    stagger_val = 0.0125,
    duration = 0.75;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-500, 500),
    y: '+=' + getRandom(-500, 500),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

var stagger_opts_out = {
  x: 0,
  y: 0,
  opacity: 0,
  scale: 0,
  rotation: 0,
  ease: Power3.easeOut
};

var stagger_opts_in = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeOut
};



var $svg = $('svg');
$svg.hover(
  function() {
    tl.timeScale(0.15);
  },
  function() {
    tl.timeScale(1);
  });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


$(window).scroll(function (se) {
  var topOfWindow = $(window).scrollTop();
  var homeBannerHeight = $('#home-banner').height();
  // console.log(homeBannerHeight/7);
  var run_animation = false;

  if(showHide === ""){
    showHide = (topOfWindow > homeBannerHeight/7);
    run_animation = true;
  } else {
    if (showHide != (topOfWindow > homeBannerHeight/7)){
      showHide = (topOfWindow > homeBannerHeight/7);
      run_animation = true;
    }
  }

  // console.log(run_animation);

  if(run_animation === true){
    if (topOfWindow > homeBannerHeight/7) {
      tl.staggerTo(path, duration, stagger_opts_out, stagger_val);
    } else if(topOfWindow < homeBannerHeight/7){
      tl.staggerTo(path, duration, stagger_opts_in, stagger_val);
    }
  }
});