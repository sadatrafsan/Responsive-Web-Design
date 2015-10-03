$(document).ready(function() {
    
    $("#navigation").on("click",function(){
        
        $("#navFlag").slideToggle("normal",function(){
            
            if ($("#navFlag").is(":visible")) {
                    $("#navigation").text("Hide Navigation");
            } else {
                    $("#navigation").text("Show Navigation");
            }
        }); 
    });
});