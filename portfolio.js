// レーダーチャート
// var data = {
//   labels: ["HTML / CSS", "JavaScript / jQuery", "PHP", "WordPress","SEO","Design",],
//   datasets: [
//   {
//     label: "My First dataset",
//     fillColor: "rgba(220,220,220,0.2)",
//     strokeColor: "rgba(127, 255, 212,1)",
//     pointColor: "rgba(220,220,220,1)",
//     pointStrokeColor: "#fff",
//     pointHighlightFill: "#fff",
//     pointHighlightStroke: "rgba(220,220,220,1)",
//     data: [80, 40, 30, 40, 40, 80,]
//   },
// ]
// };  
// var myChart = new Chart(document.getElementById("mycanvas").getContext("2d")).Radar(data);

// ナビゲーション

(function($){
  
  $(".menu-icon").on("click", function(){
        $(this).toggleClass("open");
        $("header").toggleClass("nav-open");
        $("nav ul li").toggleClass("animate");
  });
  
})(jQuery);

// $(function() {
//   var menu = $('#nav'),
//   offset = menu.offset();
//   $(window).scroll(function () {
//     if($(window).scrollTop() > offset.top) {
//       menu.addClass('fixed');
//     } else {
//       menu.removeClass('fixed');
//     }
//   });
// });

// ナビゲーション-responsive-
// (function($) {
//   var $nav   = $('#navArea');
//   var $btn   = $('.toggle_btn');
//   var $mask  = $('#mask');
  // var open   = 'open'; 

  // menu open close
//   $btn.on( 'click', function() {
//     if ( ! $nav.hasClass( open ) ) {
//       $nav.addClass( open );
//     } else {
//       $nav.removeClass( open );
//     }
//   });

//   $mask.on('click', function() {
//     $nav.removeClass( open );
//   });
// } )(jQuery);

// 背景グラデーション
window.addEventListener( "scroll" ,function(){
  let scroll = window.pageYOffset;
  if( scroll > 4000 ){ 
    document.body.style.backgroundColor = '#FFAD90';
  }else if( scroll > 3400 ){
    document.body.style.backgroundColor = '#EAD9FF';
  }else if( scroll > 2400 ){
    document.body.style.backgroundColor = '#FFFF99';
  }else if( scroll > 1300 ){
    document.body.style.backgroundColor = '#9BF9CC';
  }else if( scroll > 500 ){
    document.body.style.backgroundColor = '#AAFFFF';
  }else{
    document.body.style.backgroundColor = '#EEFFFF';
  }
});

// コンタクトフォーム
(function(){
  $('html').addClass('js');
  var contactForm = {
    container: $('#contact'),
    config: {
      effect: 'slideToggle',
      speed: 200
    },
    init: function(config){
      $.extend(this.config, config);
      $('#c-btn').on('click', this.show);
    },
    show: function(){
      var cf = contactForm,
          container = cf.container,
          config = cf.config;
      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },
    close: function(){
      var $this = $('#contact'); 
      if($this.find('span.close').length) return;
      $('<span class=close>-</span>')
        .prependTo(this)
        .on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };
contactForm.init({
  effect: 'fadeToggle',
  speed: 200
});
})();

// チャート
$(document).ready(function() {
  function skillSet() {
    
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  
  setTimeout(skillSet, 3000);
});


