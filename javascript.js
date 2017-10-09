
function movesomthing() { 
    var paragragh = document.getElementById("paragragh1");
    paragragh.addEventListener("mouseover", function() {
        paragragh.style.cursor='grab';

    });

};
/////////////////////////////nav down jquery////////////////////////
 /* $(window).scroll(function() 
                {
                      if($(document).scrollTop() > 10)
                     {
                            $('#navscroll').addClass('scroll');
                         }
                        else 
                    {
                            $('#navscroll').removeClass('scroll');
                        }
                  });*/
///////////////////end jquery/////////////


///////////////nav down javascript //////////////////
function scroll() { 
window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('navscroll');
	var color1 =document.getElementsByClassName('a-scroll');
        if (document.documentElement.scrollTop >10) {
                nav.classList.add('scroll');
		for (var i = 0; i < color1.length; i++) {
		color1[i].classList.remove('linkcolor');
		color1[i].classList.add('scrolllink');
		}
		
               
            } else {
                nav.classList.remove('scroll');
		for (var i = 0;i <color1.length; i++) {
		color1[i].classList.remove('scrolllink');
		color1[i].classList.add('linkcolor');
		}
            }
    });
}
////////////////////////////end javascript//////////////////////////

$(document).ready(function(){
$('textarea').focusin(function(){
   $(this).attr('placeholder','');
});
$("textarea").focusout(function(){
    $(this).attr('placeholder', "Your Comment");
});

});



  var b;
$(document).ready(function(){
$('input').focusin(function(){
  var a= $(this).attr('placeholder');
  console.log(a);
   $(this).attr('placeholder','');
   b=a;
});

$('input').focusout(function(){
    $(this).attr('placeholder',b);
});

});
		



window.onload= function(){
movesomthing();
scroll();
};


              



