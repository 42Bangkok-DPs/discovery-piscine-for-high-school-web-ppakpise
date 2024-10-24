$(document).ready(function(){
    $("#omg-text").hover(
        function() {
            $(this).css("color", "#28a745");  
        }, function() {
            $(this).css("color", "#ff5733");
        }
    );
    

    $("#image1, #image2").hide().fadeIn(2000);  
    
    
    document.querySelectorAll('.image-container img').forEach(img => {
        img.addEventListener('click', function() {
            if (this.style.width === '400px') {
                this.style.width = '200px';  
            } else {
                this.style.width = '400px';  
            }
        });
    });
});
