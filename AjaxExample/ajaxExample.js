// CSD 122 Ajax Example - Nat Ballou
$(document).ready(function(){
  // Ajax load example
  $("#loadButton").click(function(){
    $("#loadSection").load("demo_test.html", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      else alert("Error: " + xhr.status + ": " + xhr.statusText);

      console.log(responseTxt);
      console.log(statusTxt);
      console.log(xhr);
    });
  });

  // Ajax get example
  $("#getButton").click(function() {
    $.get("https://natba.github.io/AjaxExample/demo_test.js", 
          function(data, status){
            $("#getSection").html(data);
	    console.log(data);
	    console.log(status);
	  });
    });

  // Ajax post example - need server permission
  $("#postButton").click(function(){
    $.post("demo_test_post.php", 
            {
              name: "Donald Duck",
              city: "Duckburg"
            }, 
           function(data, status){
             alert("Data: " + data + "\nStatus: " + status);
             $("#postSection").html(data);
           });
    });

  // Ajax put example
  $("#putButton").click(function(){
    $.ajax({ url: 'demo_test.js',
             type: 'PUT',
             data: { name: "Micky Mouse", city: "Disney" },
             contentType: "application/json",
             success: function(data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                        $("#putSection").html(data);
                      }
          });
    });
});
