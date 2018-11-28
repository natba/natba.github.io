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
            console.log(data);
            console.log(status);
	  });
  });

  // Ajax post example - need server permission
  $("#postButton").click(function(){
    $.post("demo_test_post.php", 
           { name: "Donald Duck", city: "Duckburg" }, 
           function(data, status){
             $("#postSection").html(data);
             console.log(data);
             console.log(status);
           });
  });

  // Ajax put example - need server permission
  $("#putButton").click(function(){
    $.ajax({ url: 'demo_test.js',
             type: 'PUT',
             data: { name: "Batman", city: "Gotham" },
             contentType: "application/json",
             success: function(data, status) {
                        $("#putSection").html(data);
                        console.log(data);
                        console.log(status);
                      }
          });
    });
});
