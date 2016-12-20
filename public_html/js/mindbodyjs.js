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


/*LESS*/
$(document).ready(function(){
    $(".lessbutton").click(function(){
        $(".more").hide(500);
        $(".morebutton").show(500);
        $(".lessbutton").hide(500);
    });
});

/*MORE*/
$(document).ready(function(){
    $(".morebutton").click(function(){
        $(".more").show(500);
        $(".lessbutton").show(500);
        $(".morebutton").hide(500);
    });
});

/*LESS*/
$(document).ready(function(){
    $(".lessbutton2").click(function(){
        $(".more2").hide(500);
        $(".morebutton2").show(500);
        $(".lessbutton2").hide(500);
    });
});

/*MORE*/
$(document).ready(function(){
    $(".morebutton2").click(function(){
        $(".more2").show(500);
        $(".lessbutton2").show(500);
        $(".morebutton2").hide(500);
    });
});

/*LESS*/
$(document).ready(function(){
    $(".lessbutton3").click(function(){
        $(".more3").hide(500);
        $(".morebutton3").show(500);
        $(".lessbutton3").hide(500);
    });
});

/*MORE*/
$(document).ready(function(){
    $(".morebutton3").click(function(){
        $(".more3").show(500);
        $(".lessbutton3").show(500);
        $(".morebutton3").hide(500);
    });
});