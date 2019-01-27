jQuery(function($) {

    // Filter category descriptions
    $(document).ready(function(){
        $("#highlights").click(function(){
            $(this).addClass("category_active");
            $("#webdev").removeClass("category_active");
            $("#uxdesign").removeClass("category_active");
            $("#others").removeClass("category_active");

            $("#brief_all").fadeIn(800);
            $("#brief_smartcity").hide();
            $("#brief_ux").hide();
            $("#brief_datamining").hide();
        });

        $("#webdev").click(function(){
            $(this).addClass("category_active");
            $("#highlights").removeClass("category_active");
            $("#uxdesign").removeClass("category_active");
            $("#others").removeClass("category_active");

            $("#brief_all").hide();
            $("#brief_smartcity").fadeIn(800);
            $("#brief_ux").hide();
            $("#brief_datamining").hide();
        });

        $("#uxdesign").click(function(){
            $(this).addClass("category_active");
            $("#highlights").removeClass("category_active");
            $("#webdev").removeClass("category_active");
            $("#others").removeClass("category_active");
            
            $("#brief_all").hide();
            $("#brief_smartcity").hide();
            $("#brief_ux").fadeIn(800);
            $("#brief_datamining").hide();
        });

        $("#others").click(function(){
            $(this).addClass("category_active");
            $("#highlights").removeClass("category_active");
            $("#uxdesign").removeClass("category_active");
            $("#webdev").removeClass("category_active");

            $("#brief_all").hide();
            $("#brief_smartcity").hide();
            $("#brief_ux").hide();
            $("#brief_datamining").fadeIn(800);
        });
    });

    // Haptics project demo link fades on scroll
    $(window).scroll(function(){
        $("#haptics_demo").css("opacity", 1 - $(window).scrollTop() / 350);
    });

    // Init the highlights projects with a click
    $(window).one('scroll',function() {
        $("#highlights").click();
     });

});
