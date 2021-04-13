/* ** Btn More-Less ** */
$("#more").click(function(){
    var $this = $(this);
    $this.toggleClass('more');
    if($this.hasClass('more')){
        $this.text('More');         
    } else {
        $this.text('Less');
    }
});




/* ** Slideanim  ** */
 $(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
