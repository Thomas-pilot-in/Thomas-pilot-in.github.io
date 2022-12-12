  $(document).ready(function() {
        tableofcontent();
        
        $(document).on('click','div:not([class$="fullSummary"]) #summary .More',function(e) {
            e.preventDefault();
            if($(this).hasClass("Less"))
            {
                $('#summary li.HideMe').slideUp(600);
                $('#summary li').removeClass("ShowAll");
                $(this).removeClass("Less");  
                $(this).html("Voir la suite du sommaire...");                          
            }
            else 
            {
                $('#summary li.HideMe').slideDown(600);
                $('#summary li').addClass("ShowAll");                
                $(this).addClass("Less");      
                $(this).empty();                         
            }                
        }); 
    });

    function tableofcontent() {

        // On crée le sommaire tout en haut
        $('#summaryPlace').append('<div id="summary" class="summary"><ul class="level1"></ul></div>');

        var no = 0;
        var no2 = 0;
        var no3 = 0;
        var totAff = 10000;

        $("[id$='to_summary'].buildSummary *").each(function(useless, title) {

            if (title.tagName == "H2") {

                // numéro de title suivant
                no++;

                // On ajoute l'id au title, pour l'ancre
                $(title).parent().attr('id', 'title-' + no);
                
                var niveau_1 = ''
                niveau_1 += '<li class="" id="summary-' + no + '"' 
                niveau_1 += '>' + '<a class="smoothScroll" href="#title-' + no + '">' + $(title).text() + '</a>' + '</li>'
                // on met dans le sommaire
                $('#summary .level1').append(niveau_1);				 
                // sous title repart de 0
                no2 = 0;

            } else if (title.tagName == "H3") {

                // On crée une liste de sous-parties
                if (no2 == 0) {
                    $('#summary-' + no).append('<ul class="level2"></ul>');
                }

                // incrémentation du numéro de la sous partie
                no2++;

                // On ajoute l'id au sous-title, pour l'ancre
                $(title).attr('id', 'title-' + no + '-' + no2);

                // + le lien de l'ancre vers le sous-title
                $('#summary-' + no + ' ol').append(
				  '<li>'
				   + '<a href="#title-' + no + '-' + no2 + '">' + $(title).text() + '</a>'
				 + '</li>');

            } else if (title.tagName == "H4") {

                // On crée une liste de sous-parties
                if (no3 == 0) {
                    $('#summary-' + no).append('<ul class="level3"></ul>');
                }

                // incrémentation du numéro de la sous partie
                no3++;

                // On ajoute l'id au sous-title, pour l'ancre
                $(title).attr('id', 'title-' + no + '-' + no3);

                // + le lien de l'ancre vers le sous-title
                $('#summary-' + no + ' ol').append(
				  '<li>'
				   + '<a href="#title-' + no + '-' + no3 + '">' + $(title).text() + '</a>'
				 + '</li>');

            }
             if(! $(this).parents().hasClass("fullSummary"))
             {
                 if (no > totAff)
                {
                    $('#summary ul.level1').after('<a href="#" class="More">Voir la suite du sommaire...</a>')           
                }  
                else
                {
                    $('#summary li').addClass("ShowAll");
                }
                
                if (no < 3) { // il ne faut pas afficher le sommaire 
                    $('div.summary').hide();
                }
                else
                {
                    $('div.summary').show(); 
                }
            }            
        });
        if(no == 0)
        {
            $('#summaryPlace').html('');
        }

    }