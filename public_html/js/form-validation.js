/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $("#addprogram").validate({
        rules: {
            programtypeselect: {
                required: true
            },
            programname: {
                required: true,
                minlength: 4
            },
            capacity: {
                required: true,
                number: true
            },
            tabselect: {
                required: true,
            }
            
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
    });

});
