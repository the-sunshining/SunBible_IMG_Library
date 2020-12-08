$(document).ready(function(){

        $('.img').click(function(){
            $('a > img').each(function () {
                var $this = $(this);
                $this.parent('a').attr('href', $this.attr('src'));
            });
        });
    
    
        
        });