

/**
 * ouvrir une popup
 */
function ouvrir(url, largeur, hauteur) {
    var param = "width=" + largeur + ",height=" + hauteur + ",menubar=no,scrollbars=yes,resizable=yes,statusbar=yes,left="
        + String(Math.round(screen.width / 2) - Math.round(largeur / 2)) + ",top="
        + String(Math.round(screen.height / 2) - Math.round(hauteur / 2));
    popup = window.open(url, "popup", param);
    popup.focus();
    return popup;
}
   ddsmoothmenu.init({
         mainmenuid: "main_menu", //menu DIV id
         orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
         classname: 'ddsmoothmenu', //class added to menu's outer DIV
         //customtheme: ["#1c5a80", "#18374a"],
         contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
   })
   $(function(){
            $("[id$='form1']").attr('autocomplete', 'off');   
			$('nav#MenuMobile, nav#SearchMenu').mmenu({
				//slidingSubmenus: false
				configuration     : {
                      hardwareAcceleration : true,
                      selectedClass        : "Selected",
                      pageNodetype       : "form",
                      menuNodetype      : "nav",
                      slideDuration        : 500
                 }
			}); 
			$('nav#MenuMobile, nav#SearchMenu').on("open.mmenu",function(){
			    $(this).show();
			});
			$('nav#MenuMobile, nav#SearchMenu').on("close.mmenu",function(){
			    $(this).hide();
			});	
			//Masquer divs  vides
            $(".HideIfEmpty:empty").parent().remove();
            
            $(".HideIfEmpty").each(function() {
                if ($(this).html().trim() === "" || $(this).html() === '\n' || $(this).html() === '\r' || $(this).html() === '\r\n' || $(this).html() === '\n\r') { $(this).parent().remove() };
            });	 
            /*Cacher tous label vide */
            $("label.checkbox").each(function() {
                if ($(this).html().trim() === "" || $(this).html() === '\n' || $(this).html() === '\r' || $(this).html() === '\r\n' || $(this).html() === '\n\r') { $(this).remove() };
            });	
            $("body").on('click', '.printPage', function(){
                console.log("print");
                window.print();
            });
             $("body").on("click",".PrintTheDiv", function(e){
                e.preventDefault();
                
                var $printThis = $($(this).data("target"));
               //Get the HTML of div
                var divElements = $printThis.html();
                //Get the HTML of whole page
                var oldPage = document.body.innerHTML;

                //Reset the page's HTML with div's HTML only
                document.body.innerHTML = 
                  "<html><head><title></title></head><body><div id='main'><div id='conteneur'><div id='milieuPage'>" + 
                  divElements + "</div></div></div></body>";

                //Print Page
                window.print();
                
                setTimeout(
                  function() 
                  {
                        //Restore orignal HTML
                        document.body.innerHTML = oldPage;
                  }, 1000);
            });
                              
    });

(function($){
 	$.fn.extend({ 
        /***********
         * POPUP
         ***********/
 		popup: function(options) {
 		    
 		    var defaults = {
 		        width: 700,
 		        height: 500,
 		        name: 'popup'
 		    };
 		    
 		    var options = $.extend(defaults, options);
 		    
    		return this.each(function() {
			    
				var o = options;
			    
			    $(this).click(function() {
	                var popup = window.open(
	                    $(this).attr("href"),
	                    o.name,
	                    'width=' + o.width + ',height=' + o.height + ',scrollbars=yes,resizable=yes'
	                );
	                popup.focus();
	                return false;
	            });
    		});
    	}
    	,
        /***********
         * LIEN OUVRANT DANS OPENER DE LA POPUP
         ***********/
    	lienOpener: function(options) {
    	    		    
 		    var defaults = {
 		        autoclose: true
 		    };
 		    
 		    var options = $.extend(defaults, options);
    		return this.each(function() {
			    $(this).click(function() {
			        var w = window.opener;
			        while (w.opener) {
			            w = w.opener;
			        }
			        if (w) {
			            window.opener.location.href = $(this).attr("href");
			            window.opener.focus();
			            if (options.autoclose) {
			                window.close();
			            }
			            return false;
			        }
	            });
    		});

    	}
	});
})(jQuery);
