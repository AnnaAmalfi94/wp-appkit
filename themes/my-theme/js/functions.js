define(['jquery','core/theme-app','core/theme-tpl-tags','core/modules/storage','theme/js/bootstrap.min','theme/js/auth/auth-pages','theme/js/auth/simple-login','theme/js/comments','theme/js/form-validator.min'],function($,App,TemplateTags,Storage){
   //Your functions.js content here, where :
   // - $ = jQuery
   // - the theme-app core module is accessed through "App"
   
   $(document).ready(function(){$("a.transition").click(function(event){event.preventDefault();linkLocation=this.href;$("body").fadeOut(500, redirectPage);});function redirectPage(){window.location=linkLocation;}});$(function(){$('#search').on('keyup', function(){var pattern=$(this).val(); $('.searchable-container .search-items').hide(); $('.searchable-container .search-items').filter(function(){return $(this).text().match(new RegExp(pattern, 'i'));}).show();});}); $("document").ready(function($){var nav=$('#nextprviewsoptions'); $(window).scroll(function (){if ($(this).scrollTop() > 2){nav.addClass("f-nav");}else{nav.removeClass("f-nav"); document.getElementById('nextprviewsoptions').style.Display='none';}});}); $(document).ready(function(){var overlay=$('.sidebar-overlay'); $('.sidebar-toggle').on('click', function(){var sidebar=$('#sidebar'); sidebar.toggleClass('open'); if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')){overlay.addClass('active');}else{overlay.removeClass('active');}}); overlay.on('click', function(){$(this).removeClass('active'); $('#sidebar').removeClass('open');});});$(document).ready(function(){var sidebar=$('#sidebar'); var sidebarHeader=$('#sidebar .sidebar-header'); var toggleButtons=$('.sidebar-toggle'); $('#sidebar-position').change(function(){var value=$( this ).val(); sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open'); if (value=='sidebar-fixed-left' || value=='sidebar-fixed-right'){$('.sidebar-overlay').addClass('active');}});});

$(document).ready(function () {
    $('.material-button-toggle').click(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});
   
 
 
 
 
 
 
 
 
 
 
 
 var $refresh_button = $( '#refresh-button' );

	/**
	 * Launch app contents refresh when clicking the refresh button :
	 */
	$refresh_button.click( function( e ) {
		e.preventDefault();
		
		App.refresh();
	} );

	/**
	 * Animate refresh button when the app starts refreshing
	 */
	App.on( 'refresh:start', function() {
		$refresh_button.addClass( 'refreshing' );
	} );

	/**
	 * When the app stops refreshing :
	 * - scroll to top
	 * - stop refresh button animation
	 * - display success or error message
	 *
	 * Callback param : result : object {
	 *		ok: boolean : true if refresh is successful,
	 *		message: string : empty if success, error message if refresh fails,
	 *		data: object : empty if success, error object if refresh fails :
	 *					   use result.data to get more info about the error
	 *					   if needed.
	 * }
	 */
	App.on( 'refresh:end', function( result ) {
		scrollTop();
		Storage.clear( 'scroll-pos' );
		$refresh_button.removeClass( 'refreshing' );
		if ( result.ok ) {
			$( '#provah' ).removeClass( 'error' ).html( 'Content updated successfully :)' ).slideDown();
		} else {
			$( '#provah' ).addClass( 'error' ).html( result.message ).slideDown();
		}
	} );

	/**
	 * When an error occurs, display it in the feedback box
	 */
	App.on( 'error', function( error ) {
		$( '#provah' ).addClass( 'error' ).html( error.message ).slideDown();
	} );

	/**
	 * Hide the feedback box when clicking anywhere in the body
	 */
	$( 'body' ).click( function( e ) {
		$( '#provah' ).slideUp();
	} );

	/**
	 * Back button 
	 */
	var $back_button = $( '#go-back' );
	
	//Show/Hide back button (in place of refresh button) according to current screen:
	App.on( 'screen:showed', function () {
		var display = App.getBackButtonDisplay();
		if ( display === 'show' ) {
			$refresh_button.hide();
			$back_button.show();
		} else if ( display === 'hide' ) {
			$back_button.hide();
			$refresh_button.show();
		}
	} );

	//Go to previous screen when clicking back button:
	$back_button.click( function ( e ) {
		e.preventDefault();
		App.navigateToPreviousScreen();
	} );
 
 
 
 
 
 
 
 
 
  $("div#hormenu li").click(function(){
	 $("#chicca, div#hormenu li ul").css({
		 "display": "block"
		  
	    
	  });


	});
 
 
 
 
 
 
 
 
 
 
 $("#chicca").click(function(){
	 $("#chicca, div#hormenu li ul").css({
		 "display": "none"
		  
	    
	  });


	});
 
 
 
 

 
 
 
 
 
 
 
 $("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "http://www.maurocangemi.com/prova/form-process.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
   
});