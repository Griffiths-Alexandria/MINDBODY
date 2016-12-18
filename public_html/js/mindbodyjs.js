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
 
$(document).ready(function(){
  activaTab('businessoverview');
});

function activaTab(tab){
  $('.subnav a[href="#' + tab + '"]').tab('show');
};

