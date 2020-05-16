$(function() {

  $('#menu-show').click(function(){
    var $menu = $('.header-menu-list');
    if($menu.hasClass('open')){
      $menu.removeClass('open');
      $menu.slideUp();

    }else{
      $menu.addClass('open');
        $menu.slideDown();
      }
});

  $('#menu-close').click(function(){
    var $menu = $('.header-menu-list');
    if($menu.hasClass('open')){
      $menu.removeClass('open');
      $menu.slideUp();
    }

  });






// ページ内スクロール
$('.header-menu-list a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop':position
  },'slow');
})

// バックグラウンドスライド
// $(window).load(function() {
//     $('.slider').bgSwitcher({
//        images: ['img/coffee1.jpg', 'top-background.jpg', 'img/cafelatte.jpg'],
//        interval: 5000,
//        effect: "fade"
//    });
// });




// メニューアコーディオン
  $('.originals-list-item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();

        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('+');

      } else {
        $answer.addClass('open');
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();

        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('-');

      }
    });

// 画像スライド
function toggleChangeBtn(){
  var slideIndex = $('.slide').index($('.active'));
  $('.change-btn').show();
  if(slideIndex == 0){
    $('.prev-btn').hide();
  }else if(slideIndex == $('.slide').length - 1){
    $('.next-btn').hide();
  }
}

 $('.index-btn').click(function(){
   $('.active').removeClass('active');
   var clickedIndex = $('.index-btn').index($(this));
   $('.slide').eq(clickedIndex).addClass('active');
     $('.text').eq(clickedIndex).addClass('active');
   toggleChangeBtn();
 });


  $('.change-btn').click(function(){
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();

  });

  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop' : 0
    },'slow');
  })


});
