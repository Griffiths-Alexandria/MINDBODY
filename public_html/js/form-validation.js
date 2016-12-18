/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    $("#addprogram").formValidation({
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
        messages: {
            programname: {
                required: "Please, enter a program name",
                minlength: "Your program name must be at least 4 characters long"
            },
            programtypeselec: {
                required: "Please select a program type"
            },
            capacity: {
                required: "Please enter a valid number",
                number: "Please enter an integer"
            },
            tabselect: {
                required: "Please select at least one tab"
            }
        }

    });
    
    });
