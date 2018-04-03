 
$(document).ready(function(){
  
    $("#play").click(function(){
       /* when user clicks on playgroup img link */ 
       $("#plygroup").show();
       $("#nursery,#euroSenior,euroJunior").hide();
       
    }); 
    
    
   $("#nursery-pic").click(function(){
        /* when user clicks on nursery img link */
       $("#nursery").show();
       $("#plygroup,#euroSenior,#euroJunior").hide();
       
    });
    
    
    $("#eurojunor-pic").click(function(){
        /* when user clicks on eurojunior img link */
    
        $("#euroJunior").show();
        $("#plygroup,#nursery,#euroSenior").hide();
    
        
    });
    
    
     $("#eurosenior-pic").click(function(){
        /* when user clicks on eurosenior img link */
        $("#euroSenior").show();
        $("#euroJunior,#plygroup,#nursery").hide();
       
        
    });
    
});

/* NEXTGEN INNOVATIONS */
$(document).ready(function(){
   
    /* pic no1 speak */       
  $("#speak").click(function(){
    $(".nextgen-innovation-main").show(); 
/*
      $('body:not(.nextgen-innovation-main)').css("filter", "blur(3px)");
*/
      
      $(".cross").click(function(){
    $(".nextgen-innovation-main").hide();/* to close the div */ 
  });
  });

    /* pic no2 motion*/    
  $("#motion").click(function(){
    $(".nextgen-innovation-main-motion").show(); 
      
     $(".cross").click(function(){
    $(".nextgen-innovation-main-motion").hide();/* to close the div */ 
  });  
  });
    
/* pic no3 learn to play*/    
  $("#learn2").click(function(){
    $(".nextgen-innovation-main-play").show(); 
      
     $(".cross").click(function(){
    $(".nextgen-innovation-main-play").hide();/* to close the div */ 
  });  
  });
    
/* pic no4 gym */    
  $("#egym").click(function(){
    $(".nextgen-innovation-main-eurogym").show(); 
      
     $(".cross").click(function(){
    $(".nextgen-innovation-main-eurogym").hide();/* to close the div */ 
  });  
  });
  
/* pic no4 wellness */    
  $("#wellness").click(function(){
    $(".nextgen-innovation-main-wellness").show();
      
     $(".cross").click(function(){
    $(".nextgen-innovation-main-wellness").hide();/* to close the div */ 
  });  
  }); 
    
/* pic no4 euromusic */    
  $("#e-music").click(function(){
    $(".nextgen-innovation-main-music").show(); 
      
     $(".cross").click(function(){
    $(".nextgen-innovation-main-music").hide();/* to close the div */ 
  });  
  }); 
    
});/* documen.ready*/
/* NEXTGEN INNOVATIONS ENDS */

/*======================= Buddy's world on click show====================  */

$(document).ready(function(){
$("#tour").click(function(){
$("#buddy-w-vdo").show(); 

$(".cross-me").click(function(){
 $("#buddy-w-vdo").hide();    
});
});
  
/* video no 2 in buddys world */
    
$("#aday").click(function(){
$("#buddy-w-vdo2").show(); 

$(".cross-me").click(function(){
 $("#buddy-w-vdo2").hide();    
});
});
    
/* video no 3 in buddys world */
    
$("#fun-day").click(function(){
$("#buddy-w-scroll").show(); 

$(".cross-me").click(function(){
 $("#buddy-w-scroll").hide();    
});
});
});/* end of document */













