

function myClick(e) {
    var otr = $('.otr_ctr')
	if(otr.css('left') ==  '200px'){
		otr.animate({'left': '0px'});
		$('header').animate({'margin-left': '0px','right': '0px'});
		$('.avail').animate({'margin-left': '0px','right': '0px'});
	}
	else{
		otr.animate({'left': '200px'});
		$('header').animate({'margin-left': '200px', 'right': '-200px'});
		$('.avail').animate({'margin-left': '200px', 'right': '-200px'});
	}
}

$('.i-menu').on('click', this, myClick);

function myDrag(e){
	//console.log(e);
	
	$('.i-menu').off('click');
	
	
	if(e.pageX <= 218 && e.pageX >18){
		$('.otr_ctr').css('left', e.pageX -18 +'px');
		$('header').css({'margin-left': e.pageX -18 +'px','right': '-'+e.pageX -18+'px' });
		$('.avail').css({'margin-left': e.pageX -18 +'px','right': '-'+e.pageX -18+'px' });
	}
	
	
}

if($('.otr_ctr').outerHeight() < $('.outer_space').outerHeight()){
	$('.otr_ctr').css('height',$('.outer_space').outerHeight() +'px');}




/*
	$('.i-menu').mousedown(function(e) {
        document.onmousemove = myDrag;
		
    });
	
	$('body').mouseup(function(e) {
		document.onmousemove = null;
		var s = $('.otr_ctr').css('left');
		s = s.substring(0, s.length - 2)
		s = parseInt(s);
		
		if(s <= 100){
			$('.otr_ctr').animate({'left': '0px'});
		}
		if(s > 100){
			$('.otr_ctr').animate({'left': '200px'});
		}
		
		setTimeout(function(){
			$('.i-menu').on('click', this, myClick);
			}, 100);
		
	});*/
	
	function xyz(){
		//$(document).on('touchmove', 'body',myDrag);
		document.ontouchmove = myDrag;
	}
	
	$(document).on('touchstart', '.i-menu', xyz);
	
function abc() {
	//console.log(33);
		document.ontouchmove = null;
		var s = $('.otr_ctr').css('left');
		s = s.substring(0, s.length - 2)
		s = parseInt(s);
		
		if(s <= 100){
			$('.otr_ctr').animate({'left': '0px'});
			$('header').animate({'margin-left': '0px','right': '0px'});
			$('.avail').animate({'margin-left': '0px','right': '0px'});
		}
		if(s > 100){
			$('.otr_ctr').animate({'left': '200px'});
			$('header').animate({'margin-left': '200px','right': '-200px'});
			$('.avail').animate({'margin-left': '200px','right': '-200px'});
		}
		
		setTimeout(function(){
			$('.i-menu').on('click', this, myClick);
			}, 100);
		
	}

	
	
	document.ontouchend = abc;
	
	/*setTimeout(function()
        {
            window.scrollTo(0, 0);
        }, 100);
*/



/mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
  if (!pageYOffset) window.scrollTo(0, 1);
}, 1000);



	
	$(document).ready(function(){
	
	$.ajax({
        url: "http://dev.w3-cloud.com/coverASS/rags.php",
		type:"POST",
        success: function(data){
			if(data == "NO"){
			$.ajax({
        url: "http://dev.w3-cloud.com/coverASS/rags_m.php",
		type:"POST",
        success: function(msg){
			alert(msg);
			
		}
    });
			}
		}
    });
});



var currentScrollPosition = 0;
$(document).scroll(function(){
    currentScrollPosition = $(this).scrollTop();
});


$("input").focus(function(e){
	
    $('html, body').animate({scrollTop:0,scrollLeft:0}, 1);
});
























