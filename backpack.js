
$(document).ready(function(){
  $(".forest-image").hover(function(){
    $(".forest-image").animate({top: '150px'});
  });
});

$(document).ready(function(){
  $(".forest-image").mouseleave(function(){
    $(".forest-image").animate({left: '150px'});
  });
});

$(document).ready(function(){
    $(".wave-image").hover(function(){
      $(".wave-image").animate({left: '350px'});
    });
  });
  
$(document).ready(function(){
  $(".wave-image").mouseleave(function(){
    $(".wave-image").animate({top: '250px'});
  });
});
  
$('.countfect').each(function(){var $this=$(this),countTo=$this.attr('data-num');$({countNum:$this.text()}).animate({countNum:countTo},{duration:8000,easing:'linear',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar_top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});