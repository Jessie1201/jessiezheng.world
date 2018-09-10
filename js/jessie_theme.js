jQuery(function($) {
  // Filter category descriptions
  $(document).ready(function(){
      $("#all").click(function(){
          $(this).addClass("category_active");
          $("#smartcity").removeClass("category_active");
          $("#ux_interaction").removeClass("category_active");
          $("#datamining").removeClass("category_active");

          $("#brief_all").fadeIn(800);
          $("#brief_smartcity").hide();
          $("#brief_ux").hide();
          $("#brief_datamining").hide();
      });

      $("#smartcity").click(function(){
          $(this).addClass("category_active");
          $("#all").removeClass("category_active");
          $("#ux_interaction").removeClass("category_active");
          $("#datamining").removeClass("category_active");

          $("#brief_all").hide();
          $("#brief_smartcity").fadeIn(800);
          $("#brief_ux").hide();
          $("#brief_datamining").hide();
      });

      $("#ux_interaction").click(function(){
          $(this).addClass("category_active");
          $("#all").removeClass("category_active");
          $("#smartcity").removeClass("category_active");
          $("#datamining").removeClass("category_active");
          
          $("#brief_all").hide();
          $("#brief_smartcity").hide();
          $("#brief_ux").fadeIn(800);
          $("#brief_datamining").hide();
      });

      $("#datamining").click(function(){
          $(this).addClass("category_active");
          $("#all").removeClass("category_active");
          $("#ux_interaction").removeClass("category_active");
          $("#smartcity").removeClass("category_active");

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

});