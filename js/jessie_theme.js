// Filter category descriptions
jQuery(function($) {
  $(document).ready(function(){
      $("#smartcity").click(function(){
          $("#brief_smartcity").fadeIn(800);
          $("#brief_ux").hide();
          $("#brief_datamining").hide();
      });
      $("#ux_interaction").click(function(){
          $("#brief_smartcity").hide();
          $("#brief_ux").fadeIn(800);
          $("#brief_datamining").hide();
      });
      $("#datamining").click(function(){
          $("#brief_smartcity").hide();
          $("#brief_ux").hide();
          $("#brief_datamining").fadeIn(800);
      });
      $("#all").click(function(){
          $("#brief_smartcity").hide();
          $("#brief_ux").hide();
          $("#brief_datamining").hide();
      });
  });
});