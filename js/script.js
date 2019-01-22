var scrol=false; //прокрутки нет
var down=false; //находимся вверху


$(window).on('scroll', function(e){
    if(!scrol){ //прокручиваем
        scrol=true;
        $(".navbar-header").animate({marginTop:0,
                                    marginBottom:0},300);
         $(".navbar-right li").animate({marginTop:0,
                                       marginBottom:0},300);
        
    }
    else if(scrol && $(".navbar-default").offset().top==0){ //вернулись наверх
         scrol=false;
        if(window.innerWidth>1024){
            $(".navbar-header").animate({marginTop:20,
                                     marginBottom:20},300);
        $(".navbar-right li").animate({marginTop:15,
                                      marginBottom:15},300);
        }
        
    }
    
   if(!down && $(window).scrollTop()>500){ //прокрутили ниже 500
        down=true;
        $(".ontop").animate({"bottom":"30px"},300);
              
    }
    
    else if($(window).scrollTop()<300){ //вернулись наверх
        if ($(".ontop").css("bottom")=="30px"){
             down=false;
        $(".ontop").animate({"bottom":"-100px"},300); 
   }}
   
    
});