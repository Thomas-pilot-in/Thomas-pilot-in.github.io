
(function( $, undef )
{
  $.fn.extend({
      paginate : function(){
          return this.each(function() {
            var $self = $(this);
            var target = $self.data("target");                
            var listElement = $('#'+target);
            var perPage = 1; 
            var numItems = listElement.children().size();
            var numPages = Math.ceil(numItems/perPage);

            $self.data("curr",0);

            var curr = 0;
            while(numPages > curr){
              $('<li><a href="./#" class="page_link">'+(curr+1)+'</a></li>').appendTo($self);
              curr++;
            }           

            $self.find('.page_link:first').parent().addClass('active');

            listElement.children().css('display', 'none');
            listElement.children().slice(0, perPage).css('display', 'block');
            if ($self.children().length == 1)
            {
                $self.hide()
            }  
            $self.find('li a').click(function(){
              var clickedPage = $(this).html().valueOf() - 1;
              var page = clickedPage;
              var startAt = page * perPage;
              var endOn = startAt + perPage;
              listElement.children().css('display','none').slice(startAt, endOn).css('display','block');
              $self.attr("curr",page);
              $self.find('.active').removeClass('active')
              $(this).parent().addClass('active');
            
            });
          });
      }
  });
})( jQuery );