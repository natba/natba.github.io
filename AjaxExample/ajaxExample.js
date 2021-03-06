// CSD 122 Ajax Example - Nat Ballou
$(document).ready(function(){
  // Ajax load example - with logging
  $("#loadButton").click(function(){
    $("#loadSection").load("demo_test.html", 
      function(responseTxt, statusTxt, xhr){
        console.log(responseTxt);
        console.log(statusTxt);
        console.log(xhr);
    });
  });

  // Ajax get example - with logging
  $("#getButton").click(function() {
    $.get("https://natba.github.io/AjaxExample/demo_test.js", 
          function(data, status){
            $("#getSection").html(data);
	    jQuery.globalEval(data);
            console.log(db);
	  });
  });

  // Ajax post example - need server permission to run PHP
  // script - not available on pages.github.io
  $("#postButton").click(function(){
    $.post("demo_test_post.php", 
           { name: "Donald Duck", city: "Duckburg" }, 
           function(data, status){
             $("#postSection").html(data);
             console.log(data);
             console.log(status);
           });
  });
});
