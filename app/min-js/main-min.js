$(document).ready(function(){var o=$(".fa-angle-double-left"),a=$(".nav"),l=$(".nav__active"),t=$(".fa-arrow-up");o.on("click",function(){a.toggleClass("nav__active"),l.css({right:"0%"}),o.toggleClass("fa-angle-double-right")}),$(".nav").on("click","a",function(o){o.preventDefault();var a=$(this).attr("href"),l=$(a).offset().top;$("body,html").animate({scrollTop:l},1e3)}),$("body").scroll(function(){300<$("body").scrollTop()?t.fadeIn("slow").addClass("show"):t.fadeOut("slow").removeClass("show")}),t.on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},1300)})});