/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
  $( function() {
    $( "#tabs" ).tabs();
  } );
  */

/* Business Overview Tab on load */
$(document).ready(function(){
  activaTab('businessoverview');
});

function activaTab(tab){
  $('.subnav a[href="#' + tab + '"]').tab('show').addClass('active');
};


/* have business overview show as ACTIVE upon load*/
$('.subnav a').click(function(){
    $('subnav a').removeClass('active');
    $(this).addClass('active');
});

/*Less*/
$(document).ready(function(){
    $(".lessbutton").click(function(){
        $(".more").hide(1000);
        $(".morebutton").show(1000);
        $(".lessbutton").hide(1000);
    });
});

/*More*/
$(document).ready(function(){
    $(".morebutton").click(function(){
        $(".more").show(1000);
        $(".lessbutton").show(1000);
        $(".morebutton").hide(1000);
    });
});


